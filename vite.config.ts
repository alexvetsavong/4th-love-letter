import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["public/*"],
      manifest: {
        name: "Anniversary Love Letter",
        short_name: "LoveLetter",
        description:
          "Fourth Year Anniversary Love Letter to Amie served via a Vite-bootstrapped PWA",
        start_url: "/",
        theme_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/public/ico/rabbit-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/public/ico/rabbit-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/public/ico/rabbit-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/public/ico/rabbit-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
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
