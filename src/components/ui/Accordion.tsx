"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  index: number;
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: (index: number) => void;
  numberPrefix?: string;
}

export function Accordion({ index, question, answer, isOpen, onToggle, numberPrefix }: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
      >
        <div className="flex items-start md:items-center gap-4">
          {numberPrefix && (
            <span className="text-[14px] font-medium text-primary bg-primary/5 px-2 py-1 rounded-sm hidden sm:inline-block">
              {numberPrefix}
            </span>
          )}
          <h4 className="text-[16px] md:text-[18px] text-primary font-medium group-hover:text-primary/80 transition-colors">
            {question}
          </h4>
        </div>
        <div className="ml-4 flex-shrink-0 text-primary transition-transform duration-300">
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              ref={contentRef}
              className="pt-4 pb-2 text-[14px] text-black font-regular leading-relaxed sm:pl-[44px]"
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
