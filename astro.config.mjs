// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./puclic'), 
      },
    },
    server: {
      host: true,
      allowedHosts: ['2645-190-25-164-252.ngrok-free.app'], // <- tu URL de ngrok
    },
  },
});
