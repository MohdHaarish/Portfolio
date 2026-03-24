import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        // ── Semantic surface tokens ──────────────────────────
        background: "hsl(var(--background))",
        surface:    "hsl(var(--surface))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT:    "hsl(var(--card))",
          2:          "hsl(var(--card-2))",
          foreground: "hsl(var(--foreground))",
        },

        border: {
          DEFAULT: "hsl(var(--border))",
        },

        muted: {
          DEFAULT:    "hsl(var(--surface))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // ── Accent: fully dynamic via CSS custom properties ──
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          light:      "hsl(var(--accent-light))",
          dark:       "hsl(var(--accent-dark))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // ── gold → accent alias so text-gold / bg-gold / border-gold
        //    all automatically follow the chosen accent color ──
        gold: {
          DEFAULT: "hsl(var(--accent))",
          light:   "hsl(var(--accent-light))",
          dark:    "hsl(var(--accent-dark))",
        },

        // ── Secondary (turquoise), Tertiary (goldenrod), Quaternary (brick) ──
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          light:   "hsl(var(--secondary-light))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          light:   "hsl(var(--tertiary-light))",
        },
        quaternary: {
          DEFAULT: "hsl(var(--quaternary))",
          light:   "hsl(var(--quaternary-light))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
        },
      },

      keyframes: {
        spotlight: {
          "0%":   { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "line-grow": {
          "0%":   { width: "0%" },
          "100%": { width: "100%" },
        },
      },

      animation: {
        spotlight:   "spotlight 2s ease .75s 1 forwards",
        "fade-up":   "fade-up 0.6s ease forwards",
        shimmer:     "shimmer 3s linear infinite",
        "line-grow": "line-grow 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
