
/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest = {
	name: "BC Smash Events", // Change this to your website's name.
	short_name: "BC Smash", // Change this to your website's short name.
    app_name: "BC Smash Events",
    start_url: "/",
	description:
		"View the latest BC smash events for Melee, Ultimate and P+", // Change this to your websites description.
	theme_color: "#5c5c5c", // Change this to your primary color.
	background_color: "#92979c", // Change this to your background color.
	display: "standalone",
	icons: [
        {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
        },
        {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
        },
        {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
        }
    ]
}