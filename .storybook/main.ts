import type { StorybookConfig } from '@storybook/web-components-webpack5';
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
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@whitespace/storybook-addon-html',
  ],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {}
  },
  docs: {
    autodocs: false
  }
};

export default config;
