import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { ifDefined } from 'lit/directives/if-defined.js';


import '../../elements/badge';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../elements/icon-bootstrap';

const meta: Meta = {
  title: 'Elements / Badge',
  component: 'kemet-badge',
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['standard', 'primary', 'success', 'warning', 'error'],
    },
    pill: {
      control: { type: 'boolean' },
    },
    circle: {
      control: { type: 'boolean' },
    },
    circlePadding: {
      control: { type: 'number' },
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-badge status=${ifDefined(args.status)} ?pill=${args.pill} ?circle=${args.circle} circle-padding=${args.circlePadding}>
    ${args.circle ? html`<kemet-icon-bootstrap icon="cart3"></kemet-icon-bootstrap>&nbsp;3` : 'Badge'}
  </kemet-badge>
`;

export const Standard: Story = {
  render: args => Template(args),
};

export const Pill: Story = {
  render: args => Template(args),
  args: {
    pill: true,
  },
};

export const Circle: Story = {
  render: args => Template(args),
  args: {
    circle: true,
    circlePadding: 4,
  },
};

export const Success: Story = {
  render: args => Template(args),
  args: {
    status: 'success',
  },
};

export const Warning: Story = {
  render: args => Template(args),
  args: {
    status: 'warning',
  },
};

export const Error: Story = {
  render: args => Template(args),
  args: {
    status: 'error',
  },
};
