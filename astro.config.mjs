import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      bi: ['facebook', 'twitter-x', 'youtube', 'instagram', 'box-arrow-in-right','envelope-paper-heart','file-earmark-arrow-down', 'box-arrow-in-right', 'link-45deg']
    }
  }), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })]
});