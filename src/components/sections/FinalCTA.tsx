"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 bg-primary overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="text-[#C1E700] text-[12px] font-medium uppercase tracking-widest mb-4">
            Numbers Don't Lie
          </div>
          
          <h2 className="text-white text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-tight max-w-3xl mb-6">
            Trusted by Families Across Sri Lanka & Beyond
          </h2>
          
          <p className="text-[#C1E700] text-[18px] md:text-[20px] font-light italic mb-10">
            "Feel proud every time you walk in."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none">
            <Button variant="secondary" className="w-full sm:w-auto justify-center">
              Book Your Free Home Visit
            </Button>
            
            <Button variant="outline" href="https://wa.me/94770000000" className="w-full sm:w-auto justify-center">
              DM Us on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
