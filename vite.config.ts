import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Set this to '/' if deploying at the root
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
