/* global window */

import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import customElements from '../custom-elements.json';

import '!style-loader!css-loader!sass-loader!../src/styles/kemet.base.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/kemet.core.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/kemet.components.scss';
import '!style-loader!css-loader!sass-loader!./styles/storybook.scss';

setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '200px',
  },
});

export const parameters = {
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'White',
        value: "#ffffff",
      },
      {
        name: 'Gray 1',
        value: '#eff2f1',
      },
      {
        name: 'Gray 2',
        value: '#d7d7d7',
      },
      {
        name: 'Gray 3',
        value: '#bebebe',
      },
      {
        name: 'Gray 4',
        value: '#a4a4a4',
      },
      {
        name: 'Gray 5',
        value: '#8b8b8b',
      },
      {
        name: 'Gray 6',
        value: '#727270',
      },
      {
        name: 'Gray 7',
        value: '#585858',
      },
      {
        name: 'Gray 8',
        value: '#3f3f3f',
      },
      {
        name: 'Gray 9',
        value: '#262626',
      },
      {
        name: 'Gray 10',
        value: '#0c0c0c',
      },
      {
        name: 'Black',
        value: '#000000',
      },
      {
        name: 'Primary',
        value: '#0c4a6e',
      },
    ],
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      printWidth: 180,
      htmlWhitespaceSensitivity: 'strict',
    },
    removeComments: true,
    removeEmptyComments: true,
  },
};
