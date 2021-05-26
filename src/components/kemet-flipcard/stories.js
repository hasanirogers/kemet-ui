import { html } from 'lit-html';
import dedent from 'ts-dedent';

import './kemet-flipcard.js';
import './kemet-flipcard-trigger.js';

export default {
  title: 'Kemet Flipcard',
  component: 'kemet-flipcard-trigger',
};

const Template = ({
  width = '100%',
  height = '240px',
  frontColor = '#202020',
  frontBackgroundColor = '#fafafa',
  backColor = '#202020',
  backBackgroundColor = '#fafafa',
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
    }
  </style>
  <kemet-flipcard ?flipped="${flipped}" ?measure="${measure}" axis="${axis}" ?flip-on-hover="${flipOnHover}">
    <div slot="front">
      <p>This is the front of the card.</p>
    </div>
    <div slot="back">
      <p>This is the back of the card.</p>
    </div>
  </kemet-flipcard>
`;

export const Flipcard = Template.bind({});
Flipcard.parameters = {
  docs: {
    source: {
      code: dedent`
      <kemet-flipcard>
        <div slot="front">
          <p>This is the front of the card.</p>
        </div>
        <div slot="back">
          <p>This is the back of the card.</p>
        </div>
      </kemet-flipcard>
      `,
    },
  },
};
