import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/the-arcane-scholar-s-legacy/',
  resolve: {
    alias: {
      // This maps the '@' symbol to your 'src' directory
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})