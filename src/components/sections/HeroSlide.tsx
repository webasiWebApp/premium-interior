"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { StatItem } from "../ui/StatItem";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/lib/smoothScroll";

export interface SlideData {
  bg: string;
  eyebrow: string;
  headline: { text: string; color: "primary" | "white" | "secondary" }[];
  body: string;
}

interface HeroSlideProps {
  slide: SlideData;
  isActive: boolean;
}

const STATS = [
  { num: 28, label: "Years In Business", suffix: "" },
  { num: 1000, label: "Projects Completed", suffix: "+" },
  { num: 10, label: "Official Warranty", suffix: " Yr" },
  { num: 14, label: "Project Delivery", suffix: " Day" },
];

export function HeroSlide({ slide, isActive }: HeroSlideProps) {
  const { scrollTo } = useSmoothScroll();

  return (
    <div className={cn(
      "absolute inset-0 w-full h-full transition-opacity duration-1000",
      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
    )}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.bg})` }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col justify-between pt-24 md:pt-28 pb-6 md:pb-10">
        {/* Top/Middle Main Content */}
        <div className="max-w-3xl lg:max-w-4xl my-auto">
          {isActive && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-xs sm:text-sm font-medium mb-3 tracking-wider uppercase"
            >
              {slide.eyebrow}
            </motion.p>
          )}

          {isActive && (
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[74px] xl:text-[82px] leading-[1.08] font-semibold mb-4 md:mb-6 flex flex-wrap">
              {slide.headline.map((part, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className={cn(
                    "mr-2 md:mr-3 lg:mr-4",
                    part.color === "primary" ? "text-primary" : part.color === "secondary" ? "text-secondary" : "text-white"
                  )}
                >
                  {part.text}
                </motion.span>
              ))}
            </h1>
          )}

          {isActive && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/90 text-xs sm:text-sm md:text-base font-normal max-w-xl leading-relaxed mb-6 md:mb-8"
            >
              {slide.body}
            </motion.p>
          )}

          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:hello@platinuminteriors.lk'; }}>
                Book Free Home Visit
              </Button>
              <Button variant="secondary" onClick={(e) => { e.preventDefault(); scrollTo('#portfolio'); }}>
                Our Works
              </Button>
            </motion.div>
          )}
        </div>

        {/* Bottom Stats Row */}
        <div className="w-full border-t border-white/20 pt-4 md:pt-6 mt-4">
          <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10 lg:gap-x-12 items-center w-fit pr-6">
            {STATS.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <StatItem 
                  number={stat.num} 
                  label={stat.label} 
                  suffix={stat.suffix} 
                  startTrigger={isActive} 
                />
                {i < STATS.length - 1 && (
                  <div className="hidden sm:block w-[1px] h-10 bg-white/30" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
