import { defineConfig } from 'vite'; // eslint-disable-line
import react from '@vitejs/plugin-react'; // eslint-disable-line

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('chart.js')) return 'vendor-chartjs';
            return 'vendor';
          }
          return null; // Default return value
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  },
});
