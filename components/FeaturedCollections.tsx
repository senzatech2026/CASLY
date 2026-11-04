"use client";

import React from "react";
import Image from "next/image";
import { FEATURED_COLLECTIONS } from "@/data/caslyData";
import { ArrowUpRight } from "lucide-react";

export const FeaturedCollections: React.FC = () => {
  return (
      <section id="collections" className="py-24 px-6 md:px-12 bg-[#F7F5F2] border-t border-black/5 text-[#121212]">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#76736E] uppercase block mb-1">
                    CURATED CHAPTERS
                </span>
                <h2 className="text-3xl md:text-5xl font-normal tracking-tight font-sans text-neutral-900">
                  Featured Collections.
                </h2>
              </div>
                <p className="max-w-md text-xs md:text-sm font-mono text-[#66635D] leading-relaxed">
                  From ice-crystallized mineral tie-dye to fine-brush anime illustrations on denim.
                </p>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FEATURED_COLLECTIONS.map((col) => (
                  <div
                    key={col.id}
                    className="group relative rounded-2xl overflow-hidden bg-neutral-100 border border-black/5 flex flex-col justify-between transition-all"
                  >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                        <Image
                          src={col.image}
                          alt={col.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                          <div className="absolute top-4 left-4 font-mono text-xs px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-black border border-black/5 font-medium">
                            {col.num}
                          </div>
                            <div className="absolute top-4 right-4 text-[10px] font-mono px-2.5 py-1 rounded-full bg-black text-white uppercase font-medium">
                              {col.accent}
                            </div>
                          </div>

                            <div className="p-6 md:p-8 flex items-end justify-between gap-4 bg-white">
                              <div>
                                  <h3 className="text-xl md:text-2xl font-medium text-neutral-900 tracking-tight font-sans">
                                    {col.title}
                                  </h3>
                                    <p className="text-xs text-neutral-500 mt-1.5 font-mono">
                                      {col.tagline}
                                    </p>
                                  </div>

                                  <a
                                    href="#shop"
                                    className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors shrink-0"
                                    aria-label={`Explore ${col.title}`}
                                  >
                                    <ArrowUpRight className="w-4 h-4" />
                                  </a>
                              </div>
                            </div>
          ))}
                          </div>
                        </div>
                      </section>
                      );
};
