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
    {
      name: '@storybook/addon-essentials',
      // we're already loading docs for remark-gfm so disable it here
      options: {
          docs: false,
      },
    },
    '@storybook/addon-interactions', '@storybook/addon-links', '@storybook/addon-a11y', '@storybook/preset-scss', '@whitespace/storybook-addon-html', '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  docs: {}
};

export default config;
