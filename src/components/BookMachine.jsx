'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const BookMachine = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    machineNumber: '',
    date: '',
    startTime: '',
    endTime: '',
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const bookSlot = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/book-machine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Slot booked successfully!');
        setFormData({
          name: '',
          email: '',
          machineNumber: '',
          date: '',
          startTime: '',
          endTime: '',
        });
      } else {
        toast.error(data.message || 'Failed to book slot');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-50">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Left Section */}
        <div className="lg:w-1/2 bg-[#032b56] text-white flex flex-col justify-center items-center p-10 space-y-4">
          <h2 className="text-4xl font-bold text-center">Book Your Washing Slot</h2>
          <p className="text-center text-sm text-blue-100 max-w-xs">
            Avoid the rush—reserve your preferred machine & time with ease!
          </p>
          <Image
            src="/Laundry4.png"
            alt="Washing Machine"
            width={500}
            height={500}
            className="w-full max-w-xs mt-4"
          />
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 p-8 sm:p-10 space-y-6">
          <form onSubmit={bookSlot} className="space-y-5">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Your Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Machine Number</label>
              <select
                name="machineNumber"
                value={formData.machineNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                required
              >
                <option value="">--Select Machine--</option>
                <option value="1">Machine 1</option>
                <option value="2">Machine 2</option>
                <option value="3">Machine 3</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-gray-700">End Time</label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#032b56] hover:bg-[#04396b] text-white font-semibold rounded-xl shadow-md transition duration-300 transform hover:scale-[1.02]"
            >
              {loading ? "Booking slot" : "Book slot"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookMachine;
