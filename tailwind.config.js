const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
      },
    },
  },
};
