"use client";

import { useState } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionHeading } from "../ui/SectionHeading";
import { Accordion } from "../ui/Accordion";

const faqs = [
  { q: "How long does a kitchen project take to complete?", a: <>After your design is approved, we complete your project within <strong>14 to 21 days</strong>. If your project requires imported or customised materials, we will provide you with an accurate timeframe upfront, so there are never any surprises.</> },
  { q: "What is your minimum budget to start a kitchen project?", a: <>We welcome projects of all sizes. Our focus is always on <strong>quality of output</strong>, not just the budget. We provide fair, transparent rates and ensure every client receives a premium service experience regardless of project scale.</> },
  { q: "Do you handle everything or do we need to purchase materials separately?", a: <>We handle <strong>100% of the project</strong> from start to finish. All you need to do is approve the design and make the scheduled payments. We take care of materials, installation and finishing, delivering complete quality on the agreed timeframe.</> },
  { q: "Can we see a design before committing to the full project?", a: <>Absolutely. We provide a <strong>full 3D design preview</strong> before any work begins. We then discuss any changes you'd like, make all necessary revisions, and only start the project once you are fully satisfied and have given your approval.</> },
  { q: "What happens if something gets damaged or has a problem after completion?", a: <>Every Platinum Interiors project comes with a <strong>10-year material warranty</strong> backed by an official certificate. Beyond that, we conduct annual service visits and personally call every client once a year to inspect the project and ensure everything remains in perfect condition.</> },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <SectionHeading 
          eyebrow="Everything you need to know" 
          title="Frequently asked questions"
          description="We believe in full transparency. Here are the answers to the questions our clients ask most."
          centered
        />
        
        <div className="max-w-[800px] mx-auto mt-16">
          <RevealOnScroll delay={0.2}>
            <div className="border-t border-gray-200">
              {faqs.map((faq, i) => (
                <Accordion
                  key={i}
                  index={i}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openIndex === i}
                  onToggle={handleToggle}
                  numberPrefix={`0${i + 1}`}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
