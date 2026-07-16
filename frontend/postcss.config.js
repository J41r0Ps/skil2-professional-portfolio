/**
 * PostCSS pipeline used by Vite for every CSS file:
 * - tailwindcss: expands @tailwind/@apply directives (config: tailwind.config.js)
 * - autoprefixer: adds vendor prefixes based on browserslist defaults
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
