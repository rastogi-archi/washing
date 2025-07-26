'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

// Animation variants
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
};

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
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="show"
          className="lg:w-1/2 bg-[#032b56] text-white flex flex-col justify-center items-center p-10 space-y-4"
        >
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
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="show"
          className="lg:w-1/2 p-8 sm:p-10 space-y-6"
        >
          <form onSubmit={bookSlot} className="space-y-5">
            {[
              { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
              { label: 'Your Email', name: 'email', type: 'text', placeholder: 'Enter your email' },
            ].map((field, i) => (
              <motion.div key={field.name} custom={i} variants={fadeInUp} initial="hidden" animate="show">
                <label className="block mb-1 font-semibold text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                  placeholder={field.placeholder}
                  required
                />
              </motion.div>
            ))}

            <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="show">
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
            </motion.div>

            <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="show">
              <label className="block mb-1 font-semibold text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                required
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Start Time', name: 'startTime' },
                { label: 'End Time', name: 'endTime' },
              ].map((time, i) => (
                <motion.div key={time.name} custom={i + 4} variants={fadeInUp} initial="hidden" animate="show">
                  <label className="block mb-1 font-semibold text-gray-700">{time.label}</label>
                  <input
                    type="time"
                    name={time.name}
                    value={formData[time.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                    required
                  />
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#032b56] hover:bg-[#04396b] text-white font-semibold rounded-xl shadow-md transition duration-300"
            >
              {loading ? 'Booking slot' : 'Book slot'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookMachine;
