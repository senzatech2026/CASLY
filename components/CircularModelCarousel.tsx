"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { MODEL_LOOKS, LookItem } from "@/data/caslyData";
import { ChevronLeft, ChevronRight, Plus, Check, ShoppingBag, X } from "lucide-react";

interface CircularModelCarouselProps {
  onAddToCart: (item: LookItem, size: string) => void;
  currency: "INR" | "USD";
  onQuickView: (productData: any) => void;
}

export const CircularModelCarousel: React.FC<CircularModelCarouselProps> = ({
  onAddToCart,
  currency,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLookModalOpen, setIsLookModalOpen] = useState<boolean>(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const totalModels = MODEL_LOOKS.length;

  const formatPrice = (p: number) => {
    if (currency === "USD") {
      return `$${Math.round(p / 84)}`;
    }
    return `₹${p.toLocaleString("en-IN")}`;
  };

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalModels) % totalModels);
  }, [totalModels]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalModels);
  }, [totalModels]);

  // Controlled 1-item-at-a-time Wheel navigation
  const isThrottled = useRef(false);
  const handleWheel = (e: React.WheelEvent) => {
    if (isThrottled.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 25) {
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 450);
    }
  };

  // Single-step Touch Swipe
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchCurrentX.current !== null) {
      const diffX = touchCurrentX.current - touchStartX.current;
      if (Math.abs(diffX) > 30) {
        if (diffX < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
    touchStartY.current = null;
  };

  // Single-step Pointer Drag
  const pointerStartX = useRef<number | null>(null);
  const pointerCurrentX = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    pointerCurrentX.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerStartX.current !== null) {
      pointerCurrentX.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    if (pointerStartX.current !== null && pointerCurrentX.current !== null) {
      const diffX = pointerCurrentX.current - pointerStartX.current;
      if (Math.abs(diffX) > 30) {
        if (diffX < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
    pointerStartX.current = null;
    pointerCurrentX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const activeLook = MODEL_LOOKS[activeIndex] || MODEL_LOOKS[0];

  const handleAddLookItem = (item: LookItem) => {
    const size = selectedSizes[item.id] || item.sizes[0] || "M";
    onAddToCart(item, size);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  const handleAddFullLook = () => {
    activeLook.items.forEach((item) => {
      const size = selectedSizes[item.id] || item.sizes[0] || "M";
      onAddToCart(item, size);
    });
  };

  return (
    <section
      id="try-the-look"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#F4F1EC] text-[#121212] flex flex-col justify-between py-8 px-6 md:px-12 select-none overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
    >
      {/* Top Header: "Try the Look." (Velvetica Minimalist Style) */}
      <div className="relative z-20 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 max-w-7xl mx-auto w-full">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] font-sans">
            Try the Look.
          </h2>
          <p className="text-xs md:text-sm text-[#76736E] mt-1 font-mono tracking-wide">
            Touch any avatar to pop it forward into the spotlight.
          </p>
        </div>

        {/* Look Counter Badge */}
        <div className="text-xs font-mono text-[#76736E] tracking-widest uppercase flex items-center gap-2">
          <span>RUNWAY ARCHIVE</span>
          <span>•</span>
          <span className="font-semibold text-black">
            {String(activeIndex + 1).padStart(2, "0")} / {String(totalModels).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Center 3D Runway Stage */}
      <div className="relative flex-1 w-full flex items-center justify-center my-2 max-w-7xl mx-auto">
        {/* Soft studio floor horizon */}
        <div className="absolute bottom-12 inset-x-0 h-40 bg-gradient-to-t from-black/[0.04] to-transparent pointer-events-none rounded-[100%]" />

        {/* 3D Runway Perspective Viewport */}
        <div className="relative w-full h-[540px] md:h-[620px] runway-perspective flex items-end justify-center pb-8">
          {MODEL_LOOKS.map((model, idx) => {
            // Distance from active center index in a continuous ring
            const diff =
              ((idx - activeIndex + totalModels + Math.floor(totalModels / 2)) % totalModels) -
              Math.floor(totalModels / 2);

            // Calculate horizontal offset and depth scaling
            const absDiff = Math.abs(diff);

            // X positioning
            let xOffset = 0;
            if (diff === 0) xOffset = 0;
            else if (diff === 1) xOffset = 260;
            else if (diff === -1) xOffset = -260;
            else if (diff === 2) xOffset = 470;
            else if (diff === -2) xOffset = -470;
            else xOffset = diff * 240;

            // Z distance & scale
            const scale = diff === 0 ? 1.05 : absDiff === 1 ? 0.86 : 0.72;
            const opacity = diff === 0 ? 1 : absDiff === 1 ? 0.72 : 0.35;
            const blurAmount = diff === 0 ? 0 : absDiff === 1 ? 1.5 : 4.5;
            const zIndex = 30 - absDiff * 5;

            const isFront = diff === 0;

            return (
              <div
                key={model.id}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isFront) {
                    setIsLookModalOpen(true);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  if (isFront) {
                    setIsLookModalOpen(true);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 runway-model-item cursor-pointer flex flex-col items-center group transition-all duration-500 ${
                  !isFront ? "hover:-translate-y-3" : ""
                }`}
                style={{
                  transform: `translate3d(${xOffset}px, ${absDiff * 14}px, ${-absDiff * 160}px) scale(${scale})`,
                  opacity: opacity,
                  filter: `blur(${blurAmount}px)`,
                  zIndex: zIndex,
                }}
              >
                {/* Floating "Tap to Pop Up" badge for other side models */}
                {!isFront && (
                  <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-40 bg-white/95 text-black px-3 py-1 rounded-full text-[10px] font-mono font-medium shadow-md whitespace-nowrap">
                    Tap to pop up • {model.subtitle}
                  </div>
                )}

                {/* Hotspot indicator on Front Model */}
                {isFront && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLookModalOpen(true);
                    }}
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
                    title="Tap to pop up outfit details"
                  >
                    <span className="relative flex h-6 w-6">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-30"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-white border-2 border-black/80 shadow-md items-center justify-center text-[10px] font-bold text-black hover:scale-110 transition-transform">
                        +
                      </span>
                    </span>
                  </div>
                )}

                {/* Cutout Model Figure */}
                <div className="relative w-[220px] sm:w-[260px] md:w-[290px] h-[400px] sm:h-[480px] md:h-[530px] select-none">
                  <Image
                    src={model.avatarImage}
                    alt={model.title}
                    fill
                    sizes="(max-width: 768px) 260px, 320px"
                    className="object-cover object-top model-floor-blend rounded-2xl"
                    priority={idx === 0 || idx === 1}
                  />
                </div>

                {/* Soft ground contact shadow */}
                <div
                  className="w-44 h-4 mt-[-10px] rounded-[100%] bg-black/25 blur-md pointer-events-none transition-all duration-500"
                  style={{
                    transform: `scale(${isFront ? 1.1 : 0.8})`,
                    opacity: isFront ? 0.6 : 0.25,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Floating "In this look" Sidebar (Exact Velvetica Style) */}
        <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-[330px] z-40 bg-white/95 backdrop-blur-md border border-black/10 rounded-2xl p-5 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between border-b border-black/5 pb-3 mb-4">
            <h3 className="text-sm font-semibold text-neutral-900 font-sans tracking-tight">
              In this look
            </h3>
            <span className="text-[11px] font-mono text-[#8C8780] uppercase tracking-wider">
              {activeLook.badge}
            </span>
          </div>

          {/* List of Pieces in this look */}
          <div className="space-y-3">
            {activeLook.items.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-3 p-2 rounded-xl hover:bg-black/[0.02] transition-colors"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-neutral-100 shrink-0 border border-black/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium text-neutral-900 truncate">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-semibold text-neutral-800 font-mono">
                      {formatPrice(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[10px] font-mono text-neutral-400 line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Size buttons */}
                  <div className="flex gap-1 mt-1.5">
                    {item.sizes.map((sz) => {
                      const cur = selectedSizes[item.id] || item.sizes[0];
                      return (
                        <button
                          key={sz}
                          onClick={() =>
                            setSelectedSizes((prev) => ({
                              ...prev,
                              [item.id]: sz,
                            }))
                          }
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded transition-all ${
                            cur === sz
                              ? "bg-neutral-900 text-white font-bold"
                              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                          }`}
                        >
                          {sz}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Add Button */}
                <button
                  onClick={() => handleAddLookItem(item)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    addedItems[item.id]
                      ? "bg-emerald-600 text-white"
                      : "bg-neutral-900 text-white hover:bg-neutral-700"
                  }`}
                  aria-label="Add item to bag"
                >
                  {addedItems[item.id] ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Complete the Look Section */}
          <div className="mt-5 pt-4 border-t border-black/5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
              COMPLETE THE LOOK
            </span>
            <button
              onClick={handleAddFullLook}
              className="w-full py-3 bg-[#111111] text-white rounded-xl text-xs font-mono font-medium tracking-wide uppercase hover:bg-black transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add full look to bag ({formatPrice(activeLook.fullLookPrice)})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Summary Sheet with Tap-to-Popup Button */}
      <div className="lg:hidden w-full bg-white/90 backdrop-blur-md border border-black/10 rounded-xl p-3.5 mt-2 flex items-center justify-between shadow-sm">
        <div
          onClick={() => setIsLookModalOpen(true)}
          className="cursor-pointer"
        >
          <span className="text-[10px] font-mono text-neutral-500 uppercase">
            {activeLook.badge} • Tap for details
          </span>
          <h4 className="text-xs font-semibold text-neutral-900">{activeLook.title}</h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLookModalOpen(true)}
            className="px-3 py-1.5 bg-neutral-100 border border-black/10 text-neutral-900 text-[11px] font-mono rounded-lg hover:bg-neutral-200"
          >
            Popup
          </button>
          <button
            onClick={handleAddFullLook}
            className="px-3.5 py-1.5 bg-black text-white text-[11px] font-mono rounded-lg hover:bg-neutral-800"
          >
            Add Full Look ({formatPrice(activeLook.fullLookPrice)})
          </button>
        </div>
      </div>

      {/* Bottom Controls / Scrubber (Matching Screenshot) */}
      <div className="relative z-20 flex items-center justify-between pt-4 max-w-7xl mx-auto w-full border-t border-black/5 text-xs font-mono text-neutral-500">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-black/10 hover:border-black/30 hover:bg-black/5 transition-colors"
            aria-label="Previous look"
          >
            <ChevronLeft className="w-4 h-4 text-neutral-800" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-black/10 hover:border-black/30 hover:bg-black/5 transition-colors"
            aria-label="Next look"
          >
            <ChevronRight className="w-4 h-4 text-neutral-800" />
          </button>
        </div>

        {/* Look Progress Bar */}
        <div className="flex items-center gap-3">
          <div className="w-24 md:w-40 h-[2px] bg-black/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-300"
              style={{
                width: `${((activeIndex + 1) / totalModels) * 100}%`,
              }}
            />
          </div>
          <span className="text-[11px] font-mono text-neutral-600">
            {activeLook.subtitle}
          </span>
        </div>

        {/* Action Button for Look Popup */}
        <button
          onClick={() => setIsLookModalOpen(true)}
          className="text-[11px] font-mono text-neutral-800 hover:text-black underline underline-offset-2"
        >
          View Full Look Popup →
        </button>
      </div>

      {/* Look Details Popup Modal */}
      {isLookModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto font-mono flex items-center justify-center p-4">
          <div
            onClick={() => setIsLookModalOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          />
          <div className="relative w-full max-w-xl bg-white border border-black/10 rounded-2xl overflow-hidden shadow-2xl text-neutral-900 z-10 p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsLookModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 border border-black/10 flex items-center justify-center hover:bg-neutral-200 transition-colors"
              aria-label="Close look popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">
                {activeLook.badge}
              </span>
              <span className="text-neutral-300">•</span>
              <span className="text-[10px] text-neutral-500 uppercase">
                {activeLook.subtitle}
              </span>
            </div>

            <h3 className="text-2xl font-normal font-sans text-neutral-900 mb-2">
              {activeLook.title}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-mono">
              {activeLook.description}
            </p>

            {/* Pieces in this look */}
            <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto pr-1">
              {activeLook.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-50 border border-black/5"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-neutral-200 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-neutral-900 truncate">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-semibold mt-0.5">
                      <span>{formatPrice(item.price)}</span>
                      <span className="text-[10px] font-normal text-neutral-500 uppercase">
                        {item.tag}
                      </span>
                    </div>

                    {/* Size Selector */}
                    <div className="flex gap-1 mt-1.5">
                      {item.sizes.map((sz) => {
                        const cur = selectedSizes[item.id] || item.sizes[0];
                        return (
                          <button
                            key={sz}
                            onClick={() =>
                              setSelectedSizes((prev) => ({
                                ...prev,
                                [item.id]: sz,
                              }))
                            }
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded transition-all ${
                              cur === sz
                                ? "bg-black text-white font-bold"
                                : "bg-white text-neutral-700 hover:bg-neutral-200 border border-black/5"
                            }`}
                          >
                            {sz}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddLookItem(item)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      addedItems[item.id]
                        ? "bg-emerald-600 text-white"
                        : "bg-neutral-900 text-white hover:bg-neutral-700"
                    }`}
                  >
                    {addedItems[item.id] ? (
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Add Full Look Button */}
            <button
              onClick={() => {
                handleAddFullLook();
                setIsLookModalOpen(false);
              }}
              className="w-full py-3.5 bg-black text-white rounded-xl text-xs font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add Full Look to Bag • {formatPrice(activeLook.fullLookPrice)}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
