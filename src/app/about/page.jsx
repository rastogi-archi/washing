'use client';

import React from 'react';
import About from '@/components/About';
import { motion } from 'framer-motion';

// Variants
const headingVariant = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subheadingVariant = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const paragraphVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
};

const AboutUs = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-3xl mx-auto mb-12 mt-8 sm:mt-12"
      >
        <motion.h2
          variants={headingVariant}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          About Us
        </motion.h2>

        <motion.div
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h3
            variants={subheadingVariant}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            We Make Sure Your Time Is Respected
          </motion.h3>

          <motion.p
            variants={paragraphVariant}
            className="text-gray-700 dark:text-gray-300 text-lg"
          >
            Making Laundry Hassle-Free, One Tap at a Time. Say goodbye to long queues, wasted time,
            and confusion. With LaundryMate, laundry becomes simple, fair, and efficient.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Already animated inside the component */}
      <About />
    </div>
  );
};

export default AboutUs;
