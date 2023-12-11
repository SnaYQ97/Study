import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    open: 'lab2/kula'
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
    },
  }
})
