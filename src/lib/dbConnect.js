import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log('Already connected to database');
    return;
  }

  try {
    const db = await mongoose.connect("mongodb+srv://rastogiarchi18:EnAQFI9Dsifgvotb@cluster0.pgntakl.mongodb.net/laundry_mate");
    connection.isConnected = db.connections[0].readyState;

    console.log('DATABASE CONNECTED SUCCESSFULLY');
  } catch (error) {
    console.error('DATABASE CONNECTION FAILED', error);
    throw error;
  }
}

export default dbConnect;
