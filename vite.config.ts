import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // <-- Important: your repo name, case-sensitive
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


