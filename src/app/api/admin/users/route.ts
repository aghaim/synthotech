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

interface CountResult extends RowDataPacket {
    total: number;
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const role = searchParams.get('role') || 'all';
        const search = searchParams.get('search') || '';

        const limit = 10;
        const offset = (page - 1) * limit;

        let whereClause = '1=1';
        const params: any[] = [];

        if (role !== 'all') {
            whereClause += ' AND role = ?';
            params.push(role);
        }

        if (search) {
            whereClause += ' AND (email LIKE ? OR first_name LIKE ? OR last_name LIKE ?)';
            const searchPattern = `%${search}%`;
            params.push(searchPattern, searchPattern, searchPattern);
        }

        // Get total count
        const [countResult] = await pool.query<CountResult[]>(
            `SELECT COUNT(*) as total FROM users WHERE ${whereClause}`,
            params
        );
        const total = countResult[0].total;

        // Get users for current page
        const [users] = await pool.query<User[]>(
            `SELECT id, email, first_name, last_name, role, is_active, last_login 
             FROM users 
             WHERE ${whereClause}
             ORDER BY created_at DESC 
             LIMIT ? OFFSET ?`,
            [...params, limit, offset]
        );

        return NextResponse.json({
            users,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json(
            { error: 'Failed to fetch users' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const { email, first_name, last_name, role, password } = await request.json();

        // Basic validation
        if (!email || !first_name || !last_name || !role || !password) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check if email already exists
        const [existingUsers] = await pool.query<User[]>(
            'SELECT id FROM users WHERE email = ?',
            [email]
        );

        if (existingUsers.length > 0) {
            return NextResponse.json(
                { error: 'Email already exists' },
                { status: 400 }
            );
        }

        // Insert new user
        const [result] = await pool.query<ResultSetHeader>(
            `INSERT INTO users (email, first_name, last_name, role, password_hash, is_active) 
             VALUES (?, ?, ?, ?, ?, true)`,
            [email, first_name, last_name, role, password] // Note: In production, password should be hashed
        );

        const userId = result.insertId;

        return NextResponse.json({
            id: userId,
            email,
            first_name,
            last_name,
            role,
            is_active: true,
        });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json(
            { error: 'Failed to create user' },
            { status: 500 }
        );
    }
} 