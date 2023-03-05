// Reference: https://storybook.js.org/docs/react/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
// Reference: https://github.com/storybookjs/addon-kit
// Reference: https://github.com/storybookjs/storybook/tree/next/addons

function config(entry = []) {
  return [...entry, require.resolve('./src/preset/preview.js')];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve('./src/preset/manager.js')];
}

module.exports = {
  managerEntries,
  config
};
