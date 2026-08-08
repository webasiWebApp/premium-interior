import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  centered?: boolean;
  className?: string;
  headingClassName?: string;
  paragraphClassName?: string;
}

export function SectionHeading({ 
  heading, 
  paragraph, 
  title,
  description,
  eyebrow,
  centered,
  className,
  headingClassName,
  paragraphClassName
}: SectionHeadingProps) {
  const actualHeading = heading || title;
  const actualParagraph = paragraph || description;

  return (
    <div className={cn("flex flex-col gap-4 md:gap-6 max-w-3xl", centered && "items-center text-center mx-auto", className)}>
      {eyebrow && (
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="text-[14px] font-medium tracking-wider text-primary">
            {eyebrow}
          </span>
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
        </div>
      )}
      <h2 className={cn("text-4xl md:text-5xl lg:text-[64px] leading-tight font-semibold text-primary", headingClassName)}>
        {actualHeading}
      </h2>
      {actualParagraph && (
        <p className={cn("text-[14px] text-black font-normal leading-relaxed", paragraphClassName)}>
          {actualParagraph}
        </p>
      )}
    </div>
  );
}
