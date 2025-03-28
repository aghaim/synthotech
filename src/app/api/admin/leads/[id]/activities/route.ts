import { NextResponse } from 'next/server';
import { pool } from '@/db/config';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const [activities] = await pool.execute(
            `SELECT la.id, la.activity_type as type, la.description, la.created_at,
                    CONCAT(u.first_name, ' ', u.last_name) as created_by
             FROM lead_activities la
             LEFT JOIN users u ON la.created_by = u.id
             WHERE la.lead_id = ?
             ORDER BY la.created_at DESC`,
            [params.id]
        );

        return NextResponse.json({ activities });
    } catch (error) {
        console.error('Error fetching lead activities:', error);
        return NextResponse.json(
            { message: 'Error fetching lead activities' },
            { status: 500 }
        );
    }
} 