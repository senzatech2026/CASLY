"use client";

import React from "react";
import Image from "next/image";
import { Palette, Scissors, Sparkles } from "lucide-react";

export const BrandStory: React.FC = () => {
  return (
      <section id="atelier" className="py-24 px-6 md:px-12 bg-[#EFECE6] text-[#121212] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl mb-16">
                <span className="text-[10px] font-mono tracking-widest text-[#76736E] uppercase block mb-2">
                  ATELIER MANIFESTO
                </span>
                <h2 className="text-3xl md:text-5xl font-normal tracking-tight font-sans text-neutral-900 leading-tight">
                  Not made in a factory. <br />
                  Crafted in an atelier.
                </h2>
                  <p className="mt-4 text-xs md:text-sm font-mono text-[#66635D] leading-relaxed">
                    CASLY operates as an independent slow fashion house in India. Every single piece
                    is treated by hand—from ice crystallization tie-dye vats to bespoke anime
                    illustrations that endure for years.
                  </p>
              </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200">
                          <Image
                            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
                            alt="Mixing pigments"
                            fill
                            sizes="50vw"
                            className="object-cover"
                          />
                        </div>
                          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200 mt-6">
                            <Image
                              src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
                              alt="Hand-painted anime denim"
                              fill
                              sizes="50vw"
                              className="object-cover"
                            />
                          </div>
                        </div>

                            <div className="lg:col-span-5 space-y-6">
                              <div className="p-6 rounded-2xl bg-white/80 border border-black/5">
                                <h3 className="text-base font-medium text-neutral-900 mb-1">
                                  Slow-Melt Ice-Dye
                                </h3>
                                <p className="text-xs font-mono text-neutral-600 leading-relaxed">
                                  We use organic crystallization to fracture pigments into natural smoke patterns,
                                  ensuring no two garments ever share the same texture.
                                </p>
                              </div>

                                <div className="p-6 rounded-2xl bg-white/80 border border-black/5">
                                  <h3 className="text-base font-medium text-neutral-900 mb-1">
                                    240-280 GSM Architecture
                                  </h3>
                                  <p className="text-xs font-mono text-neutral-600 leading-relaxed">
                                    Heavyweight 100% Indian combed cotton cut with dropped shoulders, reinforced
                                    collars, and wide-leg drapes.
                                  </p>
                                </div>

                                  <div className="p-6 rounded-2xl bg-white/80 border border-black/5">
                                    <h3 className="text-base font-medium text-neutral-900 mb-1">
                                      Permanent Fabric Art
                                    </h3>
                                    <p className="text-xs font-mono text-neutral-600 leading-relaxed">
                                      Each custom jacket is painted with heat-fused textile pigments that remain
                                      vibrant after repeated washing.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          );
};
