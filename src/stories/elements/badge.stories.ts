import { html } from 'lit';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';
import { ifDefined } from 'lit/directives/if-defined.js';


import '../../elements/badge';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../elements/icon-bootstrap';
import { EnumRoundedSizes, EnumStatuses, roundedSizes, statuses } from '../../utilities/misc/constants';

const meta: Meta = {
  title: 'Feedback & Status / Badge',
  component: 'kemet-badge',
  render: args => Template(args),
  argTypes: {
    status: {
      control: { type: 'select' },
      options: statuses,
    },
    rounded: {
      control: { type: 'select' },
      options: roundedSizes,
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args: Args) => html`
  <kemet-badge status=${ifDefined(args.status)} rounded=${ifDefined(args.rounded)} ?outlined=${args.outlined} circle-padding=${ifDefined(args.circlePadding)}>
    ${args.left}
    ${args.rounded === EnumRoundedSizes.CIRCLE ? html`<kemet-icon-bootstrap icon="cart3"></kemet-icon-bootstrap>&nbsp;3` : 'Badge'}
    ${args.right}
  </kemet-badge>
`;

export const Standard: Story = {};

export const Rounded: Story = {
  args: {
    rounded: EnumRoundedSizes.MD,
  }
}

export const Pill: Story = {
  args: {
    rounded: EnumRoundedSizes.PILL,
  },
};

export const Circle: Story = {
  args: {
    rounded: EnumRoundedSizes.CIRCLE,
    circlePadding: 24,
  },
};

export const LeftIcon: Story = {
  args: {
    left: html`<kemet-icon-bootstrap slot="left" icon="tag-fill" size="15"></kemet-icon-bootstrap>`,
  },
};

export const RightIcon: Story = {
  args: {
    right: html`<kemet-icon-bootstrap slot="right" icon="x-circle-fill" size="15"></kemet-icon-bootstrap>`,
  },
};

export const Outlined: Story = {
  args: {
    outlined: true,
  }
};

export const Success: Story = {
  args: {
    status: EnumStatuses.Success,
  },
};

export const Warning: Story = {
  args: {
    status: EnumStatuses.Warning,
  },
};

export const Error: Story = {
  args: {
    status: EnumStatuses.Error,
  },
};
