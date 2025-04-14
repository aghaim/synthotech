import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { recaptchaToken, ...leadData } = formData;

    // Verify reCAPTCHA token
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      industry,
      subject,
      message,
      selectedServices
    } = leadData;

    console.log('Processing contact form submission for email:', email);

    // Store in database
    const connection = await pool.getConnection();
    try {
      // Check if lead exists
      const [existingLeads] = await connection.execute(
        'SELECT id FROM leads WHERE email = ?',
        [email]
      );

      let leadId: number;

      if ((existingLeads as any[]).length > 0) {
        // Lead exists, create a follow-up
        leadId = (existingLeads as any[])[0].id;
        console.log('Found existing lead with ID:', leadId);
        
        // Create follow-up
        const [followupResult] = await connection.execute(
          `INSERT INTO lead_follow_ups (
            lead_id, type, notes, next_follow_up_date, created_by, created_at
          ) VALUES (?, 'contact_form', ?, DATE_ADD(NOW(), INTERVAL 1 DAY), 'website', NOW())`,
          [leadId, `Subject: ${subject}\n\nMessage:\n${message}`]
        );
        console.log('Created follow-up:', followupResult);

        // Update lead's information
        const [updateResult] = await connection.execute(
          `UPDATE leads SET 
            first_name = ?,
            last_name = ?,
            phone = COALESCE(?, phone),
            company = COALESCE(?, company),
            job_title = COALESCE(?, job_title),
            industry = COALESCE(?, industry),
            updated_at = NOW()
          WHERE id = ?`,
          [
            firstName,
            lastName,
            phone || null,
            company || null,
            jobTitle || null,
            industry || null,
            leadId
          ]
        );
        console.log('Updated lead:', updateResult);
      } else {
        // Create new lead
        const [result] = await connection.execute(
          `INSERT INTO leads (
            first_name, last_name, email, phone, company, 
            job_title, industry, status, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, 'new', NOW(), NOW())`,
          [
            firstName, lastName, email, phone, company,
            jobTitle, industry
          ]
        );

        leadId = (result as any).insertId;
        console.log('Created new lead with ID:', leadId);

        // Create initial follow-up
        const [followupResult] = await connection.execute(
          `INSERT INTO lead_follow_ups (
            lead_id, type, notes, next_follow_up_date, created_by, created_at
          ) VALUES (?, 'contact_form', ?, DATE_ADD(NOW(), INTERVAL 1 DAY), 'website', NOW())`,
          [leadId, `Subject: ${subject}\n\nMessage:\n${message}`]
        );
        console.log('Created initial follow-up:', followupResult);
      }

      // Insert selected services (if not already associated)
      if (selectedServices && selectedServices.length > 0) {
        // First, get existing services for this lead
        const [existingServices] = await connection.execute(
          'SELECT service_id FROM lead_services WHERE lead_id = ?',
          [leadId]
        );
        
        const existingServiceIds = (existingServices as any[]).map(s => s.service_id);
        const newServiceIds = selectedServices.filter((id: number) => !existingServiceIds.includes(id));

        if (newServiceIds.length > 0) {
          const serviceValues = newServiceIds.map((serviceId: number) => [leadId, serviceId]);
          const [serviceResult] = await connection.query(
            'INSERT INTO lead_services (lead_id, service_id) VALUES ?',
            [serviceValues]
          );
          console.log('Added new services:', serviceResult);
        } else {
          console.log('No new services to add');
        }
      }

      await connection.commit();
      console.log('Transaction committed successfully');
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    } catch (error) {
      await connection.rollback();
      console.error('Database error:', error);
      throw error;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 