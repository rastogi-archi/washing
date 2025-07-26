import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, message: "All fields required" }, { status: 400 });
        }

        await resend.emails.send({
            from: 'LaundryMate <onboarding@resend.dev>',
            to: 'rastogiarchi18@gmail.com',
            subject: '📩 New Contact Form Submission',
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; background-color: #ffffff; color: #333; padding: 32px; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 12px;">
                <h2 style="color: #032b56; margin-bottom: 8px;">📬 You Have a New Message</h2>
                <p style="font-size: 15px; margin-bottom: 24px;">You've received a new message from the LaundryMate contact form.</p>

                <div style="font-size: 15px; line-height: 1.6;">
                    <p><strong>👤 Name:</strong> ${name}</p>
                    <p><strong>📧 Email:</strong> ${email}</p>
                    <p><strong>💬 Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
                </div>

                <hr style="margin: 32px 0; border: none; border-top: 1px solid #e0e0e0;" />

                <p style="font-size: 13px; color: #888;">This email was sent automatically from the LaundryMate contact form.</p>
                </div> `
        });

        return NextResponse.json({ success: true, message: "Email sent successfully" });

    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ success: false, message: "Email failed to send" }, { status: 500 });
    }
}
