// @lovable.dev/vite-tanstack-config already includes the required framework plugins.
// Keep the app's framework defaults intact; only add static-hosting configuration.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // GitHub Pages serves project sites from /<repository-name>/.
  vite: {
    base: "/ajay-anu-s-wedding/",
  },
  tanstackStart: {
    server: { entry: "server" },
    // This invitation is a static site; prerender it at build time.
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
