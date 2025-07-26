'use client'

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Input } from './ui/input';

// New animation variants
const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.3 } },
};

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      toast.success('Email sent successfully!');
      e.target.reset();
    } else {
      toast.error(data.message || 'Failed to send email');
    }
  } catch (error) {
    toast.error('Something went wrong');
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="bg-white dark:bg-gray-900 mt-10 sm:mt-15 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-12 items-center">
        {/* Left: Heading and image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <motion.h2
            variants={zoomIn}
            className="text-4xl md:text-5xl font-bold text-[#032b56] dark:text-white mb-4"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            variants={zoomIn}
            className="text-gray-600 dark:text-gray-300 text-lg mb-6"
          >
            Have questions, feedback, or need help? We're here for you.
          </motion.p>

          <motion.img
            variants={fadeUp}
            src="Contact.png"
            alt="Contact Illustration"
            className="w-full max-w-md mx-auto lg:mx-0"
          />
        </motion.div>

        {/* Right: Contact form */}
        <motion.form
          onSubmit={sendEmail}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={scaleIn}
          className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Type your message here..."
              required
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="text-center lg:text-left"
          >
            <Button
              type="submit"
              disabled={loading}
              className="w-full lg:w-auto bg-[#032b56] hover:bg-[#04396b] text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
