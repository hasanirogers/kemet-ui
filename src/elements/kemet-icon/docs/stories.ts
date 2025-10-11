import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-icon';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Elements / Icon',
  component: 'kemet-icon',
  args: {
    size: 128,
  },
  argTypes: {
    set: {
      control: { type: 'select' },
      options: ['bootstrap', 'font-awesome-brand', 'font-awesome-regular', 'font-awesome-solid'],
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = args => html`
  <kemet-icon set="${args.set}" icon="${ifDefined(args.icon)}" size="${args.size}"></kemet-icon>
`;

export const Standard: Story = {
  render: args => Template(args),
};
