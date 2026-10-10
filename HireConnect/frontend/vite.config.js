import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  server: {
    port: 5174, // Ya jo port aap chahte hain (jaise 5174)
    strictPort: true, // Agar port busy ho toh error dega, dusre par nahi jayega
  },
})
