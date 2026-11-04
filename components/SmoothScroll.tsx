"use client";

import React, { useEffect } from "react";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    let lenisInstance: any = null;

    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        });

        // Integrate with GSAP ScrollTrigger if available
        try {
          // @ts-ignore
          const { ScrollTrigger } = await import("gsap/ScrollTrigger");
          lenisInstance.on("scroll", ScrollTrigger.update);
        } catch {
          // Pass
        }

        function raf(time: number) {
          lenisInstance?.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (err) {
        console.warn("Smooth scroll initialization skipped:", err);
      }
    };

    initLenis();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return <>{children}</>;
};

