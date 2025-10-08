import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-rotator';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Rotator',
  component: 'kemet-rotator',
  args: {
    rotationSpeed: 3,
    messages: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent ornare porta nulla.', 'Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa.']
  },
  argTypes: {
    effect: {
      control: { type: 'radio' },
      options: ['fade', 'flip'],
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-rotator effect="${ifDefined(args.effect)}" .rotation-speed=${args.rotationSpeed} .messages="${args.messages}"></kemet-rotator>
`;

export const Standard: Story = {
  render: args => Template(args),
};

export const Flip: Story = {
  render: args => Template(args),
  args: {
    effect: 'flip',
  },
};
