"use client";

import React from "react";
import Image from "next/image";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const PORTFOLIO_IMAGES = Array.from({ length: 25 }, (_, i) => `/portfolio/p${i + 1}.JPG`);

export function PortfolioGrid() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
      {PORTFOLIO_IMAGES.map((src, idx) => (
        <RevealOnScroll key={src} delay={Math.min((idx % 4) * 0.1, 0.4)} className="break-inside-avoid">
          <div className="relative w-full rounded-[5px] overflow-hidden group">
            <Image 
              src={src} 
              alt={`Project ${idx + 1}`} 
              width={600} 
              height={800} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-secondary font-medium tracking-wider uppercase text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Project
              </span>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
