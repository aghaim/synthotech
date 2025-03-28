import { pool } from '@/db/config';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';
import { RowDataPacket } from 'mysql2';

interface User extends RowDataPacket {
    id: number;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    role: string;
    is_active: boolean;
}

export interface UserSession {
    id: number;
    user_id: number;
    session_token: string;
    expires_at: Date;
}

export class AuthService {
    async createUser(user: {
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        role: 'admin' | 'manager' | 'agent';
    }): Promise<User> {
        const passwordHash = await bcrypt.hash(user.password, 10);
        const [result] = await pool.execute(
            `INSERT INTO users (email, password_hash, first_name, last_name, role)
             VALUES (?, ?, ?, ?, ?)`,
            [user.email, passwordHash, user.first_name, user.last_name, user.role]
        );
        
        return this.getUserById((result as any).insertId);
    }

    async login(email: string, password: string) {
        try {
            const [users] = await pool.execute<RowDataPacket[]>(
                'SELECT * FROM users WHERE email = ? AND is_active = TRUE',
                [email]
            );

            const user = users[0] as User;
            if (!user) {
                throw new Error('Invalid credentials');
            }

            const isValidPassword = await bcrypt.compare(password, user.password_hash);
            if (!isValidPassword) {
                throw new Error('Invalid credentials');
            }

            // Generate session token
            const sessionToken = await bcrypt.hash(Date.now().toString(), 10);
            const expiresAt = new Date();
            expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

            // Store session in database
            await pool.execute(
                'INSERT INTO user_sessions (user_id, session_token, expires_at) VALUES (?, ?, ?)',
                [user.id, sessionToken, expiresAt]
            );

            // Set session cookie
            cookies().set('session_token', sessionToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                expires: expiresAt
            });

            return {
                id: user.id,
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name,
                role: user.role
            };
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async logout() {
        try {
            const sessionToken = cookies().get('session_token')?.value;
            if (sessionToken) {
                await pool.execute(
                    'DELETE FROM user_sessions WHERE session_token = ?',
                    [sessionToken]
                );
                cookies().delete('session_token');
            }
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    async validateSession(sessionToken: string) {
        try {
            const [sessions] = await pool.execute<RowDataPacket[]>(
                'SELECT us.*, u.email, u.first_name, u.last_name, u.role FROM user_sessions us JOIN users u ON us.user_id = u.id WHERE us.session_token = ? AND us.expires_at > NOW() AND u.is_active = TRUE',
                [sessionToken]
            );

            if (sessions.length === 0) {
                return null;
            }

            const session = sessions[0];
            return {
                id: session.user_id,
                email: session.email,
                firstName: session.first_name,
                lastName: session.last_name,
                role: session.role
            };
        } catch (error) {
            console.error('Session validation error:', error);
            return null;
        }
    }

    async getUserById(id: number): Promise<User> {
        const [users] = await pool.execute(
            'SELECT id, email, first_name, last_name, role, is_active, last_login FROM users WHERE id = ?',
            [id]
        );

        return (users as any[])[0];
    }

    async getUserPermissions(role: string): Promise<string[]> {
        const [permissions] = await pool.execute(
            'SELECT permission FROM role_permissions WHERE role = ?',
            [role]
        );

        return (permissions as any[]).map(p => p.permission);
    }

    async updateUser(id: number, updates: {
        first_name?: string;
        last_name?: string;
        role?: 'admin' | 'manager' | 'agent';
        is_active?: boolean;
    }): Promise<User> {
        const setClauses: string[] = [];
        const values: any[] = [];

        Object.entries(updates).forEach(([key, value]) => {
            if (value !== undefined) {
                setClauses.push(`${key} = ?`);
                values.push(value);
            }
        });

        if (setClauses.length > 0) {
            values.push(id);
            await pool.execute(
                `UPDATE users SET ${setClauses.join(', ')} WHERE id = ?`,
                values
            );
        }

        return this.getUserById(id);
    }

    async changePassword(userId: number, currentPassword: string, newPassword: string): Promise<boolean> {
        const [users] = await pool.execute(
            'SELECT password_hash FROM users WHERE id = ?',
            [userId]
        );

        const user = (users as any[])[0];
        if (!user) return false;

        const isValid = await bcrypt.compare(currentPassword, user.password_hash);
        if (!isValid) return false;

        const newPasswordHash = await bcrypt.hash(newPassword, 10);
        await pool.execute(
            'UPDATE users SET password_hash = ? WHERE id = ?',
            [newPasswordHash, userId]
        );

        return true;
    }

    async listUsers(page: number = 1, limit: number = 10): Promise<{ users: User[]; total: number }> {
        const offset = (page - 1) * limit;
        
        const [users] = await pool.execute(
            `SELECT id, email, first_name, last_name, role, is_active, last_login 
             FROM users 
             ORDER BY created_at DESC 
             LIMIT ? OFFSET ?`,
            [limit, offset]
        );

        const [countResult] = await pool.execute('SELECT COUNT(*) as total FROM users');
        const total = (countResult as any[])[0].total;

        return {
            users: users as User[],
            total
        };
    }
}

export async function verifySession(sessionToken: string): Promise<boolean> {
    try {
        const [sessions] = await pool.execute<RowDataPacket[]>(
            'SELECT us.*, u.email, u.first_name, u.last_name, u.role FROM user_sessions us JOIN users u ON us.user_id = u.id WHERE us.session_token = ? AND us.expires_at > NOW() AND u.is_active = TRUE',
            [sessionToken]
        );

        return sessions.length > 0;
    } catch (error) {
        console.error('Session verification error:', error);
        return false;
    }
} 