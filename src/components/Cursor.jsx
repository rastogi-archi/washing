'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = (e) => {
      if (e.target.closest('a, button, input, textarea, select, [data-cursor="hover"]')) {
        setIsHovered(true);
      }
    };

    const mouseLeave = (e) => {
      if (e.target.closest('a, button, input, textarea, select, [data-cursor="hover"]')) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', mouseEnter);
    document.addEventListener('mouseout', mouseLeave);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', mouseEnter);
      document.removeEventListener('mouseout', mouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: position.x - 30, // 60 / 2 to center the circle
        y: position.y - 30,
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      style={{
        width: 30,
        height: 30,
      }}
    >
      <div
        className="w-full h-full rounded-full border-2 border-[#0A2540] flex items-center justify-center"
      >
      </div>
    </motion.div>
  );
}
