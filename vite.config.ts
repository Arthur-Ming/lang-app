import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteAliases(),
    react(),
    svgr({
      exportAsDefault: false,
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
