import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: {
        ...globals.node, // Add node globals
        process: 'readonly', // Explicitly declare process as a global
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    ignores: ['node_modules*', 'dist'],
    plugins: {
      prettier: eslintPluginPrettierRecommended,
    },
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
    '@typescript-eslint/no-explicit-any': 'warn',
  },
];
