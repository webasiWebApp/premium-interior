"use client";

import React from "react";
import Image from "next/image";
import { Hammer, CircleDollarSign, Gem, Briefcase, ShieldCheck, Zap } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { WhyChooseUsCard } from "./WhyChooseUsCard";

const REASONS = [
  {
    num: "01",
    icon: Hammer,
    title: "Built on Construction Expertise",
    body: "We Don't Just Design We Build. Our Roots In Aluminium Construction Give Us A Technical Advantage No Pure Design Company Can Match. Every Detail Is Precise, Every Finish Is Engineered To Last.",
  },
  { num: "02", icon: CircleDollarSign, title: "Transparent Pricing", body: "No hidden costs or surprise additions midway through the project. What we quote is what you pay." },
  { num: "03", icon: Gem, title: "Premium Materials", body: "We source only the highest quality materials to ensure durability, aesthetics, and long-lasting performance in every project." },
  { num: "04", icon: Briefcase, title: "End-to-End Service", body: "From initial 3D visualization to final installation, we handle everything so you don't have to manage multiple contractors." },
  { num: "05", icon: ShieldCheck, title: "10-Year Warranty", body: "We stand by our work. Our official 10-year warranty gives you complete peace of mind on all installations and craftsmanship." },
  { num: "06", icon: Zap, title: "Fast Delivery", body: "We respect your time. Our streamlined process allows us to deliver complete dream kitchens in as little as 14 days." },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Sticky Column */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 flex flex-col gap-12">
            <RevealOnScroll>
              <SectionHeading
                heading="Why Choose Platinum Interiors?"
                paragraph="In A Market Full Of Choices, Here Is Why We Stand Out As Sri Lanka's Most Trusted Interiors Team."
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2} className="relative w-full aspect-[4/3] rounded-[5px] overflow-hidden">
              <Image src="/whychooseus.png" alt="Why Choose Us" fill className="object-cover" />
            </RevealOnScroll>
          </div>

          {/* Right Scrolling Column */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            {REASONS.map((reason, idx) => (
              <WhyChooseUsCard key={reason.num} reason={reason} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
