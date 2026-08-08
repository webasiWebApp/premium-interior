"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionHeading } from "../ui/SectionHeading";

const brands = [
  { name: "Alumex", logo: "/logos/Alumex.png", desc: "Sri Lanka's #1 aluminium manufacturer. Internationally certified profiles." },
  { name: "Lanka Aluminium", logo: "/logos/Lanka Aluminium.png", desc: "Premium aluminium solutions trusted across Sri Lanka's construction industry." },
  { name: "Lumin", logo: "/logos/Lumin.png", desc: "Premium certified doors & windows. Built to international manufacturing standards." },
  { name: "Swisstek", logo: "/logos/Swisstek.png", desc: "High-quality aluminium construction materials for the perfect finish." },
];

export function Materials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <SectionHeading 
          eyebrow="Quality you can trust" 
          title="Materials & brands we use"
          description="We only work with Sri Lanka's most trusted and certified material brands, because your home deserves nothing less."
          centered
        />
        
        <RevealOnScroll delay={0.2} className="mt-16 w-full overflow-hidden relative">
          {/* Gradient edges for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6 w-max py-4"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="bg-[#C1E700] rounded-[5px] p-8 flex flex-col items-center text-center h-full group w-[280px] md:w-[320px] shrink-0">
                <div className="bg-white rounded-[5px] p-4 mb-6 w-full h-24 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-primary mb-3">
                  {brand.name}
                </h3>
                <p className="text-[14px] text-black/90 font-regular leading-relaxed">
                  {brand.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className="text-[13px] text-gray-500 text-center mt-12 max-w-2xl mx-auto">
            All materials used in Platinum Interiors projects meet international quality standards, selected for durability, finish quality and long-term performance.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
