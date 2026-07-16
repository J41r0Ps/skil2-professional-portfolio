import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration — https://vite.dev/config/
 *
 * Kept intentionally minimal: the React plugin plus one build tweak.
 * Code splitting happens naturally through the dynamic import in
 * Hero.jsx (the three.js "Laptop" chunk).
 */
export default defineConfig({
  plugins: [react()],
  build: {
    // The lazy-loaded three.js chunk is ~930 KB by design (3D runtime +
    // GLTF loader). It never blocks first paint, so silence the default
    // 500 KB warning instead of chasing it.
    chunkSizeWarningLimit: 1000,
  },
})
