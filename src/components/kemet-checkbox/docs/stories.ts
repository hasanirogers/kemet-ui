import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-checkbox';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Checkbox',
  component: 'kemet-checkbox',
  args: {
    label: 'Label',
  },
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-checkbox label=${args.label} ?checked=${args.checked} ?indeterminate=${args.indeterminate} ?disabled=${args.disabled} ?rounded=${args.rounded} ?filled=${args.filled}></kemet-checkbox>
`;

export const Standard: Story = {
  render: args => Template(args),
};

export const Indeterminate: Story = {
  render: args => Template(args),
  args: {
    indeterminate: true,
  }
};

export const Disabled: Story = {
  render: args => Template(args),
  args: {
    disabled: true,
  }
};

export const Rounded: Story = {
  render: args => Template(args),
  args: {
    rounded: true,
  }
};

export const Filled: Story = {
  render: args => Template(args),
  args: {
    checked: true,
    filled: true,
  }
};
