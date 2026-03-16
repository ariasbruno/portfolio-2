import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: [
      "mint.local"
    ]
  },
  server: {
    allowedHosts: [
      "mint.local"
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
      "@components": path.resolve(process.cwd(), "./src/components"),
      "@pages": path.resolve(process.cwd(), "./src/pages"),
      "@assets": path.resolve(process.cwd(), "./src/assets"),
      "@hooks": path.resolve(process.cwd(), "./src/hooks"),
      "@services": path.resolve(process.cwd(), "./src/services"),
      "@utils": path.resolve(process.cwd(), "./src/utils"),
    },
  },
})
