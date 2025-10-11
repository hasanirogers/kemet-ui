import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../kemet-timer';
import '../kemet-timer-display';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Elements / Timer',
  component: 'kemet-timer',
  argTypes: {
    format: {
      control: { type: 'select' },
      options: ['seconds', 'minutes', 'hours', 'days'],
    },
    amount: {
      control: { type: 'number' },
    },
    expires: {
      control: { type: 'text' },
    },
  },
};
export default meta;

type Story = StoryObj;

const Template = args => html`
  <kemet-timer amount=${args.amount} format=${args.format} expires=${ifDefined(args.expires)}>
    <kemet-timer-display format="seconds"></kemet-timer-display>&nbsp;Seconds&nbsp;:
    <kemet-timer-display format="minutes"></kemet-timer-display>&nbsp;Minutes&nbsp;:
    <kemet-timer-display format="hours"></kemet-timer-display>&nbsp;Hours&nbsp;:
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
