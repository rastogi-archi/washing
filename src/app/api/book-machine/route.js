import { NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import BookingModel from "@/model/Booking.model";

export async function POST(request) {
  await dbConnect();

  try {
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
