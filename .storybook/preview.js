/* global window */

import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import customElements from '../custom-elements.json';

import '!style-loader!css-loader!sass-loader!../src/styles/kemet.core.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/kemet.components.scss';

setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '200px',
  },
});
