"use client";

import { ReactLenis, useLenis } from "lenis/react";
import React from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export function useSmoothScroll() {
  const lenis = useLenis();

  const scrollTo = (target: string | number | HTMLElement) => {
    lenis?.scrollTo(target);
  };

  return { scrollTo };
}
