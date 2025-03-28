import { NextResponse } from 'next/server';
import { LeadService } from '@/services/leadService';

const leadService = new LeadService();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, jobTitle, industry, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create lead
    const leadId = await leadService.createLead({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      company,
      job_title: jobTitle,
      industry,
      source: 'contact_form'
    });

    // Create lead message
    await leadService.createLeadMessage({
      lead_id: leadId,
      subject,
      message
    });

    // Create lead activity
    await leadService.createLeadActivity({
      lead_id: leadId,
      activity_type: 'email',
      description: 'Initial contact form submission',
      created_by: 'system'
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully', leadId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Handle specific database errors
    if (error instanceof Error) {
      if (error.message.includes('Duplicate entry')) {
        return NextResponse.json(
          { error: 'This email address has already been registered' },
          { status: 400 }
        );
      }
      if (error.message.includes('ER_BAD_NULL_ERROR')) {
        return NextResponse.json(
          { error: 'Required fields cannot be empty' },
          { status: 400 }
        );
      }
      if (error.message.includes('ER_ACCESS_DENIED_ERROR')) {
        return NextResponse.json(
          { error: 'Database access denied. Please check your credentials.' },
          { status: 500 }
        );
      }
      if (error.message.includes('ECONNREFUSED')) {
        return NextResponse.json(
          { error: 'Could not connect to the database. Please try again later.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
} 