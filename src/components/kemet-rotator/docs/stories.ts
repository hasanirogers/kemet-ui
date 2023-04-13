import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-rotator';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Rotator',
  component: 'kemet-rotator',
};
export default meta;

type Story = StoryObj;

const Template = ({
  message1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  message2 = 'Praesent ornare porta nulla.',
  message3 = 'Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa.',
  effect = 'fade',
  rotationSpeed = 3,
}) => html`
  <kemet-rotator
    effect="${effect}"
    .rotation-speed=${rotationSpeed}
    .messages="${[message1, message2, message3]}">
  </kemet-rotator>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    message1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    message2: 'Praesent ornare porta nulla.',
    message3: 'Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa.',
    effect: 'fade',
    rotationSpeed: 3,
  },
  argTypes: {
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
  }
};
