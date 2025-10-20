import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/investment-calculator/',  // Замени на название твоего репозитория
  build: {
    outDir: 'dist',
  }
})
