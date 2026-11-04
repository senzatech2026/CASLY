"use client";

import React from "react";
import { ArrowUp, Instagram, MessageCircle } from "lucide-react";
import { CaslyLogo } from "@/components/CaslyLogo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <footer className="bg-[#121212] text-[#F7F5F2] pt-16 pb-10 px-6 md:px-12 font-mono text-xs">
        <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
                <div>
                  <div className="mb-3">
                    <CaslyLogo className="h-6 w-auto text-white" />
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Handmade T-Shirts, Tie & Dye studio editions, and bespoke hand-painted streetwear.
                  </p>
                </div>

                    <div>
                      <h4 className="text-[10px] tracking-widest text-neutral-500 uppercase mb-3">
                        SHOP
                      </h4>
                      <ul className="space-y-2 text-neutral-400">
                        <li><a href="#try-the-look" className="hover:text-white">Try the Look Runway</a></li>
                        <li><a href="#collections" className="hover:text-white">Handmade T-Shirts</a></li>
                        <li><a href="#collections" className="hover:text-white">Tie & Dye</a></li>
                        <li><a href="#collections" className="hover:text-white">Custom Painted Denim</a></li>
                      </ul>
                    </div>

                      <div>
                        <h4 className="text-[10px] tracking-widest text-neutral-500 uppercase mb-3">
                          WASH CARE
                        </h4>
                        <p className="text-[11px] text-neutral-400 leading-relaxed">
                          Cold gentle wash inside-out with liquid detergent. Air dry in shade. Avoid iron over paint.
                        </p>
                      </div>

                          <div>
                            <h4 className="text-[10px] tracking-widest text-neutral-500 uppercase mb-3">
                              CONNECT
                            </h4>
                            <ul className="space-y-2 text-neutral-400">
                              <li>
                                  <a href="https://instagram.com/casly.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                                    <Instagram className="w-3.5 h-3.5" />
                                    <span>@casly.in</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://wa.me/917510885426" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>+91 75108 85426</span>
                                  </a>
                              </li>
                            </ul>
                          </div>
                      </div>

                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
                          <div>© {new Date().getFullYear()} CASLY ATELIER. ALL RIGHTS RESERVED.</div>
                          <button
                            onClick={scrollToTop}
                            className="flex items-center gap-1.5 hover:text-white transition-colors"
                          >
                            <span>BACK TO TOP</span>
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </footer>
                    );
};
