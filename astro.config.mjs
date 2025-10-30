// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./public'), // Asegúrate de que sea "public", no "puclic"
      },
    },
    server: {
      host: true,
      allowedHosts: ['df38-190-25-164-252.ngrok-free.app']
    },
    ssr: {
      noExternal: ['webcoreui'], // 👈 ¡Esto es lo importante!
    },
  },

  integrations: [react()],
});