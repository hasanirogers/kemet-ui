import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-radio';
import '../kemet-radios';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Radio',
  component: 'kemet-radio',
  args: {
    legend: 'Legend',
  },
  argTypes: {
    axis: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-radios legend=${args.legend} axis=${args.axis}>
    <kemet-radio value="1" name="kemet-radio-button" label="Item 1" ?filled=${args.filled}></kemet-radio>
    <kemet-radio value="2" name="kemet-radio-button" label="Item 2" ?filled=${args.filled}></kemet-radio>
    <kemet-radio value="3" name="kemet-radio-button" label="Item 3"  ?filled=${args.filled}></kemet-radio>
    <kemet-radio value="4" name="kemet-radio-button" label="Item 4" ?filled=${args.filled}></kemet-radio>
  </kemet-radios>
`;

export const Standard: Story = {
  render: args => Template(args),
};

export const Vertical: Story = {
  render: args => Template(args),
  args: {
    axis: 'vertical',
  },
};

export const Filled: Story = {
  render: args => Template(args),
  args: {
    filled: true,
  },
};
