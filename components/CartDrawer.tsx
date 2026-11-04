"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, size: string, delta: number) => void;
  onRemoveItem: (id: string, size: string) => void;
  currency: "INR" | "USD";
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  currency,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (p: number) => {
    if (currency === "USD") {
      return `$${Math.round(p / 84)}`;
    }
    return `₹${p.toLocaleString("en-IN")}`;
  };

  const handleCheckout = () => {
    const orderDetails = items
      .map((i) => `• ${i.name} (${i.size}) x${i.quantity} - ${formatPrice(i.price * i.quantity)}`)
      .join("%0A");
    const totalStr = formatPrice(subtotal);
    const message = `Hello CASLY! I would like to place an order for:%0A%0A${orderDetails}%0A%0ATotal: ${totalStr}%0A%0APlease share payment & delivery details!`;
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
      <div className="fixed inset-0 z-50 overflow-hidden font-mono text-[#121212]">
        <div onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <div className="w-screen max-w-md bg-white border-l border-black/10 flex flex-col justify-between shadow-2xl">
                <div className="p-5 border-b border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-neutral-800" />
                      <h3 className="text-xs font-semibold tracking-wider uppercase">
                        BAG ({items.reduce((acc, i) => acc + i.quantity, 0)})
                      </h3>
                  </div>
                    <button onClick={onClose} className="p-1 hover:bg-neutral-100 rounded-full" aria-label="Close bag">
                      <X className="w-4 h-4" />
                    </button>
                </div>

                  <div className="flex-1 overflow-y-auto p-5 space-y-3">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-neutral-400 py-12">
                          <ShoppingBag className="w-10 h-10 stroke-[1] mb-3 text-neutral-300" />
                          <p className="text-xs text-neutral-600">Your bag is empty.</p>
                        </div>
                        ) : (
              items.map((item) => (
                            <div key={`${item.id}-${item.size}`} className="flex gap-3 p-2.5 rounded-xl bg-neutral-50 border border-black/5">
                              <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-neutral-200 shrink-0">
                                <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                              </div>
                              <div className="flex-1 flex flex-col justify-between min-w-0">
                                <div>
                                    <h4 className="text-xs font-medium text-neutral-900 truncate">{item.name}</h4>
                                    <div className="flex items-center gap-2 text-[10px] text-neutral-500 mt-0.5">
                                      <span className="font-semibold text-neutral-800">{item.size}</span>
                                      <span>•</span>
                                      <span>{formatPrice(item.price)}</span>
                                    </div>
                                  </div>
                                      <div className="flex items-center justify-between pt-1">
                                        <div className="flex items-center border border-black/10 rounded">
                                          <button onClick={() => onUpdateQuantity(item.id, item.size, -1)} className="px-2 py-0.5 text-neutral-600 hover:text-black">-</button>
                                          <span className="px-1.5 text-[11px] font-semibold">{item.quantity}</span>
                                          <button onClick={() => onUpdateQuantity(item.id, item.size, 1)} className="px-2 py-0.5 text-neutral-600 hover:text-black">+</button>
                                        </div>
                                          <button onClick={() => onRemoveItem(item.id, item.size)} className="text-neutral-400 hover:text-rose-600 p-1" aria-label="Remove item">
                                            <Trash2 className="w-3.5 h-3.5" />
                                          </button>
                                      </div>
                                    </div>
                                  </div>
                                  ))
            )}
                                </div>

                                {items.length > 0 && (
                                      <div className="p-5 border-t border-black/5 bg-[#F7F5F2]">
                                        <div className="flex justify-between text-xs font-semibold mb-3">
                                          <span>TOTAL</span>
                                          <span>{formatPrice(subtotal)}</span>
                                        </div>
                                        <button
                                          onClick={handleCheckout}
                                          className="w-full py-3 bg-black text-white font-medium text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                                        >
                                          <span>Complete on WhatsApp</span>
                                          <ArrowRight className="w-4 h-4" />
                                        </button>
                                      </div>
          )}
                                    </div>
                                  </div>
    </div>
                              );
};
