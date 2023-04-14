import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-badge';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Badge',
  component: 'kemet-Badge',
};
export default meta;

type Story = StoryObj;

const Template = ({
  status = 'primary',
  pill = false,
  circle = false,
  circlePadding = 8,
}) => html`
  <kemet-badge status=${status} ?pill=${pill} ?circle=${circle} circle-padding=${circlePadding}>
    ${circle ? html`<kemet-icon icon="cart3"></kemet-icon>&nbsp;3` : 'Badge'}
  </kemet-badge>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    status: 'primary',
    pill: false,
    circle: false,
    circlePadding: 8,
  },
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
