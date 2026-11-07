import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sealbreak.app",
  output: "static",
  trailingSlash: "never",
  build: {
    // Emit privacy.html instead of privacy/index.html so Cloudflare serves
    // /privacy directly with a 200 instead of redirecting to /privacy/.
    format: "file",
    inlineStylesheets: "never",
  },
  integrations: [sitemap()],
});
