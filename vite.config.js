import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "", // Set the base URL to '/' for production

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                portfolio: resolve(__dirname, "portfolio.html"),
            },
            output: {
                chunkFileNames: "js/[name]-[hash].js",
                entryFileNames: "js/[name]-[hash].js",
                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
                        return "assets/[name]-[hash][extname]";
                    }

                    if (/\.(css|js)$/.test(name ?? "")) {
                        return "[name]-[hash][extname]"; // Place js in the same directory as entry files
                    }

                    // Default for other assets
                    return "assets/others/[name]-[hash][extname]";
                },
            },
        },
    },
});
