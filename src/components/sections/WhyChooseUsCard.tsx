"use client";

import React from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

interface WhyChooseUsCardProps {
  reason: { num: string; title: string; body: string; icon?: React.ElementType };
  index: number;
}

export function WhyChooseUsCard({ reason, index }: WhyChooseUsCardProps) {
  return (
    <RevealOnScroll delay={Math.min(index * 0.1, 0.4)}>
      <div className="group relative bg-secondary md:bg-secondary/5 hover:bg-secondary transition-colors duration-500 rounded-[5px] p-8 md:p-12 overflow-hidden flex flex-col justify-center min-h-[300px]">
        {/* Watermark Number */}
        <div className="absolute -right-4 -bottom-10 text-[180px] md:text-[240px] font-bold text-black/5 select-none pointer-events-none transition-opacity duration-500 group-hover:text-black/10 leading-none">
          {reason.num}
        </div>
        
        <div className="relative z-10">
          {reason.icon && (
            <div className="mb-6 inline-flex p-4 bg-white/50 group-hover:bg-white transition-colors rounded-[5px]">
              <reason.icon size={32} className="text-primary" />
            </div>
          )}
          <h3 className="text-3xl md:text-4xl text-primary font-medium mb-6 max-w-sm">
            {reason.title}
          </h3>
          <p className="text-[14px] text-black font-normal leading-relaxed max-w-md">
            {reason.body}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}
