import { mkdirSync, writeFileSync } from "fs";
import { Readable } from "stream";
import { dirname } from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { defineNuxtModule, createResolver } from "@nuxt/kit";
import axios from "axios";

export default defineNuxtModule({
  meta: {
    name: "sitemap",
    version: "0.0.1",
    configKey: "sitemap",
    compatibility: { nuxt: "^3.0.0" },
  },
  defaults: {
    hostname: "http://localhost:3000",
  },
  async setup(options, nuxt) {
    async function generateSitemap(routes) {
      const sitemapRoutes = routes.map((route) => route.path);

      console.log(sitemapRoutes);

      await axios
        /* this should use "useRuntimeConfig" but it's not available here and
        I couldn't figure out how to import it */
        .get(process.env.BASE_API_URL + "/api/search?results=2000")
        .then(function (response) {
          let entries = response.data.entries;
          entries.forEach((element) => {
            sitemapRoutes.push("/game/" + element["slug"]);
          });
        });

      // https://github.com/ekalinin/sitemap.js#generate-a-one-time-sitemap-from-a-list-of-urls
      const stream = new SitemapStream({ hostname: options.hostname });
      return streamToPromise(Readable.from(sitemapRoutes).pipe(stream)).then(
        (data) => data.toString(),
      );
    }

    function createSitemapFile(sitemap, filepath) {
      const dirPath = dirname(filepath);
      mkdirSync(dirPath, { recursive: true });
      writeFileSync(filepath, sitemap);
    }

    const resolver = createResolver(import.meta.url);
    const filePath = resolver.resolve(
      nuxt.options.srcDir,
      "node_modules/.cache/.sitemap/sitemap.xml",
    );

    nuxt.options.nitro.publicAssets = nuxt.options.nitro.publicAssets || [];
    nuxt.options.nitro.publicAssets.push({
      baseURL: "/",
      dir: dirname(filePath),
    });

    nuxt.hook("pages:extend", async (pages) => {
      const sitemap = await generateSitemap(pages);
      createSitemapFile(sitemap, filePath);
    });
  },
});
