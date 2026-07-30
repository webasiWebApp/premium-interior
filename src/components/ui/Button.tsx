"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, children, ...props }, ref) => {
    const baseStyles = "relative overflow-hidden px-6 py-3 rounded-md uppercase tracking-wider text-[14px] font-medium transition-colors outline-none";
    
    const variants = {
      primary: "bg-primary text-secondary",
      secondary: "bg-secondary text-primary",
    };

    const hoverBg = variant === "primary" ? "bg-white/20" : "bg-primary/10";

    const content = (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
        {...(props as any)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <motion.div
          className={cn("absolute inset-0 z-0 skew-x-[-20deg] -translate-x-full", hoverBg)}
          variants={{
            hover: { translateX: "150%", transition: { duration: 0.5, ease: "easeOut" } }
          }}
        />
      </motion.button>
    );

    if (href) {
      return (
        <motion.a href={href} className="inline-block" initial="initial" whileHover="hover">
          {content}
        </motion.a>
      );
    }

    return (
      <motion.div initial="initial" whileHover="hover" className="inline-block">
        {content}
      </motion.div>
    );
  }
);
Button.displayName = "Button";
