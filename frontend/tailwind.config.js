/**
 * Tailwind theme — the design system for the whole site.
 *
 * Fonts:  Space Grotesk (display), Geist (body), Geist Mono (labels/dates),
 *         loaded via <link> in index.html.
 * Colors: dark surfaces are pine-tinted (never pure black); light surfaces
 *         are warm off-whites in the same hue family. ONE accent family
 *         (sage) — `jairo-accent` for light backgrounds, `accent-bright`
 *         for text on dark backgrounds.
 * Extras: tinted card shadows, an accent glow, and the layered radial
 *         gradients used behind the hero.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Geist", "ui-sans-serif", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        // dark theme surfaces (pine-tinted, never pure black)
        primary: "#101619",
        secondary: "#aebcb2",
        tertiary: "#151d20",
        "black-100": "#0c1113",
        "black-200": "#080b0c",
        "white-100": "#f4f6f4",

        // single sage accent family
        "jairo-accent": "#52796f",
        accent: {
          DEFAULT: "#52796f",
          bright: "#9ec8b5",
          dim: "#3a564e",
        },

        // light theme surfaces (warm-tinted off-white, same hue family)
        "primary-light": "#f6f7f5",
        "secondary-light": "#5c6b64",
        "tertiary-light": "#e7ebe6",
        "text-light": "#1d2a27",
      },
      boxShadow: {
        card: "0px 20px 60px -20px rgba(12, 20, 18, 0.35)",
        "card-light": "0px 16px 40px -16px rgba(46, 74, 66, 0.18)",
        glow: "0 0 40px -8px rgba(82, 121, 111, 0.45)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse 70% 55% at 75% 15%, rgba(82, 121, 111, 0.22), transparent 70%), radial-gradient(ellipse 55% 45% at 15% 85%, rgba(82, 121, 111, 0.12), transparent 70%)",
        "hero-pattern-light":
          "radial-gradient(ellipse 70% 55% at 75% 15%, rgba(82, 121, 111, 0.16), transparent 70%), radial-gradient(ellipse 55% 45% at 15% 85%, rgba(202, 210, 197, 0.45), transparent 70%)",
        "jairo-gradient":
          "linear-gradient(180deg, #52796f 0%, rgba(82, 121, 111, 0) 100%)",
      },
    },
  },
  plugins: [],
};
