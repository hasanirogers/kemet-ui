import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-checkbox';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Checkbox',
  component: 'kemet-checkbox',
};
export default meta;

type Story = StoryObj;

const Template = ({
  label = 'Label',
  checked = false,
  indeterminate = false,
  disabled = false,
  rounded = false,
  filled = false,
}) => html`
  <kemet-checkbox label=${label} ?checked=${checked} ?indeterminate=${indeterminate} ?disabled=${disabled} ?rounded=${rounded} ?filled=${filled}></kemet-checkbox>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    label: 'Label',
    checked: false,
    indeterminate: false,
    disabled: false,
    rounded: false,
    filled: false,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    filled: {
      control: 'boolean',
    },
  }
};
