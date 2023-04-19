import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    sourcemap: true,
    emptyOutDir: false, //maintain other build files
  },
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
})
