import { NextResponse } from 'next/server';
import db from '@/db/config';

export async function GET() {
    try {
        console.log('Testing database connection...');
        const connection = await db.getConnection();
        console.log('Database connection successful');
        
        // Test a simple query
        const [result] = await connection.query('SELECT 1 as test');
        console.log('Database query test successful:', result);
        
        connection.release();
        
        return NextResponse.json({
            success: true,
            message: 'Database connection successful',
            result
        });
    } catch (error) {
        console.error('Database connection failed:', {
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
                error: error instanceof Error ? error.message : 'Database connection failed',
                details: error instanceof Error ? {
                    code: (error as any).code,
                    errno: (error as any).errno,
                    sqlState: (error as any).sqlState,
                    sqlMessage: (error as any).sqlMessage,
                } : undefined
            },
            { status: 500 }
        );
    }
} 