import { NextResponse } from 'next/server';
import { pool } from '@/db/config';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const [messages] = await pool.execute(
            `SELECT id, subject, message, created_at
             FROM lead_messages
             WHERE lead_id = ?
             ORDER BY created_at DESC`,
            [params.id]
        );

        return NextResponse.json({ messages });
    } catch (error) {
        console.error('Error fetching lead messages:', error);
        return NextResponse.json(
            { message: 'Error fetching lead messages' },
            { status: 500 }
        );
    }
} 