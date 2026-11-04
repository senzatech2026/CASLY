import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://casly-demo.vercel.app")
  ),
  title: "CASLY | Handmade Fashion & Streetwear Atelier",
  description:
    "Slow-stitched streetwear. Individually crafted handmade tie & dye t-shirts, custom hand-painted denim, and limited studio drops.",
  icons: {
    icon: [
      { url: "/favicon.svg?v=20261105", type: "image/svg+xml" },
      { url: "/favicon.ico?v=20261105", sizes: "any" },
      { url: "/icon.png?v=20261105", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=20261105",
    apple: "/icon.png?v=20261105",
  },
  openGraph: {
    title: "CASLY | Handmade Fashion & Streetwear Atelier",
    description:
      "Slow-stitched streetwear. Individually crafted handmade tie & dye t-shirts, custom hand-painted denim, and limited studio drops.",
    siteName: "CASLY",
    type: "website",
    images: [
      {
        url: "/og-image.png?v=20261105",
        width: 1200,
        height: 630,
        alt: "CASLY Atelier",
      },
      {
        url: "/icon.png?v=20261105",
        width: 600,
        height: 600,
        alt: "CASLY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CASLY | Handmade Fashion & Streetwear Atelier",
    description:
      "Slow-stitched streetwear. Individually crafted handmade tie & dye t-shirts, custom hand-painted denim, and limited studio drops.",
    images: ["/og-image.png?v=20261105"],
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
