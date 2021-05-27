import { html } from 'lit-html';
import dedent from 'ts-dedent';

import './kemet-rotator.js';

export default {
  title: 'Kemet Rotator',
  component: 'kemet-rotator',
};

const Template = ({
  message1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  message2 = 'Praesent ornare porta nulla.',
  message3 = 'Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa.',
  effect = 'fade',
  rotationSpeed = 3,
}) => html`
  <kemet-rotator
    effect="${effect}"
    rotation-speed="${rotationSpeed}"
    .messages="${[message1, message2, message3]}">
  </kemet-rotator>
`;

export const Rotator = Template.bind({});
Rotator.parameters = {
  docs: {
    source: {
      code: dedent`
        <kemet-rotator messages='["my", "text", "here"]'></kemet-rotator>
      `,
    },
  },
};
