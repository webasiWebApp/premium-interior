import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: React.ReactNode;
  paragraph?: React.ReactNode;
  className?: string;
  headingClassName?: string;
  paragraphClassName?: string;
}

export function SectionHeading({ 
  heading, 
  paragraph, 
  className,
  headingClassName,
  paragraphClassName
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-6 max-w-3xl", className)}>
      <h2 className={cn("text-4xl md:text-5xl lg:text-[64px] leading-tight font-semibold text-primary", headingClassName)}>
        {heading}
      </h2>
      {paragraph && (
        <p className={cn("text-[14px] text-black font-normal leading-relaxed", paragraphClassName)}>
          {paragraph}
        </p>
      )}
    </div>
  );
}
