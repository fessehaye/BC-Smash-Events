import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";

// Helper imports
import { manifest } from "./utils/seoConfig"

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable Tailwind by telling Astro where your Tailwind config file lives.
  integrations: [tailwind(), AstroPWA({
    registerType: 'autoUpdate',
    manifest,
    workbox: {
      globDirectory: 'dist',
      globPatterns: [
        '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
      ],
      // Don't fallback on document based (e.g. `/some-page`) requests
      // This removes an errant console.log message from showing up.
      navigateFallback: null,
    },
  })],
});
