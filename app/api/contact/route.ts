import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if Resend is configured
        if (!resend) {
            return NextResponse.json(
                { error: 'Email service not configured. Please add RESEND_API_KEY to .env.local' },
                { status: 500 }
            );
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain or onboarding domain
            to: 'alimirza0006@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        return NextResponse.json(
            { message: 'Email sent successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
