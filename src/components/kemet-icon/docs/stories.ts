import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-icon';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Icon',
  component: 'kemet-icon',
};
export default meta;

type Story = StoryObj;

const Template = args => html`
  <kemet-icon set="${args.set}" icon="${args.icon}" size="${args.size}"></kemet-icon>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    set: 'bootstrap',
    icon: 'alarm',
    size: 128,
  },
  argTypes: {
    set: {
      control: { type: 'select' },
      options: ['bootstrap', 'font-awesome-brand', 'font-awesome-regular', 'font-awesome-solid'],
    },
    icon: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'number' },
    },
  }
};
