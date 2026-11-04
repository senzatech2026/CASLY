import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "CASLY | The Runway • Shop the Look",
  description:
  "Explore the 3D rotating runway & styled looks. Handmade T-Shirts, Tie & Dye, and custom hand-painted anime streetwear.",
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
