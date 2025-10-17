import { setCustomElements, Preview } from '@storybook/web-components-vite';
import prettier from 'prettier/standalone';
import * as html from 'prettier/plugins/html';

import { handlePolaritySwitching, globalFormatting } from './decorators';
import customElements from '../custom-elements.json';

import '../src/styles/kemet.base.scss';
import '../src/styles/kemet.core.scss';
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
      options: {
        light: {
          name: 'light',
          value: "rgb(var(--kemet-color-neutral-100))",
        },

        dark: {
          name: 'dark',
          value: 'rgb(var(--kemet-color-neutral-900))',
        }
      }
    },
    docs: {
      codePanel: true,
      source: {
        type: 'dynamic',
        excludeDecorators: true,
        transform: async (src, storyContext) => {
          if (!src) return src;
          try {
            return await prettier.format(src, {
              parser: 'html',
              plugins: [html],
              tabWidth: 2,
              printWidth: 80,
            });
          } catch {
            return src; // fallback if Prettier fails
          }
        },
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Styles', 'Icons','Elements', 'Templates'],
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
};

export default preview;
