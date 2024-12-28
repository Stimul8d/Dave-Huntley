import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://stimul8d.github.io",
  base: import.meta.env.MODE === "production" ? "/Dave-Huntley" : "",
  markdown: {
    rehypePlugins: [
      ['rehype-external-links', { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ],
  },
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});