const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/stories.mdx', '../src/**/stories.@js(js|jsx|ts|tsx)'],
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@whitespace/storybook-addon-html',
    './addons/themes/preset',
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        experimentalDecorators: true,
        useDefineForClassFields: false
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  babel: async (options) => {
    // Fix for component not rendering: https://github.com/storybookjs/storybook/issues/12578#issuecomment-937171138
    Object.assign(options.plugins.find((plugin) => plugin[0].includes('plugin-proposal-decorators'))[1], {
      decoratorsBeforeExport: true,
      legacy: false,
    });
    return options;
  }
};
