// @ts-check
import { defineConfig } from 'astro/config';

// Serwowane jako GitHub Pages project site: https://atisoftbb.github.io/atiwindykacja/
// Po podpięciu domeny atiwindykacja.pl → zmień base na '/'.
// https://astro.build/config
export default defineConfig({
  site: 'https://atisoftbb.github.io',
  base: '/atiwindykacja',
});
