/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {outDir: 'build'},
  plugins: [react()],
  test: {
    include: ['**/*.spec.tsx', '**/*.spec.ts'],
    globals: true,
  },
})
