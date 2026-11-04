"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ShoppingBag } from "lucide-react";
import { Product } from "@/data/caslyData";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
  currency: "INR" | "USD";
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  currency,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || "M");
  const [justAdded, setJustAdded] = useState(false);

  const formatPrice = (p: number) => {
    if (currency === "USD") {
      return `$${Math.round(p / 84)}`;
    }
    return `₹${p.toLocaleString("en-IN")}`;
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-mono flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative w-full max-w-2xl bg-white border border-black/10 rounded-2xl overflow-hidden shadow-2xl text-neutral-900 z-10 grid grid-cols-1 md:grid-cols-2">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/80 border border-black/10 flex items-center justify-center hover:bg-neutral-100"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative aspect-[3/4] md:aspect-auto h-64 md:h-full w-full bg-neutral-100">
          <Image src={product.image} alt={product.name} fill sizes="50vw" className="object-cover" />
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest block mb-1">
              {product.badge || "CASLY ATELIER"}
            </span>
            <h3 className="text-xl font-normal font-sans tracking-tight mb-2">
              {product.name}
            </h3>
            <div className="text-base font-semibold mb-3">
              {formatPrice(product.price)}
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="text-xs text-neutral-500 mb-4">
              <div>Fabric: {product.fabric}</div>
            </div>

            <div className="mb-4">
              <span className="text-[10px] uppercase text-neutral-500 block mb-1.5">Size</span>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      selectedSize === sz
                        ? "bg-black text-white font-bold"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className={`w-full py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              justAdded ? "bg-emerald-600 text-white" : "bg-black text-white hover:bg-neutral-800"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag • {selectedSize}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
