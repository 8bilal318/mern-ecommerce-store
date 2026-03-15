import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
       "@": path.resolve(__dirname, "./src"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@components": path.resolve(__dirname, "./src/components")
    },
  },
})