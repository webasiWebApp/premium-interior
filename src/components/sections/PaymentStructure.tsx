"use client";

import { ClipboardList, Hammer, Trophy } from "lucide-react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionHeading } from "../ui/SectionHeading";

const stages = [
  { icon: ClipboardList, stage: "Stage 01", pct: "50%", name: "Design Approval", body: "Due upon signing the project agreement and approving your final 3D design. Confirms your booking and secures your project slot." },
  { icon: Hammer, stage: "Stage 02", pct: "25%", name: "Mid-Project", body: "Due at the midpoint of installation, once core structural work is completed and verified on site." },
  { icon: Trophy, stage: "Stage 03", pct: "25%", name: "Final Handover", body: "Due upon full project completion, client walkthrough and your complete satisfaction — before we hand over your keys." },
];

export function PaymentStructure() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <SectionHeading 
          eyebrow="Transparent & Secure" 
          title="Payment Structure"
          description="Our transparent 3-stage payment plan ensures your project is delivered with complete commitment from both sides."
          centered
        />
        
        <div className="relative mt-20">
          {/* Subtle horizontal track for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[1px] bg-gray-200 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {stages.map((item, i) => (
              <RevealOnScroll key={item.stage} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left group">
                  <div className="w-[88px] h-[88px] bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-110">
                    <item.icon size={36} className="text-secondary" />
                  </div>
                  
                  <div className="text-[12px] text-gray-500 font-medium uppercase tracking-widest mb-2">
                    {item.stage}
                  </div>
                  
                  <div className="text-[48px] md:text-[56px] text-primary font-bold leading-none mb-3">
                    {item.pct}
                  </div>
                  
                  <h3 className="text-[20px] font-medium text-primary mb-3">
                    {item.name}
                  </h3>
                  
                  <p className="text-[14px] text-black font-regular leading-relaxed max-w-sm">
                    {item.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="mt-20 bg-[#C1E700]/20 rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto border border-[#C1E700]/30">
            <p className="text-[15px] md:text-[16px] text-primary font-medium leading-relaxed">
              Your protection matters to us. The final payment is only requested after you have personally inspected the completed work and confirmed your satisfaction. We do not request full payment upfront — ever.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
