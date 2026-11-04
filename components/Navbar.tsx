"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: "INR" | "USD";
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  currency,
  onToggleCurrency,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F5F2]/90 backdrop-blur-md border-b border-black/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-widest text-[#5C5A55]">
          <a
            href="#try-the-look"
            className="hover:text-black transition-colors flex items-center gap-1.5 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            TRY THE LOOK
          </a>
          <a href="#collections" className="hover:text-black transition-colors">
            COLLECTIONS
          </a>
          <a href="#atelier" className="hover:text-black transition-colors">
            ATELIER
          </a>
          <a href="#shop" className="hover:text-black transition-colors">
            SHOP
          </a>
        </nav>

        {/* Center: Brand Wordmark */}
        <div className="flex flex-col items-center">
          <a
            href="#"
            className="text-2xl md:text-3xl font-normal tracking-[0.22em] text-[#121212] font-sans"
          >
            CASLY
          </a>
        </div>

        {/* Right: Currency, Cart */}
        <div className="flex items-center gap-4 md:gap-6 text-xs font-mono">
          <button
            onClick={onToggleCurrency}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#6E6B65] hover:text-black border border-black/10 px-2.5 py-1 rounded-full transition-colors"
          >
            <span>{currency === "INR" ? "₹ INR" : "$ USD"}</span>
          </button>

          <a
            href="#custom-order"
            className="hidden md:inline-flex items-center gap-1 text-[11px] text-white bg-[#121212] px-3.5 py-1.5 rounded-full hover:bg-neutral-800 transition-colors uppercase font-medium"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            Custom
          </a>

          {/* Bag button */}
          <button
            onClick={onOpenCart}
            className="relative p-1 text-[#121212] hover:opacity-75 transition-opacity flex items-center gap-1.5"
            aria-label="Open Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-wider">
              BAG
            </span>
            {cartCount > 0 && (
              <span className="w-4 h-4 bg-black text-white text-[9px] font-bold rounded-full flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-[#121212]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#F7F5F2] border-b border-black/10 p-6 flex flex-col gap-5 text-xs font-mono tracking-widest text-[#5C5A55]">
          <a
            href="#try-the-look"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-black border-b border-black/5 pb-2.5"
          >
            <span>TRY THE LOOK</span>
            <span>→</span>
          </a>
          <a
            href="#collections"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between hover:text-black border-b border-black/5 pb-2.5"
          >
            <span>COLLECTIONS</span>
            <span>→</span>
          </a>
          <a
            href="#atelier"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between hover:text-black border-b border-black/5 pb-2.5"
          >
            <span>ATELIER</span>
            <span>→</span>
          </a>
          <a
            href="#shop"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between hover:text-black border-b border-black/5 pb-2.5"
          >
            <span>SHOP</span>
            <span>→</span>
          </a>
          <div className="pt-2 flex justify-between items-center">
            <button
              onClick={onToggleCurrency}
              className="border border-black/10 px-3 py-1.5 rounded-full text-[11px]"
            >
              Currency: {currency === "INR" ? "₹ INR" : "$ USD"}
            </button>
            <a
              href="#custom-order"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-black text-white px-4 py-2 rounded-full text-[11px]"
            >
              Order Custom Piece
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
