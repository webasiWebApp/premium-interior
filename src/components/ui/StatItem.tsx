"use client";

import { useCountUp } from "@/lib/useCountUp";

interface StatItemProps {
  number: number;
  suffix?: string;
  label: string;
  startTrigger?: boolean;
}

export function StatItem({ number, suffix = "", label, startTrigger = true }: StatItemProps) {
  const count = useCountUp(number, 2, startTrigger);

  return (
    <div className="flex flex-col items-start">
      <div className="text-[32px] text-white font-light whitespace-nowrap">
        {count}{suffix}
      </div>
      <div className="text-[12px] text-white font-light uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
