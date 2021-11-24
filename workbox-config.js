const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.generateSW({
    globDirectory: "dist",
    globPatterns: ["**/*.{css}"],
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
    swDest: "dist/sw.js",
  });
};

buildSW();
