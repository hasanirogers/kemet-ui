import { html } from 'lit';

import './kemet-rotator.js';

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
Rotator.argTypes = {
  message1: {
    control: { type: 'text' },
  },
  message2: {
    control: { type: 'text' },
  },
  message3: {
    control: { type: 'text' },
  },
  effect: {
    control: { type: 'select' },
    options: ['fade', 'flip'],
  },
  rotationSpeed: {
    control: { type: 'number' },
  },
};
Rotator.args = {
  message1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  message2: 'Praesent ornare porta nulla.',
  message3: 'Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa.',
  effect: 'fade',
  rotationSpeed: 3,
};
