import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["public/fonts, public/logos"],
      manifest: {
        name: "Fourth Year Anniversary Love Letter to Amie",
        short_name: "Love Letter",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "/public/ico/rabbit.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/public/ico/rabbit.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/public/ico/rabbit.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      injectManifest: {
        globPatterns: ["**/*.{js,html,css,png,svg,ico}"],
      },
    }),
  ],
  base: "/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
