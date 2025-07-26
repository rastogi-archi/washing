'use client';

import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { imageUrls } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animations
const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-16 bg-white dark:bg-gray-900 gap-10"
      style={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.p
          variants={textVariants}
          custom={0.2}
          initial="hidden"
          animate="show"
          className="text-sm uppercase tracking-widest text-blue-700 font-semibold"
        >
          Hassle-Free Laundry
        </motion.p>

        <motion.h1
          variants={textVariants}
          custom={0.4}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-extrabold text-[#032b56] leading-tight"
        >
          Reserve your washing machine in seconds
        </motion.h1>

        <motion.p
          variants={textVariants}
          custom={0.6}
          initial="hidden"
          animate="show"
          className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed"
        >
          No queues, no confusion. Just tap, reserve, and wash.
          <br className="hidden sm:inline" />
          Your floor, your machine, your time.
        </motion.p>

        <Link href="/book-machine">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <Button className="inline-flex items-center gap-2 bg-[#032b56] text-white rounded-full text-base font-semibold shadow-md hover:bg-[#04396b] transition px-6 py-5 mt-4">
              Reserve Now
              <ChevronRight />
            </Button>
          </motion.div>
        </Link>

        {/* Mini Images */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
          {imageUrls.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: { delay: 0.9 + i * 0.1, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={image.link}
                width={96}
                height={96}
                alt="Laundry thumbnail"
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover p-1.5 shadow-md hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="show"
        className="w-full lg:w-1/2 flex justify-center items-center"
      >
        <Image
          src="/Laundry3.png"
          alt="Main Laundry Visual"
          width={500}
          height={500}
          className="w-full max-w-md h-auto object-contain drop-shadow-xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
