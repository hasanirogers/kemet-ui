import { html } from 'lit';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';
import { roundedSizes } from '../../utilities/constants';

import '../../elements/select';
import '../../elements/option';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';


const meta: Meta = {
  title: 'Form Controls / Select',
  component: 'kemet-select',
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['standard', 'error', 'success', 'warning'],
    },
    rounded: {
      control: { type: 'select' },
      options: roundedSizes,
    },
  }
};
export default meta;

type Story = StoryObj;


const Template = (args: Args) => html`
<kemet-select .status=${args.status} ?required=${args.required} ?disabled=${args.disabled}  ?filled=${args.filled} .rounded=${args.rounded}>
  <kemet-option label="Choose an Item" value=""></kemet-option>
  <kemet-option label="Item 1" value="1"></kemet-option>
  <kemet-option label="Item 2" value="2" selected></kemet-option>
  <kemet-option label="Item 3" value="3"></kemet-option>
  <kemet-option label="Item 4" value="4" disabled></kemet-option>
</kemet-select>
`;

export const Standard: Story = {
  render: args => Template(args),
};

export const Disabled: Story = {
  render: args => Template(args),
  args: {
    disabled: true,
  },
};

export const Filled: Story = {
  render: args => Template(args),
  args: {
    filled: true,
  },
};

export const Rounded: Story = {
  render: args => Template(args),
  args: {
    rounded: true,
  },
};
