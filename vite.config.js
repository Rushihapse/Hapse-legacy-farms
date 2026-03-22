import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This redirects http://localhost:5173/api to your backend
      '/api': {
        target: 'http://localhost:3001', // This is where your local Node/Express server usually runs
        changeOrigin: true,
        secure: false,
      },
    },
  },
})