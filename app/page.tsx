"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CircularModelCarousel } from "@/components/CircularModelCarousel";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { BrandStory } from "@/components/BrandStory";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { InstagramCommunity } from "@/components/InstagramCommunity";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Product, LookItem } from "@/data/caslyData";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "INR" ? "USD" : "INR"));
  };

  const handleAddToCart = (item: LookItem | Product, size: string) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          size: size || "M",
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
      <main className="min-h-screen bg-[#F7F5F2] text-[#121212] flex flex-col selection:bg-black selection:text-white">
        {/* Minimal Top Navigation */}
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          currency={currency}
          onToggleCurrency={toggleCurrency}
        />

        {/* 1. Minimal Hero Section */}
        <HeroSection />

        {/* 2. Velvetica "The Runway" Shop-the-Look Section */}
        <CircularModelCarousel
          onAddToCart={handleAddToCart}
          currency={currency}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 3. Featured Collections */}
        <FeaturedCollections />

        {/* 4. Atelier Story */}
        <BrandStory />

        {/* 5. Ready to Wear Catalog */}
        <FeaturedProducts
          currency={currency}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 6. Instagram & Studio Highlights */}
        <InstagramCommunity />

        {/* 7. Bespoke Custom Orders */}
        <CtaSection />

        {/* 8. Minimalist Footer */}
        <Footer />

        {/* Slide-over Bag Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          currency={currency}
        />

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          currency={currency}
        />
      </main>
      );
}
