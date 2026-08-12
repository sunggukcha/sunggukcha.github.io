import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sunggukcha.github.io',
  output: 'static',
  outDir: './docs',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
