import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  optimizeDeps: {
    exclude: ['socket.io-client']
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  build: {
    outDir: 'dist',
  },
};
