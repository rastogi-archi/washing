'use client';

import React from 'react';
import { features } from '@/utils/data';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const WhyChoose = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 px-4 md:px-10 mt-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-10"
      >
        <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Why Choose <span className="text-blue-700">LaundryMate</span>?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
          Enjoy a modern, stress-free laundry experience with features designed to save your time,
          reduce friction, and ensure fairness for everyone.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 dark:text-gray-200"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={cardVariants}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-lg text-center"
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              whileInView={{ scale: [0.8, 1.1, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="text-5xl mb-4"
            >
              {feature.icon}
            </motion.div>
            <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {feature.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyChoose;
