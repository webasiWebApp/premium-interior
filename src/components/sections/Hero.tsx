"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[100vh] max-h-[925px] min-h-[650px] overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <HeroCarousel />
      </motion.div>
    </div>
  );
}
