import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/db/config';
import { RowDataPacket } from 'mysql2';

interface CountResult extends RowDataPacket {
    count: number;
}

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log('No session found');
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        console.log('Fetching dashboard stats...');

        // Test database connection first
        try {
            console.log('Testing database connection...');
            const connection = await db.getConnection();
            console.log('Database connection successful');
            
            // Test a simple query
            await connection.query('SELECT 1');
            console.log('Database query test successful');
            
            connection.release();
        } catch (dbError) {
            console.error('Database connection failed:', {
                message: dbError instanceof Error ? dbError.message : 'Unknown error',
                stack: dbError instanceof Error ? dbError.stack : undefined,
                name: dbError instanceof Error ? dbError.name : undefined,
                code: dbError instanceof Error ? (dbError as any).code : undefined,
                errno: dbError instanceof Error ? (dbError as any).errno : undefined,
                sqlState: dbError instanceof Error ? (dbError as any).sqlState : undefined,
                sqlMessage: dbError instanceof Error ? (dbError as any).sqlMessage : undefined,
            });
            throw new Error('Database connection failed');
        }

        // Get total leads
        console.log('Querying total leads...');
        const [totalLeadsResult] = await db.query<CountResult[]>('SELECT COUNT(*) as count FROM leads');
        console.log('Total leads result:', totalLeadsResult);
        const totalLeads = totalLeadsResult[0]?.count || 0;
        console.log('Total leads:', totalLeads);

        // Get new leads in last 24 hours
        console.log('Querying new leads...');
        const [newLeadsResult] = await db.query<CountResult[]>(
            'SELECT COUNT(*) as count FROM leads WHERE created_at >= DATE_SUB(NOW(), INTERVAL 24 HOUR)'
        );
        console.log('New leads result:', newLeadsResult);
        const newLeads = newLeadsResult[0]?.count || 0;
        console.log('New leads in last 24 hours:', newLeads);

        // Get total users (placeholder for now)
        const totalUsers = 1;

        console.log('Successfully fetched dashboard stats');

        return NextResponse.json({
            success: true,
            data: {
                totalLeads,
                newLeads,
                totalUsers,
            },
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', {
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
                error: error instanceof Error ? error.message : 'Failed to fetch dashboard stats',
            },
            { status: 500 }
        );
    }
} 