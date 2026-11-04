"use client";

import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const LETTERS = [
  { char: "C", initX: -85, initY: -60, initRot: -28, midX: 30, midY: -25, midRot: 15 },
  { char: "A", initX: -35, initY: 70, initRot: 25, midX: -40, midY: -35, midRot: -14 },
  { char: "S", initX: 75, initY: -80, initRot: -30, midX: -25, midY: 35, midRot: 18 },
  { char: "L", initX: -65, initY: 50, initRot: 26, midX: 35, midY: -20, midRot: -12 },
  { char: "Y", initX: 90, initY: -45, initRot: -24, midX: -30, midY: 25, midRot: 14 },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-[#F7F5F2] text-[#121212] overflow-hidden">
      {/* Top Editorial Details - subtle fade in */}
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
        {/* Animated Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/5 text-[10px] font-mono tracking-widest text-neutral-600 mb-6 uppercase"
        >
          <Sparkles className="w-3 h-3 text-amber-600" />
          <span>Handmade • Tie & Dye • Custom Prints</span>
        </motion.div>

        {/* Scattered to Snapping CASLY Logo */}
        <h1 className="text-[17vw] md:text-[14vw] lg:text-[12vw] font-normal tracking-[-0.03em] leading-[0.85] text-[#121212] select-none uppercase font-sans flex justify-center items-center">
          {LETTERS.map((letter, i) => (
            <motion.span
              key={letter.char}
              className="inline-block origin-center will-change-transform"
              initial={{
                opacity: 0,
                x: letter.initX,
                y: letter.initY,
                rotate: letter.initRot,
                scale: 0.8,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: [0, 1, 1, 1, 1],
                x: [letter.initX, letter.midX, letter.initX * 0.2, 0],
                y: [letter.initY, letter.midY, letter.initY * 0.2, 0],
                rotate: [letter.initRot, letter.midRot, letter.initRot * 0.15, 0],
                scale: [0.8, 1.15, 0.95, 1],
                filter: ["blur(6px)", "blur(2px)", "blur(0px)", "blur(0px)"],
              }}
              transition={{
                duration: 1.05,
                delay: i * 0.04,
                times: [0, 0.35, 0.75, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter.char}
            </motion.span>
          ))}
        </h1>

        {/* Staggered Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.18, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto mt-6 text-sm md:text-base text-[#66635D] font-normal leading-relaxed"
        >
          Slow-stitched streetwear. From ice-melt tie-dye pigments to one-of-one
          hand-painted anime denim jackets, crafted individually in small studio drops.
        </motion.p>

        {/* Staggered Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.32, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Bottom Bar - subtle fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.45 }}
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
