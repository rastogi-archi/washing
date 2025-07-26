import { NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import BookingModel from "@/model/Booking.model";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    await dbConnect();

    const { name, email, machineNumber, date, startTime, endTime } = await request.json();

    if (!name || !email || !machineNumber || !date || !startTime || !endTime) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const start = new Date(`${date}T${startTime}`);
    const end = new Date(`${date}T${endTime}`);

    if (isNaN(start) || isNaN(end) || end <= start) {
      return NextResponse.json(
        { success: false, message: "Invalid time range" },
        { status: 400 }
      );
    }

    const existingBooking = await BookingModel.findOne({
      machineNumber,
      date,
      $or: [
        {
          startTime: { $lt: endTime },
          endTime: { $gt: startTime },
        },
      ],
    });

    if (existingBooking) {
      return NextResponse.json({
        success: false,
        message: "Machine is already occupied during this time slot",
      });
    }

    const newBooking = await BookingModel.create({
      name,
      email,
      machineNumber,
      date,
      startTime,
      endTime,
    });

    await resend.emails.send({
      from: 'LaundryMate <onboarding@resend.dev>',
      to: 'rastogiarchi18@gmail.com',
      subject: 'Your Laundry Slot is Confirmed!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 10px;">
          <h2>Hello ${name},</h2>
          <p>✅ Your laundry slot has been successfully booked.</p>
          <p><strong>Details:</strong></p>
          <ul>
            <li><strong>Machine:</strong> ${machineNumber}</li>
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${startTime} to ${endTime}</li>
          </ul>
          <p>Thank you for using <strong>LaundryMate</strong>!</p>
        </div>
      `
    });

    return NextResponse.json({
      success: true,
      message: "Slot booked successfully",
      booking: newBooking,
    });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Error while booking slot" },
      { status: 500 }
    );
  }
}
