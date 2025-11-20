import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@repo/core": resolve(__dirname, "../../packages/core"),
      "@repo/ui": resolve(__dirname, "../../packages/ui"),
      "@repo/config": resolve(__dirname, "../../packages/config"),
      "@repo/types": resolve(__dirname, "../../packages/types")
    }
  },
  define: {
    // Map process.env.API_KEY to Vite's environment variable
    'process.env.API_KEY': JSON.stringify(process.env.VITE_API_KEY)
  }
});
