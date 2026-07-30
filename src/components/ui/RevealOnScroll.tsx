"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface RevealOnScrollProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}

export function RevealOnScroll({ 
  children, 
  delay = 0, 
  yOffset = 30,
  className,
  ...props 
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
