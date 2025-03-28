import { NextResponse } from 'next/server';
import { pool } from '@/db/config';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

interface User extends RowDataPacket {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    is_active: boolean;
    last_login: string | null;
}

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const [users] = await pool.query<User[]>(
            'SELECT id, email, first_name, last_name, role, is_active, last_login FROM users WHERE id = ?',
            [params.id]
        );

        if (users.length === 0) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(users[0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json(
            { error: 'Failed to fetch user' },
            { status: 500 }
        );
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const updates = await request.json();
        const allowedUpdates = ['first_name', 'last_name', 'role', 'is_active', 'password'];
        const updateFields: string[] = [];
        const updateValues: any[] = [];

        // Filter out invalid update fields
        Object.keys(updates).forEach(key => {
            if (allowedUpdates.includes(key) && updates[key] !== undefined) {
                if (key === 'password') {
                    updateFields.push('password_hash = ?');
                    updateValues.push(updates[key]); // Note: In production, password should be hashed
                } else {
                    updateFields.push(`${key} = ?`);
                    updateValues.push(updates[key]);
                }
            }
        });

        if (updateFields.length === 0) {
            return NextResponse.json(
                { error: 'No valid update fields provided' },
                { status: 400 }
            );
        }

        // Add user ID to values array
        updateValues.push(params.id);

        // Update user
        const [result] = await pool.query<ResultSetHeader>(
            `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?`,
            updateValues
        );

        if (result.affectedRows === 0) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Fetch updated user
        const [users] = await pool.query<User[]>(
            'SELECT id, email, first_name, last_name, role, is_active, last_login FROM users WHERE id = ?',
            [params.id]
        );

        return NextResponse.json(users[0]);
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json(
            { error: 'Failed to update user' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Check if user exists
        const [users] = await pool.query<User[]>(
            'SELECT id FROM users WHERE id = ?',
            [params.id]
        );

        if (users.length === 0) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Delete user
        await pool.query('DELETE FROM users WHERE id = ?', [params.id]);

        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json(
            { error: 'Failed to delete user' },
            { status: 500 }
        );
    }
} 