"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { CaslyLogo } from "@/components/CaslyLogo";

const FASHION_WORDS = [
  "ATELIER",
  "DENIM",
  "HANDMADE",
  "CUSTOM",
  "TIE & DYE",
  "STREETWEAR",
  "CRAFTED",
  "STUDIO",
  "BESPOKE",
  "EDITION",
  "SLOW STITCH",
  "COUTURE",
  "PIGMENT",
  "RUNWAY",
  "RAW DENIM",
  "HANDCRAFT",
  "OVERSIZED",
  "LIMITED",
  "STYLE",
  "ATELIER",
  "CASLY",
];

export const HeroSection: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<string>("CASLY");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const timeoutIdsRef = useRef<NodeJS.Timeout[]>([]);

  const startAnimation = useCallback(() => {
    // Clear any pending timeouts
    timeoutIdsRef.current.forEach(clearTimeout);
    timeoutIdsRef.current = [];

    setIsAnimating(true);

    let accumulatedTime = 0;
    const totalWords = FASHION_WORDS.length;

    FASHION_WORDS.forEach((word, index) => {
      // Dynamic kinetic timing: ultra-fast initial flash, smoothly decelerating into CASLY
      let delayPerWord = 50;
      if (index >= totalWords - 5 && index < totalWords - 2) {
        delayPerWord = 75;
      } else if (index === totalWords - 2) {
        delayPerWord = 110;
      }

      accumulatedTime += delayPerWord;

      const timer = setTimeout(() => {
        setCurrentWord(word);
        if (index === totalWords - 1) {
          setIsAnimating(false);
        }
      }, accumulatedTime);

      timeoutIdsRef.current.push(timer);
    });
  }, []);

  useEffect(() => {
    // Start kinetic fashion title sequence on page load
    startAnimation();

    return () => {
      timeoutIdsRef.current.forEach(clearTimeout);
    };
  }, [startAnimation]);

  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-[#F7F5F2] text-[#121212] overflow-hidden">
      {/* Top Editorial Details */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between border-b border-black/5 pb-4 text-[11px] font-mono tracking-widest text-[#76736E] max-w-7xl mx-auto w-full"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span>AUTUMN / WINTER 2026</span>
          <span className="hidden sm:inline">• EDITION 04</span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <span>HANDMADE IN INDIA</span>
          <span>•</span>
          <span>SHIPPING GLOBALLY</span>
        </div>
      </motion.div>

      {/* Main Title Center */}
      <div className="my-auto py-16 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/5 text-[10px] font-mono tracking-widest text-neutral-600 mb-6 uppercase"
        >
          <Sparkles className="w-3 h-3 text-amber-600" />
          <span>Handmade • Tie & Dye • Custom Prints</span>
        </motion.div>

        {/* Fixed Title Container - Zero Layout Jump */}
        <div className="h-[20vw] sm:h-[18vw] md:h-[15vw] lg:h-[13vw] flex items-center justify-center w-full max-w-5xl mx-auto overflow-hidden">
          {currentWord === "CASLY" ? (
            <div
              onClick={startAnimation}
              onMouseEnter={startAnimation}
              title="Click to replay sequence"
              className="cursor-pointer transition-transform duration-100 hover:scale-[1.01] flex items-center justify-center w-full px-4"
            >
              <CaslyLogo className="h-[12vw] sm:h-[11vw] md:h-[9.5vw] lg:h-[8.2vw] w-auto max-w-full text-[#121212] select-none" />
            </div>
          ) : (
            <h1
              onClick={startAnimation}
              onMouseEnter={startAnimation}
              title="Click to replay sequence"
              className={`font-normal tracking-[-0.03em] leading-[0.85] text-[#121212] select-none uppercase font-sans whitespace-nowrap cursor-pointer transition-transform duration-75 ${
                currentWord.length > 8
                  ? "text-[10vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw]"
                  : "text-[13vw] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw]"
              }`}
            >
              {currentWord}
            </h1>
          )}
        </div>

        {/* Staggered Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto mt-6 text-sm md:text-base text-[#66635D] font-normal leading-relaxed"
        >
          Slow-stitched streetwear. From ice-melt tie-dye pigments to one-of-one
          hand-painted anime denim jackets, crafted individually in small studio drops.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#try-the-look"
            className="px-7 py-3.5 bg-[#121212] text-white rounded-full text-xs font-mono font-medium tracking-wider uppercase hover:bg-neutral-800 transition-all shadow-sm"
          >
            Try the Look Runway →
          </a>
          <a
            href="#collections"
            className="px-6 py-3.5 border border-black/15 text-[#121212] rounded-full text-xs font-mono tracking-wider uppercase hover:bg-black/5 transition-all"
          >
            Collections
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex items-end justify-between border-t border-black/5 pt-4 text-[11px] font-mono text-[#76736E] max-w-7xl mx-auto w-full"
      >
        <div className="hidden sm:block">
          240+ GSM HEAVYWEIGHT COTTON
        </div>
        <a
          href="#try-the-look"
          className="mx-auto sm:mx-0 flex items-center gap-1.5 text-neutral-800 hover:text-black transition-colors"
        >
          <span>EXPLORE THE RUNWAY</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
        <div className="hidden sm:block text-right">
          ATELIER SPEC 01
        </div>
      </motion.div>
    </section>
  );
};
