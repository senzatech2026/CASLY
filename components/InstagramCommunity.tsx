"use client";

import React from "react";
import Image from "next/image";
import { INSTAGRAM_POSTS } from "@/data/caslyData";
import { Instagram, ArrowUpRight } from "lucide-react";

export const InstagramCommunity: React.FC = () => {
  return (
      <section id="community" className="py-24 px-6 md:px-12 bg-[#F7F5F2] text-[#121212] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#76736E] uppercase mb-1">
                    <Instagram className="w-3 h-3 text-rose-500" />
                    <span>@CASLY.IN</span>
                  </div>
                    <h2 className="text-2xl md:text-4xl font-normal font-sans text-neutral-900">
                      Community & Studio.
                    </h2>
                </div>

                <a
                  href="https://www.instagram.com/casly.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-neutral-800 hover:text-black flex items-center gap-1 border-b border-black/20 pb-0.5"
                >
                  <span>Follow Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {INSTAGRAM_POSTS.map((post) => (
                    <a
                      key={post.id}
                      href="https://www.instagram.com/casly.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-200 block"
                    >
                      <Image
                        src={post.image}
                        alt={post.caption}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center text-white text-[10px] font-mono">
                          {post.likes} likes
                        </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
            );
};
