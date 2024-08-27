import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,
    port: 80
  },
  hmr:{
    overlay:false,
  },
  plugins: [react()],
})