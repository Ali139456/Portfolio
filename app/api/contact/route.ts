import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function escapeHtml(text: string) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

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

        const from =
            process.env.RESEND_FROM?.trim() ||
            'Portfolio Contact <onboarding@resend.dev>';
        const to = process.env.CONTACT_TO_EMAIL?.trim() || 'alimirza0006@gmail.com';

        const safeName = escapeHtml(String(name).trim());
        const safeEmail = escapeHtml(String(email).trim());
        const safeMessage = escapeHtml(String(message).trim()).replace(/\n/g, '<br>');

        // Send email using Resend
        const data = await resend.emails.send({
            from,
            to,
            replyTo: email,
            subject: `Portfolio contact from ${String(name).trim().slice(0, 120)}`,
            html: `
                <h2>New contact form submission</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
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
