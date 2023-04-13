import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-toggle';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Toggle',
  component: 'kemet-toggle',
};
export default meta;

type Story = StoryObj;

const Template = ({
  label = null,
  disabled = false,
  checked = false,
  show = false,
  squared = false,
  optionUnchecked = null,
  optionChecked = null,
}) => html`
  <kemet-toggle
    label=${ifDefined(label)}
    ?disabled=${disabled}
    ?checked=${checked}
    ?show=${show}
    ?squared=${squared}
    option-unchecked=${ifDefined(optionUnchecked)}
    option-checked=${ifDefined(optionChecked)}
  ></kemet-toggle>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    checked: false,
    label: 'Label',
    squared: false,
    show: false,
    disabled: false,
    optionUnchecked: 'No',
    optionChecked: 'Yes',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    show: {
      control: { type: 'boolean' },
    },
    squared: {
      control: { type: 'boolean' },
    },
    optionChecked: {
      control: { type: 'text' },
    },
    optionUnchecked: {
      control: { type: 'text' },
    },
  }
};
