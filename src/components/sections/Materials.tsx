"use client";

import Image from "next/image";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionHeading } from "../ui/SectionHeading";

const brands = [
  { name: "Alumex", logo: "/logos/l1.png", desc: "Sri Lanka's #1 aluminium manufacturer. Internationally certified profiles." },
  { name: "Lanka Aluminium", logo: "/logos/l2.JPG", desc: "Premium aluminium solutions trusted across Sri Lanka's construction industry." },
  { name: "Lumin", logo: "/logos/l3.png", desc: "Premium certified doors & windows. Built to international manufacturing standards." },
  { name: "Swisstek", logo: "/logos/l4.png", desc: "High-quality aluminium construction materials for the perfect finish." },
  { name: "Premium Brand", logo: "/logos/l5.png", desc: "Durable and aesthetic solutions for modern architecture and design." },
  { name: "Elite Windows", logo: "/logos/l6.png", desc: "Advanced engineering and precision crafting for secure living." },
];

export function Materials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <SectionHeading 
          eyebrow="Quality You Can Trust" 
          title="Materials & Brands We Use"
          description="We only work with Sri Lanka's most trusted and certified material brands — because your home deserves nothing less."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {brands.map((brand, i) => (
            <RevealOnScroll key={brand.name} delay={i * 0.1}>
              <div className="bg-[#C1E700]/5 rounded-xl p-8 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-1 hover:bg-[#C1E700] hover:shadow-lg group">
                <div className="bg-white rounded-lg p-4 mb-6 shadow-sm w-full h-24 flex items-center justify-center">
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
                <p className="text-[14px] text-black font-regular leading-relaxed group-hover:text-primary/80 transition-colors">
                  {brand.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <p className="text-[13px] text-gray-500 text-center mt-12 max-w-2xl mx-auto">
            All materials used in Platinum Interiors projects meet international quality standards — selected for durability, finish quality and long-term performance.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
