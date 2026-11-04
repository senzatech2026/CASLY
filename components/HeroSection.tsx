"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const TARGET_WORD = "CASLY";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&*+=-~_";

export const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>(TARGET_WORD);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsScrambling(true);

    // Negative iteration provides ~200ms of initial full-word scramble before C starts locking
    let iteration = -2.5;
    const totalChars = TARGET_WORD.length;

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return TARGET_WORD.split("")
          .map((char, index) => {
            if (index < iteration) {
              return TARGET_WORD[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
      });

      if (iteration >= totalChars) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(TARGET_WORD);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, 32);
  }, []);

  useEffect(() => {
    // Initial page-load decode animation
    startScramble();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startScramble]);

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
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/5 text-[10px] font-mono tracking-widest text-neutral-600 mb-6 uppercase"
        >
          <Sparkles className="w-3 h-3 text-amber-600" />
          <span>Handmade • Tie & Dye • Custom Prints</span>
        </motion.div>

        {/* Text Scramble / Decoding CASLY Logo (Alosh Denny inspired) */}
        <h1
          onMouseEnter={startScramble}
          onClick={startScramble}
          title="Hover or click to decode"
          className="glitch-text text-[17vw] md:text-[14vw] lg:text-[12vw] font-normal tracking-[-0.03em] leading-[0.85] text-[#121212] select-none uppercase font-sans flex justify-center items-center cursor-pointer transition-opacity"
        >
          <span
            className="scramble-text inline-block"
            data-value={TARGET_WORD}
          >
            {displayText}
          </span>
        </h1>

        {/* Staggered Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto mt-6 text-sm md:text-base text-[#66635D] font-normal leading-relaxed"
        >
          Slow-stitched streetwear. From ice-melt tie-dye pigments to one-of-one
          hand-painted anime denim jackets, crafted individually in small studio drops.
        </motion.p>

        {/* Staggered Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
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
        transition={{ duration: 0.7, delay: 1.05 }}
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
