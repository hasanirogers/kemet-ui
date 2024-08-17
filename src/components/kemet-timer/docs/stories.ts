import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
// import { ifDefined } from 'lit/directives/if-defined.js';

import '../kemet-timer';
import '../kemet-timer-display';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Timer',
  component: 'kemet-timer',
  argTypes: {
    format: {
      control: { type: 'select' },
      options: ['seconds', 'minutes', 'hours', 'days'],
    },
    amount: {
      control: { type: 'number' },
    },
  },
};
export default meta;

type Story = StoryObj;

const Template = args => html`
  <kemet-timer amount=${args.amount} format=${args.format}>
    <kemet-timer-display format="seconds"></kemet-timer-display>&nbsp;Seconds&nbsp;:
    <kemet-timer-display format="minutes"></kemet-timer-display>&nbsp;Minutes
    <kemet-timer-display format="hours"></kemet-timer-display>&nbsp;Hours
    <kemet-timer-display format="days"></kemet-timer-display>&nbsp;Days
  </kemet-timer>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    amount: 2,
    format: 'minutes',
  },
};
