import { html } from 'lit';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/checkbox';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Form Controls / Checkbox',
  component: 'kemet-checkbox',
  render: args => Template(args),
  args: {
    label: 'Label',
  },
};
export default meta;

type Story = StoryObj;

const Template = (args: Args) => html`
  <kemet-checkbox label=${args.label} ?checked=${args.checked} ?indeterminate=${args.indeterminate} ?disabled=${args.disabled} ?rounded=${args.rounded} ?filled=${args.filled}></kemet-checkbox>
`;

export const Standard: Story = {};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
};

export const Rounded: Story = {
  args: {
    rounded: true,
  }
};

export const Filled: Story = {
  args: {
    checked: true,
    filled: true,
  }
};
