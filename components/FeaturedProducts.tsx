"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FEATURED_PRODUCTS, Product } from "@/data/caslyData";
import { ShoppingBag, Check } from "lucide-react";

interface FeaturedProductsProps {
  currency: "INR" | "USD";
  onAddToCart: (product: any, size: string) => void;
  onQuickView: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  currency,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [justAdded, setJustAdded] = useState<Record<string, boolean>>({});

  const formatPrice = (p: number) => {
    if (currency === "USD") {
      return `$${Math.round(p / 84)}`;
    }
    return `₹${p.toLocaleString("en-IN")}`;
  };

  const handleAdd = (product: Product) => {
    const size = selectedSizes[product.id] || product.sizes[0] || "M";
    onAddToCart(product, size);
    setJustAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setJustAdded((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="shop" className="py-24 px-6 md:px-12 bg-[#F7F5F2] text-[#121212] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
              CURRENT EDITION
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight font-sans text-neutral-900">
              Ready to Wear.
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            Hand-treated garments ready for immediate dispatch
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => {
            const currentSize = selectedSizes[product.id] || product.sizes[0] || "M";

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-xl overflow-hidden bg-white border border-black/5 p-3 hover:shadow-md transition-shadow"
              >
                <div
                  onClick={() => onQuickView(product)}
                  className="relative aspect-[3/4] w-full bg-neutral-100 rounded-lg overflow-hidden cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 text-[9px] font-mono font-medium tracking-wider px-2 py-0.5 rounded bg-white/90 text-black uppercase">
                      {product.badge}
                    </div>
                  )}
                </div>

                <div className="pt-3 pb-1 flex flex-col justify-between flex-1 gap-3">
                  <div>
                    <h3 className="text-xs font-medium text-neutral-900 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-neutral-900 font-mono">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] font-mono text-neutral-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5">
                    <div className="flex gap-1">
                      {product.sizes.slice(0, 4).map((s) => (
                        <button
                          key={s}
                          onClick={() =>
                            setSelectedSizes((prev) => ({
                              ...prev,
                              [product.id]: s,
                            }))
                          }
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded transition-all ${
                            currentSize === s
                              ? "bg-black text-white font-bold"
                              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`p-2 rounded-lg text-xs font-mono transition-all ${
                        justAdded[product.id]
                          ? "bg-emerald-600 text-white"
                          : "bg-neutral-900 text-white hover:bg-neutral-700"
                      }`}
                      aria-label="Add to bag"
                    >
                      {justAdded[product.id] ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <ShoppingBag className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
