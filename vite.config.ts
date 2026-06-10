import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    router: {
      // Remove basepath for Vercel deployment
    },
  },
  nitro: {
    presets: ["vercel"],
  },
  vite: {
    base: "/",
  },
});