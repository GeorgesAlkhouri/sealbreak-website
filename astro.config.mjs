import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sealbreak.app",
  output: "static",
  integrations: [sitemap()],
});
