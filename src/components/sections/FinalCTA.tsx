"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ContactForm } from "./ContactForm";
import { MessageCircle, PhoneCall, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="text-secondary text-xs sm:text-sm font-semibold tracking-widest mb-3">
            Book your free home visit & 3D preview
          </div>
          
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight max-w-3xl mb-4">
            Trusted by families across Sri Lanka & beyond
          </h2>
          
          <p className="text-secondary text-base sm:text-lg md:text-xl font-light italic max-w-2xl">
            "Feel proud every time you walk in."
          </p>
        </motion.div>

        {/* Interactive Form Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <ContactForm />
        </motion.div>

        {/* WhatsApp & Direct Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none pt-4 border-t border-white/10"
        >
          <span className="text-white/70 text-sm font-medium">Or reach out directly:</span>
          
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <Button
              variant="outline"
              href="https://wa.me/94770000000"
              className="inline-flex items-center gap-2 border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm"
            >
              <MessageCircle size={16} className="text-secondary" />
              <span>DM us on WhatsApp</span>
            </Button>

            <a
              href="tel:+94770000000"
              className="inline-flex items-center gap-2 text-white/80 hover:text-secondary text-xs sm:text-sm transition-colors py-2 px-3"
            >
              <PhoneCall size={14} className="text-secondary" />
              <span>+94 77 000 0000</span>
            </a>

            <a
              href="mailto:hello@platinuminteriors.lk"
              className="inline-flex items-center gap-2 text-white/80 hover:text-secondary text-xs sm:text-sm transition-colors py-2 px-3"
            >
              <Mail size={14} className="text-secondary" />
              <span>hello@platinuminteriors.lk</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
