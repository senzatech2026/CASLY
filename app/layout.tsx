import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "CASLY | Handmade Fashion & Streetwear Atelier",
  description:
    "Slow-stitched streetwear. Individually crafted handmade tie & dye t-shirts, custom hand-painted denim, and limited studio drops.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.png",
  },
  openGraph: {
    title: "CASLY | Handmade Fashion & Streetwear Atelier",
    description:
      "Slow-stitched streetwear. Individually crafted handmade tie & dye t-shirts, custom hand-painted denim, and limited studio drops.",
    siteName: "CASLY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CASLY | Handmade Fashion & Streetwear Atelier",
    description:
      "Slow-stitched streetwear. Individually crafted handmade tie & dye t-shirts, custom hand-painted denim, and limited studio drops.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" className="scroll-smooth">
          <body className="bg-[#F7F5F2] text-[#121212] antialiased selection:bg-black selection:text-white">
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </body>
        </html>
        );
}
