import { NextResponse } from 'next/server';
import { pool } from '@/db/config';
import { headers } from 'next/headers';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const [leads] = await pool.execute(
            `SELECT id, first_name, last_name, email, phone, company, job_title, 
                    industry, status, priority, created_at
             FROM leads 
             WHERE id = ?`,
            [params.id]
        );

        const lead = (leads as any[])[0];

        if (!lead) {
            return NextResponse.json(
                { message: 'Lead not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(lead);
    } catch (error) {
        console.error('Error fetching lead:', error);
        return NextResponse.json(
            { message: 'Error fetching lead' },
            { status: 500 }
        );
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const headersList = headers();
        const userId = headersList.get('x-user-id');
        const updates = await request.json();
        const allowedUpdates = ['status', 'priority'];
        const setClauses: string[] = [];
        const values: any[] = [];

        Object.entries(updates).forEach(([key, value]) => {
            if (allowedUpdates.includes(key)) {
                setClauses.push(`${key} = ?`);
                values.push(value);
            }
        });

        if (setClauses.length === 0) {
            return NextResponse.json(
                { message: 'No valid updates provided' },
                { status: 400 }
            );
        }

        // Update lead
        values.push(params.id);
        await pool.execute(
            `UPDATE leads SET ${setClauses.join(', ')} WHERE id = ?`,
            values
        );

        // Create activity records
        const activities = [];
        if (updates.status) {
            activities.push({
                type: 'status_change',
                description: `Status updated to ${updates.status}`,
            });
        }
        if (updates.priority) {
            activities.push({
                type: 'priority_change',
                description: `Priority updated to ${updates.priority}`,
            });
        }

        // Insert activities
        for (const activity of activities) {
            await pool.execute(
                `INSERT INTO lead_activities (lead_id, activity_type, description, created_by)
                 VALUES (?, ?, ?, ?)`,
                [params.id, activity.type, activity.description, userId]
            );
        }

        // Get updated lead
        const [leads] = await pool.execute(
            `SELECT id, first_name, last_name, email, phone, company, job_title, 
                    industry, status, priority, created_at
             FROM leads 
             WHERE id = ?`,
            [params.id]
        );

        return NextResponse.json((leads as any[])[0]);
    } catch (error) {
        console.error('Error updating lead:', error);
        return NextResponse.json(
            { message: 'Error updating lead' },
            { status: 500 }
        );
    }
} 