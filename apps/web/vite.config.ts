import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@repo/core": path.resolve(__dirname, "../../packages/core"),
      "@repo/ui": path.resolve(__dirname, "../../packages/ui"),
      "@repo/config": path.resolve(__dirname, "../../packages/config"),
      "@repo/types": path.resolve(__dirname, "../../packages/types"),
      "@repo/schema": path.resolve(__dirname, "../../packages/schema")
    }
  }
});