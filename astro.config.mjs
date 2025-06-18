// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./public'), // Asegúrate de que sea "public", no "puclic"
      },
    },
    server: {
      host: true,
      allowedHosts: ['2645-190-25-164-252.ngrok-free.app'],
    },
    ssr: {
      noExternal: ['webcoreui'], // 👈 ¡Esto es lo importante!
    },
  },
});
