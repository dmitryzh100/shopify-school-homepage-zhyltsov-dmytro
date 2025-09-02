import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended', 'plugin:prettier/recommended'],
    parseOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    languageOptions: { globals: globals.browser },
  },
]);
