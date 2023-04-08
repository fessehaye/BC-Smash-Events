import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable Tailwind by telling Astro where your Tailwind config file lives.
  integrations: [tailwind(), AstroPWA()],
});
