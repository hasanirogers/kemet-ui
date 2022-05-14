import { html } from 'lit-html';

import './kemet-flipcard.js';
import './kemet-flipcard-trigger.js';

export default {
  title: 'Kemet Flipcard',
  component: 'kemet-flipcard-trigger',
};

const Template = ({
  width = '50%',
  height = 'auto',
  frontColor = '#202020',
  frontBackgroundColor = '#fafafa',
  backColor = '#202020',
  backBackgroundColor = '#fafafa',
  border = '2px solid var(--kemet-color-primary)',
  borderRadius = '0',
  ratio = '16/9',
  flipped = false,
  measure = false,
  axis = 'horizontal',
  flipOnHover = false,
}) => html`
  <style>
    kemet-flipcard {
      --kemet-flipcard-width: ${width};
      --kemet-flipcard-height: ${height};
      --kemet-flipcard-front-color: ${frontColor};
      --kemet-flipcard-front-background-color: ${frontBackgroundColor};
      --kemet-flipcard-back-color: ${backColor};
      --kemet-flipcard-back-background-color: ${backBackgroundColor};
      --kemet-flipcard-border: ${border};
      --kemet-flipcard-border-radius: ${borderRadius};
      --kemet-flipcard-ratio: ${ratio};
    }
  </style>
  <kemet-flipcard ?flipped="${flipped}" ?measure="${measure}" axis="${axis}" ?flip-on-hover="${flipOnHover}">
    <div slot="front">
      <p>This is the front of the card.</p>
      <kemet-flipcard-trigger>
        <kemet-button>Flip Me</kemet-button>
      </kemet-flipcard-trigger>
    </div>
    <div slot="back">
      <p>This is the back of the card.</p>
      <kemet-flipcard-trigger>
        <kemet-button>Flip Me</kemet-button>
      </kemet-flipcard-trigger>
    </div>
  </kemet-flipcard>
`;

export const Flipcard = Template.bind({});
Flipcard.argTypes = {
  width: {
    control: { type: 'text' },
  },
  height: {
    control: { type: 'text' },
  },
  frontColor: {
    control: { type: 'color' },
  },
  frontBackgroundColor: {
    control: { type: 'color' },
  },
  backColor: {
    control: { type: 'color' },
  },
  backBackgroundColor: {
    control: { type: 'color' },
  },
  border: {
    control: { type: 'text' },
  },
  borderRadius: {
    control: { type: 'text' },
  },
  flipped: {
    control: { type: 'boolean' },
  },
  measure: {
    control: { type: 'boolean' },
  },
  axis: {
    control: { type: 'select' },
    options: ['horizontal', 'vertical'],
  },
  flipOnHover: {
    control: { type: 'boolean' },
  },
};
Flipcard.args = {
  width: '50%',
  height: 'auto',
  frontColor: '#202020',
  frontBackgroundColor: '#fafafa',
  backColor: '#202020',
  backBackgroundColor: '#fafafa',
  border: '2px solid var(--kemet-color-primary)',
  borderRadius: '0',
  ratio: '16/9',
  flipped: false,
  measure: false,
  axis: 'horizontal',
  flipOnHover: false,
};
