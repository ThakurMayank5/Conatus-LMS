'use client'

import { motion } from 'framer-motion';

import { ReactNode } from 'react';

type SlidingCardProps = {
  children: ReactNode;
};

export default function SlidingCard({ children }: SlidingCardProps) {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
