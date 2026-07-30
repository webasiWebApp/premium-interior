"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { PortfolioGrid } from "./PortfolioGrid";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            heading="Featured Project Highlights"
            paragraph="Explore A Selection Of Our Most Recent Transformations, Showcasing Our Commitment To Precision Engineering And Premium Design."
            className="mb-16"
          />
        </RevealOnScroll>
        
        <PortfolioGrid />
      </div>
    </section>
  );
}
