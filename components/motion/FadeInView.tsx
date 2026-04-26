"use client";

import { motion } from "framer-motion";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInView({ children, delay = 0, className }: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
