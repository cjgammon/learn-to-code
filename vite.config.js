import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is set to './' so the built site works when hosted from a subfolder
// (e.g. GitHub Pages project pages).
export default defineConfig({
  base: './',
  plugins: [react()],
})
