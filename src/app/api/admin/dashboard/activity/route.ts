import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/db/config';
import { RowDataPacket } from 'mysql2';

interface Lead extends RowDataPacket {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    company: string;
    status: string;
    priority: string;
    created_at: Date;
}

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log('No session found');
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        console.log('Fetching recent activities...');

        // Get recent leads
        const [leads] = await db.query<Lead[]>(
            'SELECT id, first_name, last_name, email, company, status, priority, created_at FROM leads ORDER BY created_at DESC LIMIT 5'
        );
        console.log('Recent leads:', leads);

        return NextResponse.json({
            success: true,
            data: leads.map(lead => ({
                id: lead.id,
                type: 'lead',
                title: `${lead.first_name} ${lead.last_name}`,
                subtitle: lead.company,
                status: lead.status,
                priority: lead.priority,
                timestamp: lead.created_at,
            })),
        });
    } catch (error) {
        console.error('Error fetching activities:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            name: error instanceof Error ? error.name : undefined,
            code: error instanceof Error ? (error as any).code : undefined,
            errno: error instanceof Error ? (error as any).errno : undefined,
            sqlState: error instanceof Error ? (error as any).sqlState : undefined,
            sqlMessage: error instanceof Error ? (error as any).sqlMessage : undefined,
        });

        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to fetch activities',
            },
            { status: 500 }
        );
    }
} 