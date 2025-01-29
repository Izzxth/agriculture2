/* import { defineConfig } from 'vite';
import postcssConfig from './postcss.config.js';

console.log('PostCSS Config:', postcssConfig);

export default defineConfig({
  css: {
    postcss: postcssConfig,
  },
});

*/

import { defineConfig } from 'vite';
export default defineConfig({
  css: {
    postcss: require('./postcss.config.js'),
  },
});
