import { defineConfig } from 'vite'; // eslint-disable-line
import react from '@vitejs/plugin-react'; // eslint-disable-line

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('three')) return 'vendor-three';
            return 'vendor';
          }
          return null; // Default return value
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three'],
  },
});  // eslint-disable-line