"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

export const CtaSection: React.FC = () => {
  const [customIdea, setCustomIdea] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      customIdea
          ? `Hi CASLY! I would like to order a custom handmade piece: "${customIdea}"`
          : `Hi CASLY! I would like to order a custom handmade piece from your atelier.`
    );
    window.open(`https://wa.me/917510885426?text=${text}`, "_blank");
  };

  return (
          <section id="custom-order" className="py-24 px-6 md:px-12 bg-[#ECE8E1] text-[#121212] border-t border-black/5 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="text-[10px] font-mono tracking-widest text-[#76736E] uppercase block mb-3">
                BESPOKE ORDERS
              </span>
              <h2 className="text-3xl md:text-5xl font-normal font-sans text-neutral-900 leading-tight">
                Wear something made for you.
              </h2>
                <p className="mt-3 text-xs md:text-sm font-mono text-[#66635D] max-w-lg mx-auto">
                  Custom anime denim artwork, custom tie-dye colorways, or made-to-measure oversized tailoring.
                </p>

                  <form onSubmit={handleWhatsAppRedirect} className="mt-8 max-w-md mx-auto flex gap-2">
                    <input
                      type="text"
                      value={customIdea}
                      onChange={(e) => setCustomIdea(e.target.value)}
                      placeholder="Describe your design (e.g. Sukuna backpiece, L)..."
                      className="flex-1 px-4 py-3 rounded-full bg-white border border-black/10 text-xs font-mono text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black/40"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 rounded-full bg-black text-white text-xs font-mono font-medium hover:bg-neutral-800 transition-colors uppercase shrink-0 flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </form>
                </div>
              </section>
              );
};
