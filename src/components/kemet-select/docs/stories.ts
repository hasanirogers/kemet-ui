import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-select';
import '../kemet-option';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Select',
  component: 'kemet-select',
};
export default meta;

type Story = StoryObj;


const Template = ({
  status = 'standard',
  required = true,
  disabled = false,
  icon = 'chevron-down',
  iconSize = 16,
  filled = false,
  rounded = false,
}) => html`
<kemet-select status="${status}" ?required=${required} ?disabled=${disabled} icon=${icon} icon-size=${iconSize} ?filled=${filled} ?rounded=${rounded}>
  <kemet-option label="Choose an Item" value=""></kemet-option>
  <kemet-option label="Item 1" value="1"></kemet-option>
  <kemet-option label="Item 2" value="2" selected></kemet-option>
  <kemet-option label="Item 3" value="3"></kemet-option>
  <kemet-option label="Item 4" value="4" disabled></kemet-option>
</kemet-select>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    status: 'standard',
    required: true,
    disabled: false,
    icon: 'chevron-down',
    iconSize: 16,
    filled: false,
    rounded: false,
  },
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['standard', 'error', 'success', 'warning'],
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'text' },
    },
    iconSize: {
      control: { type: 'number' },
    },
    filled: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
  }
};
