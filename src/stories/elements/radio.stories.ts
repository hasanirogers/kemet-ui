import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/radio';
import '../../elements/radios';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Elements / Radio',
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
