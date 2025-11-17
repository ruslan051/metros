import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Минимальная конфигурация без proxy для продакшена
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/',
})