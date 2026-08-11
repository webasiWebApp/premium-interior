"use client";

import Image from "next/image";
import { Check, ShieldCheck, Sparkles, Gift, Tag, Clock } from "lucide-react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { useSmoothScroll } from "@/lib/smoothScroll";

export function KitchenPackages() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="kitchens" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <SectionHeading 
          eyebrow="Choose your package" 
          title="Kitchen packages"
          description="Whether you're renovating at home or building your dream kitchen from overseas, we make it simple and transparent."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Local & Main Package */}
          <RevealOnScroll delay={0.1}>
            <div className="bg-white rounded-[5px] p-8 lg:p-10 border border-gray-100 flex flex-col h-full relative overflow-hidden transition-all duration-300">
              
              
              <h3 className="text-[28px] md:text-[32px] font-semibold text-primary mb-2">
                The Platinum kitchen transformation
              </h3>
              <p className="text-[16px] text-black font-medium mb-4">
                Designed, built & guaranteed in just 14 days
              </p>
              
              <div className="inline-block bg-gray-100 text-gray-700 text-[12px] font-medium px-3 py-1 rounded-[5px] w-fit mb-8">
                Free home visit · Custom quote
              </div>

              <div className="mb-8">
                <h4 className="text-[14px] font-semibold tracking-wider text-primary mb-4">What you receive</h4>
                <ul className="space-y-3">
                  {[
                    "Free home visit & measurement",
                    "Free detailed quotation",
                    "3D design preview",
                    "14-day install",
                    "10-year warranty with certificate",
                    "Daily WhatsApp video updates",
                    "Video call design consultation",
                    "Full digital documentation",
                    "Final handover walkthrough video",
                    "Annual check-in call",
                    "Free PDF maintenance guide"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-[14px] text-black leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[14px] font-semibold tracking-wider text-primary uppercase">
                    Premium Add-on: Platinum Care Plan
                  </h4>
                  <span className="text-[11px] font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                    Optional Package
                  </span>
                </div>
                
                <div className="bg-gray-50/80 rounded-[5px] p-5 border border-gray-100 space-y-4">
                  <div className="flex items-start gap-3">
                    <Sparkles size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-primary text-[14px]">Bi-Annual Deep Cleaning Service</div>
                      <p className="text-[13px] text-gray-600 mt-0.5">
                        Enjoy a complimentary professional deep cleaning service once every 6 months to keep your kitchen looking immaculate.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-gray-200/60 pt-3">
                    <Gift size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-primary text-[14px]">Complimentary Premium Kitchen Care Kit</div>
                      <p className="text-[13px] text-gray-600 mt-0.5">
                        Includes a specialized cleaning spray, magic erasing sponges, absorbent wiping cloths, and high-performance microfiber cloths.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-gray-200/60 pt-3">
                    <Tag size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-primary text-[14px]">Exclusive Member Rates for Future Projects</div>
                      <p className="text-[13px] text-gray-600 mt-0.5">
                        Benefit from preferred membership pricing and special discounts on all your upcoming home enhancement projects.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-gray-200/60 pt-3">
                    <Clock size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-primary text-[14px]">Priority Service & Maintenance Scheduling</div>
                      <p className="text-[13px] text-gray-600 mt-0.5">
                        Receive top-priority positioning for all service requests and maintenance needs whenever you require assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-[5px] p-5 mb-8 flex gap-4 items-start">
                <ShieldCheck size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-[16px] font-medium text-primary mb-1">The Platinum promise</h5>
                  <p className="text-[14px] text-black leading-relaxed">
                    If anything we install has a defect within 10 years, we fix it for free. No questions asked. Every year, we personally call to ensure everything remains perfect.
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="border-l-4 border-primary pl-4 mb-6">
                  <p className="text-[13px] text-gray-600 italic">
                    Only 4 local projects accepted per month. This ensures every client receives our full attention and our 14-day delivery guarantee.
                  </p>
                </div>
                
                <Button 
                  variant="primary" 
                  className="w-full justify-center mb-4"
                  onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                >
                  Book your free home visit
                </Button>
                <p className="text-[12px] text-gray-500 text-center">
                  Price calculated after free site visit & measurement. Quotation provided at zero cost, zero obligation.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Package Image Only Column (Hidden on Mobile) */}
          <RevealOnScroll delay={0.2} className="h-full hidden lg:block">
            <div className="relative w-full h-full min-h-[450px] lg:min-h-full rounded-[5px] overflow-hidden border border-gray-100 shadow-sm bg-white">
              <Image 
                src="/package.jpg" 
                alt="Kitchen Package" 
                fill 
                className="object-cover object-center" 
                priority
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}


