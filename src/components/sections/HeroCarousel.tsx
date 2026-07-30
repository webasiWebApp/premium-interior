"use client";

import React, { useState, useEffect, useCallback } from "react";
import { HeroSlide, SlideData } from "./HeroSlide";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const slidesData: SlideData[] = [
  {
    bg: "/herobg1.png",
    eyebrow: "28 YEARS · SRI LANKA'S TRUSTED INTERIORS TEAM",
    headline: [
      { text: "FEEL PROUD", color: "secondary" },
      { text: "EVERY TIME", color: "white" },
      { text: "YOU WALK IN", color: "white" },
    ],
    body: "Platinum Interiors Designs, Builds And Installs Premium Windows, Doors, Glass Panels And Kitchens With A Full 3D Preview Before We Start, And Your Complete Dream Kitchen Delivered In As Little As 14 Days.",
  },
  {
    bg: "/herobg2.png",
    eyebrow: "TRUSTED BY FAMILIES IN DUBAI, AUSTRALIA & THE UK",
    headline: [
      { text: "HOME IS WHERE", color: "white" },
      { text: "WE'RE", color: "secondary" },
      { text: "BUILDING", color: "white" },
      { text: "FOR YOU", color: "white" },
    ],
    body: "Living Overseas Doesn't Mean Compromising On Your Dream Home. Get Daily WhatsApp Video Updates, Video-Call Design Consultations, And A Final Walkthrough — All While We Handle Everything Back In Sri Lanka.",
  },
  {
    bg: "/herobg3.png",
    eyebrow: "1,000+ PROJECTS · 10-YEAR OFFICIAL WARRANTY",
    headline: [
      { text: "YOUR DREAM", color: "white" },
      { text: "KITCHEN,", color: "secondary" },
      { text: "BUILT IN", color: "white" },
      { text: "JUST 14 DAYS.", color: "white" },
    ],
    body: "From Free Measurement To Final Handover, We Design, Build And Install Your Complete Kitchen Transformation Backed By A 10-Year Warranty Nobody Else In Sri Lanka Offers.",
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
      <div className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-6 bg-black/30 backdrop-blur-md px-3 py-5 rounded-full border border-white/10 shadow-2xl">
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
                  "rounded-full transition-all duration-500",
                  currentIndex === idx 
                    ? "w-2.5 h-7 bg-secondary shadow-[0_0_12px_rgba(193,231,0,0.8)]" 
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
