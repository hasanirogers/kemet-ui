import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';


import '../kemet-badge';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

import '../../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Components / Badge',
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
    ${args.circle ? html`<kemet-icon icon="cart3"></kemet-icon>&nbsp;3` : 'Badge'}
  </kemet-badge>
`;

// export const Standard: Story = {
//   render: args => Template(args),
//   args: {
//     status: 'primary',
//     pill: false,
//     circle: false,
//     circlePadding: 8,
//   },
// };

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
