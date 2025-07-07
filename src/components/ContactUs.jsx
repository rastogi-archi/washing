'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser'
import { useState } from "react";
import toast from "react-hot-toast";


const ContactUs = () => {

  const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            emailjs.sendForm(
                'service_0nz92t5', 
                'template_u4ozcxj', 
                e.target, 
                'kV-2G4_2Wb-J-yHyH'
            );
            toast.success("Email sent successfully!");
            e.target.reset();
        } catch (error) {
            toast.error("Failed to send email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <section className="bg-white dark:bg-gray-900 mt-10 sm:mt-15 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-12 items-center">
        {/* Left: Heading and image */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#032b56] dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Have questions, feedback, or need help? We're here for you.
          </p>
          <img src="Contact.png" alt="Contact Illustration" className="w-full max-w-md mx-auto lg:mx-0" />
        </div>

        {/* Right: Contact form */}
        <form className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg" onSubmit={sendEmail}>
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </Label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <input
              type="email"
              id="email"
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
              rows={5}
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Type your message here..."
              required
            />
          </div>

          <div className="text-center lg:text-left">
            <Button
              type="submit"
              disabled={loading}
              className="w-full lg:w-auto bg-[#032b56] hover:bg-[#04396b] text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
