import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/db/config';

export async function GET(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const status = searchParams.get('status');
        const priority = searchParams.get('priority');
        const search = searchParams.get('search');
        const limit = 10;
        const offset = (page - 1) * limit;

        // Build the WHERE clause dynamically
        const conditions: string[] = [];
        const params: any[] = [];

        if (status) {
            conditions.push('LOWER(status) = LOWER(?)');
            params.push(status);
        }

        if (priority) {
            conditions.push('LOWER(priority) = LOWER(?)');
            params.push(priority);
        }

        if (search) {
            conditions.push('(LOWER(first_name) LIKE LOWER(?) OR LOWER(last_name) LIKE LOWER(?) OR LOWER(email) LIKE LOWER(?) OR LOWER(company) LIKE LOWER(?))');
            const searchPattern = `%${search}%`;
            params.push(searchPattern, searchPattern, searchPattern, searchPattern);
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

        // Get total count
        const [countResult] = await db.query(
            `SELECT COUNT(*) as total FROM leads ${whereClause}`,
            params
        );
        const total = (countResult as any[])[0].total;
        const totalPages = Math.ceil(total / limit);

        // Get leads with pagination
        const [leads] = await db.query(
            `SELECT * FROM leads ${whereClause} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
            [...params, limit, offset]
        );

        return NextResponse.json({
            leads,
            pagination: {
                currentPage: page,
                totalPages,
                total,
                limit
            }
        });
    } catch (error) {
        console.error('Error fetching leads:', error);
        return NextResponse.json(
            { message: error instanceof Error ? error.message : 'Failed to fetch leads' },
            { status: 500 }
        );
    }
} 