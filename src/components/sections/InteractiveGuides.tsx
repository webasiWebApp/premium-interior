"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalLink, Triangle, Tv } from "lucide-react";

const tools = [
  {
    title: "Kitchen Triangle Calculator",
    description: "Calculate optimal distances between your sink, stove, and refrigerator for maximum kitchen ergonomics and efficiency.",
    icon: Triangle,
    url: "https://shamalweerasiri.github.io/kitchen-triangle/",
    badge: "Kitchen Planning",
    buttonText: "Launch Calculator",
  },
  {
    title: "TV Viewing Distance Guide",
    description: "Find the ideal TV screen size and recommended seating distance for your living room or home theater setup.",
    icon: Tv,
    url: "https://helloplatinuminteriors-droid.github.io/TV-View-Guide/",
    badge: "Living Room Planning",
    buttonText: "Launch TV Guide",
  },
];

export function InteractiveGuides() {
  return (
    <section id="tools" className="py-20 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <SectionHeading
          eyebrow="Interactive Design Tools"
          title="Free Planning Guides & Calculators"
          description="Use our custom web calculators to plan your kitchen workflow ergonomics and living room viewing distances."
          centered
        />

        {/* Thin Line Separator */}
        <div className="w-full h-[1px] bg-gray-200 my-12"></div>

        {/* 2 Column Layout with thin borders, 5px border-radius, no shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <RevealOnScroll key={tool.title} delay={i * 0.15}>
                <div className="bg-gray-50 p-6 md:p-8 rounded-[5px] border border-gray-200 flex flex-col justify-between h-full transition-colors hover:border-primary/40">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-10 h-10 rounded-[5px] bg-primary text-secondary flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-[5px]">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-2 leading-tight">
                      {tool.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-secondary text-xs font-medium uppercase tracking-wider py-3 px-6 rounded-[5px] transition-colors hover:bg-primary/90 w-full"
                  >
                    <span>{tool.buttonText}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom Thin Line Separator */}
        <div className="w-full h-[1px] bg-gray-200 mt-12"></div>
      </div>
    </section>
  );
}

export const Tools = InteractiveGuides;
