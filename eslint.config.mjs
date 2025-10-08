import js from '@eslint/js';
import ts from 'typescript-eslint';
import wc from 'eslint-plugin-wc';
import lit from 'eslint-plugin-lit';
import litA11y from 'eslint-plugin-lit-a11y';
import importPlugin from 'eslint-plugin-import';
import storybook from 'eslint-plugin-storybook';

export default [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      './.storybook/**',
      'storybook-static/**',
      'src/utilities/controllers/**',
      '**/stories.ts',
    ],
  },

  // Base JavaScript + TypeScript recommended configs
  js.configs.recommended,
  ...ts.configs.recommended,

  {
    plugins: {
      wc,
      lit,
      'lit-a11y': litA11y,
      import: importPlugin,
      storybook,
    },

    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },

    rules: {
      // Common overrides
      indent: 'off',
      'max-len': 'off',
      'no-param-reassign': 'off',
      'no-use-before-define': 'off',
      'no-multi-assign': 'off',
      'no-undef': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',

      // Lit / Web-Components specific
      'lit/no-native-attributes': 'off',
      'lit/no-classfield-shadowing': 'off',

      // TODO revisit allowing any
      '@typescript-eslint/no-explicit-any': 'off',

      // Optional: integrate Storybook recommended rules
      ...storybook.configs.recommended.rules,
    },
  },
];
