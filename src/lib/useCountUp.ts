"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export function useCountUp(
  targetValue: number,
  duration: number = 2,
  startTrigger: boolean = true
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (startTrigger) {
      const controls = animate(0, targetValue, {
        duration,
        ease: "easeOut",
        onUpdate(val) {
          setValue(Math.round(val));
        },
      });

      return () => controls.stop();
    }
  }, [targetValue, duration, startTrigger]);

  return value;
}
