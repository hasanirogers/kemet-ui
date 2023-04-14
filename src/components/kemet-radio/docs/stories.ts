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
};
export default meta;

type Story = StoryObj;

const Template = ({
  legend = 'Legend',
  axis = 'horizontal',
  filled = false,
}) => html`
  <kemet-radios legend=${legend} axis=${axis}>
    <kemet-radio value="1" name="kemet-radio-button" label="Item 1" ?filled=${filled}></kemet-radio>
    <kemet-radio value="2" name="kemet-radio-button" label="Item 2" ?filled=${filled}></kemet-radio>
    <kemet-radio value="3" name="kemet-radio-button" label="Item 3"  ?filled=${filled}></kemet-radio>
    <kemet-radio value="4" name="kemet-radio-button" label="Item 4" ?filled=${filled}></kemet-radio>
  </kemet-radios>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    legend: 'Legend',
    axis: 'horizontal',
    filled: false,
  },
  argTypes: {
    legend: {
      control: { type: 'text' },
    },
    axis: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    filled: {
      control: { type: 'boolean' },
    },
  }
};
