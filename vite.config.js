import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    // Relative asset paths so the build works on GitHub Pages sub-paths.
    base: "./",
    css: {
        preprocessorOptions: {
            // The SCSS still uses @import (7-1 pattern); silence the Dart Sass deprecation notice.
            scss: { silenceDeprecations: ["import"] },
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                focus: resolve(__dirname, "focus.html"),
                actorFocus: resolve(__dirname, "actor-focus.html"),
                notFound: resolve(__dirname, "404.html"),
            },
        },
    },
});
