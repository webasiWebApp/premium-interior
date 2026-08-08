"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Left Column (Text & Img4) */}
          <div className="lg:col-span-6 flex flex-col gap-4 lg:gap-6">
            <RevealOnScroll className="h-auto lg:h-[320px] flex flex-col justify-center lg:pr-8">
              <h2 className="text-5xl lg:text-[64px] text-primary font-semibold leading-[1.1] mb-6">
                What is Platinum<br />Interiors
              </h2>
              <p className="text-[14px] text-black font-normal leading-relaxed max-w-[95%]">
                Platinum Interiors is a Sri Lankan interiors and construction company specialising in premium aluminium windows, doors, glass installations and custom kitchens. Founded on 28 years of hands-on construction expertise, we don't just design spaces we build them, with the technical precision that comes from two generations of family craftsmanship.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} className="relative hidden md:block w-full h-[300px] sm:h-[400px] lg:h-[380px] overflow-hidden">
              <motion.div style={{ y: y1 }} className="absolute inset-0 h-[120%] -top-[10%]">
                <Image src="/aboutImg4.png" alt="Workspace Details" fill className="object-cover" />
              </motion.div>
            </RevealOnScroll>
          </div>

          {/* Middle Column (Img1 & Img3) */}
          <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-6">
            <RevealOnScroll delay={0.3} className="relative w-full h-[250px] sm:h-[300px] lg:h-[320px] overflow-hidden">
              <motion.div style={{ y: y2 }} className="absolute inset-0 h-[120%] -top-[10%]">
                <Image src="/aboutImg1.png" alt="Living Room" fill className="object-cover" />
              </motion.div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4} className="relative w-full h-[300px] sm:h-[400px] lg:h-[380px] overflow-hidden">
              <motion.div style={{ y: y1 }} className="absolute inset-0 h-[120%] -top-[10%]">
                <Image src="/aboutImg3.png" alt="Kitchen Island" fill className="object-cover" />
              </motion.div>
            </RevealOnScroll>
          </div>

          {/* Right Column (Img2) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 lg:gap-6">
            <RevealOnScroll delay={0.5} className="relative w-full h-[500px] sm:h-[600px] lg:h-[calc(320px+380px+24px)] overflow-hidden">
              <motion.div style={{ y: y3 }} className="absolute inset-0 h-[120%] -top-[10%]">
                <Image src="/aboutImg2.png" alt="Modern Kitchen" fill className="object-cover" />
              </motion.div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
