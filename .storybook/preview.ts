/* global window */

import { setCustomElements, Preview } from '@storybook/web-components';
import { handlePolaritySwitching, globalFormatting } from './decorators';
import customElements from '../custom-elements.json';

import '../src/styles/kemet.base.scss';
import '../src/styles/kemet.core.scss';
import '../src/styles/kemet.components.scss';
import './storybook.scss';

setCustomElements(customElements);

const preview: Preview = {
  globalTypes: {
    polarity: {
      name: 'Polarity',
      description: 'Global polarity for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [globalFormatting, handlePolaritySwitching],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: "rgb(var(--kemet-color-gray-100))",
        },
        {
          name: 'dark',
          value: 'rgb(var(--kemet-color-gray-900))',
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
      highlighter: {
        showLineNumbers: false,
        wrapLines: false,
      },
      transform: (code) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = code;
        const sourceElement = wrapper.querySelector('#root-inner')?.firstChild as HTMLElement;
        return sourceElement?.innerHTML;
      },
    },
    docs: {
      source: {
        type: 'dynamic',
        excludeDecorators: true,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Styles', 'Components', 'Templates'],
      },
    },
  },
};

export default preview;
