import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/button';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../elements/icon-bootstrap';
import { EnumVariants, variants } from '../../elements/button';
import { EnumRoundedSizes, roundedSizes } from '../../utilities/constants';

const meta: Meta = {
  title: 'Actions / Button',
  component: 'kemet-button',
  render: args => Template(args),
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variants,
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
  <kemet-button variant="${ifDefined(args.variant)}" ?disabled=${args.disabled} link=${ifDefined(args.link !== '' ? args.link : undefined)} rounded=${ifDefined(args.rounded)}>
    ${ifDefined(args.iconLeft !== '' && args.rounded !== EnumRoundedSizes.CIRCLE && args.iconLeft ? html`<kemet-icon-bootstrap slot="left" icon="${args.iconLeft}" size="18"></kemet-icon-bootstrap>` : undefined)}
    ${args.rounded === EnumRoundedSizes.CIRCLE ? html`<kemet-icon-bootstrap icon="gear" size="24"></kemet-icon-bootstrap>` : 'Button'}
    ${ifDefined(args.iconRight !== '' && args.rounded !== EnumRoundedSizes.CIRCLE && args.iconRight ? html`<kemet-icon-bootstrap slot="right" icon="${args.iconRight}" size="18"></kemet-icon-bootstrap>` : undefined)}
  </kemet-button>
`;


export const Standard: Story = {};

export const Text: Story = {
  args: {
    variant: EnumVariants.TEXT,
  },
};

export const Circle: Story = {
  render: args => Template(args),
  args: {
    rounded: EnumRoundedSizes.CIRCLE,
  },
};

export const Rounded: Story = {
  render: args => Template(args),
  args: {
    rounded: EnumRoundedSizes.MD,
  },
};

export const Pill: Story = {
  render: args => Template(args),
  args: {
    rounded: EnumRoundedSizes.PILL,
  },
};

export const Outlined: Story = {
  render: args => Template(args),
  args: {
    variant: EnumVariants.OUTLINED,
  },
};

export const OutlinedRounded: Story = {
  render: args => Template(args),
  args: {
    variant: EnumVariants.OUTLINED,
    rounded: EnumRoundedSizes.MD,
  },
};

export const OutlinedPill: Story = {
  render: args => Template(args),
  args: {
    variant: EnumVariants.OUTLINED,
    rounded: EnumRoundedSizes.PILL,
  },
};

export const IconLeft: Story = {
  render: args => Template(args),
  args: {
    iconLeft: 'chevron-left',
  },
};

export const IconRight: Story = {
  render: args => Template(args),
  args: {
    iconRight: 'chevron-right',
  },
};

export const Link: Story = {
  args: {
    link: 'https://google.com',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
