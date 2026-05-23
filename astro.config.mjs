import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://michaelttsai.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
