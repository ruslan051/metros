import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Минимальная конфигурация
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})