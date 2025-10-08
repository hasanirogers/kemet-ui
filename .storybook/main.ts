import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/stories.ts', "../src/**/stories.@(jsx|ts|tsx)"],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  docs: {}
};

export default config;
