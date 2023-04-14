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
    // './addons/themes/',
    // '@storybook/addon-mdx-gfm'
  ],
  // typescript: {
  //   check: true,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       experimentalDecorators: true,
  //       useDefineForClassFields: false
  //     },
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: prop => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
  //   }
  // },
  // babel: async options => {
  //   // Fix for component not rendering: https://github.com/storybookjs/storybook/issues/12578#issuecomment-937171138
  //   Object.assign(options.plugins.find(plugin => plugin[0].includes('plugin-proposal-decorators'))[1], {
  //     decoratorsBeforeExport: true,
  //     legacy: false
  //   });
  //   return options;
  // },
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {}
  },
  docs: {
    autodocs: false
  }
};

export default config;
