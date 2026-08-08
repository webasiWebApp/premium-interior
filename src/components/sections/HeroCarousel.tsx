"use client";

import React, { useState, useEffect, useCallback } from "react";
import { HeroSlide, SlideData } from "./HeroSlide";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const slidesData: SlideData[] = [
  {
    bg: "/herobg1.png",
    eyebrow: "28 years · Sri Lanka's trusted interiors team",
    headline: [
      { text: "Feel proud", color: "secondary" },
      { text: "every time", color: "white" },
      { text: "you walk in", color: "white" },
    ],
    body: "Platinum Interiors designs, builds and installs premium windows, doors, glass panels and kitchens with a full 3D preview before we start, and your complete dream kitchen delivered in as little as 14 days.",
  },
  {
    bg: "/herobg2.png",
    eyebrow: "Trusted by families in Dubai, Australia & the UK",
    headline: [
      { text: "Home is where", color: "white" },
      { text: "we're", color: "secondary" },
      { text: "building", color: "white" },
      { text: "for you", color: "white" },
    ],
    body: "Living overseas doesn't mean compromising on your dream home. Get daily WhatsApp video updates, video-call design consultations, and a final walkthrough, all while we handle everything back in Sri Lanka.",
  },
  {
    bg: "/herobg3.png",
    eyebrow: "1,000+ projects · 10-year official warranty",
    headline: [
      { text: "Your dream", color: "white" },
      { text: "kitchen,", color: "secondary" },
      { text: "built in", color: "white" },
      { text: "just 14 days.", color: "white" },
    ],
    body: "From free measurement to final handover, we design, build and install your complete kitchen transformation backed by a 10-year warranty nobody else in Sri Lanka offers.",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [flash, setFlash] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="relative w-full h-[100vh] max-h-[925px] min-h-[650px] overflow-hidden bg-[#0d1317]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slidesData.map((slide, index) => (
        <HeroSlide key={index} slide={slide} isActive={currentIndex === index} />
      ))}

      {/* Flash transition effect */}
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-white/20 z-30 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Right Middle Slide Navigation */}
      <div className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-6 bg-black/30 backdrop-blur-md px-3 py-5 rounded-[5px] border border-white/10 ">
        <span className="text-secondary font-bold text-xs md:text-sm tracking-wider">
          0{currentIndex + 1}
        </span>
        
        <div className="flex flex-col gap-3 items-center">
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="group flex items-center justify-center p-1 focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span
                className={cn(
                  "rounded-[5px] transition-all duration-500",
                  currentIndex === idx 
                    ? "w-2.5 h-7 bg-secondary " 
                    : "w-2 h-2 bg-white/40 group-hover:bg-white/80"
                )}
              />
            </button>
          ))}
        </div>

        <span className="text-white/40 text-xs font-medium">
          0{slidesData.length}
        </span>
      </div>
    </div>
  );
}
