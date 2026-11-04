/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        casly: {
          dark: "#0b0b0b",
          cream: "#f7f5f0",
          charcoal: "#1c1b1a",
          accent: "#ff4d29",
          sand: "#e8e3d9",
          muted: "#8c8780",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        editorial: ["Playfair Display", "serif"],
      },
      letterSpacing: {
        ultra: "0.25em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
}

