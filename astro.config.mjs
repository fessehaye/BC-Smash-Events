import tailwind from "@astrojs/tailwind";

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable Tailwind by telling Astro where your Tailwind config file lives.
  integrations: [tailwind()],
});
