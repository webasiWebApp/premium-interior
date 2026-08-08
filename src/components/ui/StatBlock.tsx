import React from "react";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string | number;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function StatBlock({ value, label, className, valueClassName, labelClassName }: StatBlockProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <div className={cn("text-[32px] md:text-[40px] text-primary font-bold leading-none", valueClassName)}>
        {value}
      </div>
      <div className={cn("text-[12px] text-gray-500 font-medium tracking-wide mt-1", labelClassName)}>
        {label}
      </div>
    </div>
  );
}
