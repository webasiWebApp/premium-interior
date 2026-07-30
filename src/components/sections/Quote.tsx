"use client";

import React from "react";
import Image from "next/image";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function Quote() {
  return (
    <section className="w-full bg-primary flex flex-col lg:flex-row overflow-hidden">
      {/* Left Image (Full Bleed on desktop) */}
      <div className="lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px] relative">
        <Image 
          src="/quote.png" 
          alt="Inspiring Interior" 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 p-12 md:p-20 lg:p-32 flex flex-col justify-center relative">
        <RevealOnScroll>
          <div className="text-[120px] md:text-[180px] leading-none text-white/10 font-serif absolute top-10 md:top-20 left-10 md:left-16 pointer-events-none select-none">
            &ldquo;
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-secondary leading-tight mb-8">
              We Shape Our Buildings, Thereafter They Shape Us
            </h2>
            <p className="text-xl md:text-2xl font-light text-white">
              — Winston Churchill
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
