import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base deve corresponder ao nome do repositório para o GitHub Pages
  base: '/claudecode/',
  plugins: [react()],
})
