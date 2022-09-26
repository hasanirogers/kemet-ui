const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/stories.mdx', '../**/stories.@js(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@whitespace/storybook-addon-html',
  ],
};
