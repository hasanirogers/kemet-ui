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
  args: {
    label: 'Label'
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-toggle
    label=${ifDefined(args.label)}
    ?disabled=${args.disabled}
    ?checked=${args.checked}
    ?show=${args.show}
    ?squared=${args.squared}
    option-unchecked=${ifDefined(args.optionUnchecked)}
    option-checked=${ifDefined(args.optionChecked)}
  ></kemet-toggle>
`;

export const Standard: Story = {
  render: args => Template(args),
};

export const Squared: Story = {
  render: args => Template(args),
  args: {
    squared: true,
  },
};

export const ShowOptions: Story = {
  render: args => Template(args),
  args: {
    show: true,
    optionUnchecked: 'No',
    optionChecked: 'Yes',
  },
};
