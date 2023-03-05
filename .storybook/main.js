const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/stories.mdx', '../src/**/stories.@js(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@whitespace/storybook-addon-html',
    './addons/themes/preset',
  ],
};
