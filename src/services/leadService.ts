import { db } from '../db/config';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export interface Lead extends RowDataPacket {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  job_title?: string;
  industry?: string;
  source?: string;
  status?: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';
  priority?: 'low' | 'medium' | 'high';
  created_at?: Date;
  updated_at?: Date;
}

export interface LeadMessage extends RowDataPacket {
  id?: number;
  lead_id: number;
  subject: string;
  message: string;
  created_at?: Date;
}

export interface LeadActivity extends RowDataPacket {
  id?: number;
  lead_id: number;
  activity_type: 'email' | 'call' | 'meeting' | 'note' | 'status_change' | 'other';
  description: string;
  created_by: string;
  created_at?: Date;
}

export class LeadService {
  // Create a new lead
  async createLead(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at'>): Promise<number> {
    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO leads (first_name, last_name, email, phone, company, job_title, industry, source, status, priority)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        lead.first_name,
        lead.last_name,
        lead.email,
        lead.phone || null,
        lead.company || null,
        lead.job_title || null,
        lead.industry || null,
        lead.source || null,
        lead.status || 'new',
        lead.priority || 'medium'
      ]
    );
    return result.insertId;
  }

  // Create a new lead message
  async createLeadMessage(message: Omit<LeadMessage, 'id' | 'created_at'>): Promise<number> {
    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO lead_messages (lead_id, subject, message)
       VALUES (?, ?, ?)`,
      [message.lead_id, message.subject, message.message]
    );
    return result.insertId;
  }

  // Create a new lead activity
  async createLeadActivity(activity: Omit<LeadActivity, 'id' | 'created_at'>): Promise<number> {
    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO lead_activities (lead_id, activity_type, description, created_by)
       VALUES (?, ?, ?, ?)`,
      [activity.lead_id, activity.activity_type, activity.description, activity.created_by]
    );
    return result.insertId;
  }

  // Get lead by ID
  async getLeadById(id: number): Promise<Lead | null> {
    const [rows] = await db.query<Lead[]>(
      'SELECT * FROM leads WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  }

  // Get lead by email
  async getLeadByEmail(email: string): Promise<Lead | null> {
    const [rows] = await db.query<Lead[]>(
      'SELECT * FROM leads WHERE email = ?',
      [email]
    );
    return rows[0] || null;
  }

  // Get lead messages
  async getLeadMessages(leadId: number): Promise<LeadMessage[]> {
    const [rows] = await db.query<LeadMessage[]>(
      'SELECT * FROM lead_messages WHERE lead_id = ? ORDER BY created_at DESC',
      [leadId]
    );
    return rows;
  }

  // Get lead activities
  async getLeadActivities(leadId: number): Promise<LeadActivity[]> {
    const [rows] = await db.query<LeadActivity[]>(
      'SELECT * FROM lead_activities WHERE lead_id = ? ORDER BY created_at DESC',
      [leadId]
    );
    return rows;
  }

  // Update lead status
  async updateLeadStatus(id: number, status: Lead['status']): Promise<void> {
    await db.execute(
      'UPDATE leads SET status = ? WHERE id = ?',
      [status, id]
    );
  }

  // Update lead priority
  async updateLeadPriority(id: number, priority: Lead['priority']): Promise<void> {
    await db.execute(
      'UPDATE leads SET priority = ? WHERE id = ?',
      [priority, id]
    );
  }

  // Get all leads with pagination
  async getAllLeads(page: number = 1, limit: number = 10): Promise<{ leads: Lead[]; total: number }> {
    const offset = (page - 1) * limit;
    const [rows] = await db.query<Lead[]>(
      'SELECT * FROM leads ORDER BY created_at DESC LIMIT ? OFFSET ?',
      [limit, offset]
    );
    const [totalResult] = await db.query<RowDataPacket[]>('SELECT COUNT(*) as count FROM leads');
    return {
      leads: rows,
      total: totalResult[0].count
    };
  }
} 