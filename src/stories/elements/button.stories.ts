import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/button';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../elements/icon-bootstrap';
import { EnumVariants, variants } from '../../elements/button';

const meta: Meta = {
  title: 'Elements / Button',
  component: 'kemet-button',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variants,
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-button variant="${ifDefined(args.variant)}" ?outlined=${args.outlined} ?disabled=${args.disabled} link=${ifDefined(args.link !== '' ? args.link : undefined)}>
    ${ifDefined(args.iconLeft !== '' && args.type !== 'circle' && args.iconLeft ? html`<kemet-icon-bootstrap slot="left" icon="${args.iconLeft}" size="18"></kemet-icon-bootstrap>` : undefined)}
    ${args.variant === 'circle' ? html`<kemet-icon-bootstrap icon="gear" size="24"></kemet-icon-bootstrap>` : 'Button'}
    ${ifDefined(args.iconRight !== '' && args.variant !== 'circle' && args.iconRight ? html`<kemet-icon-bootstrap slot="right" icon="${args.iconRight}" size="18"></kemet-icon-bootstrap>` : undefined)}
  </kemet-button>
`;


export const Standard: Story = {
  render: args => Template(args),
};

export const Text: Story = {
  render: args => Template(args),
  args: {
    variant: EnumVariants.TEXT,
  },
};

export const Circle: Story = {
  render: args => Template(args),
  args: {
    variant: EnumVariants.CIRCLE,
  },
};

export const Rounded: Story = {
  render: args => Template(args),
  args: {
    variant: EnumVariants.ROUNDED,
  },
};

export const Pill: Story = {
  render: args => Template(args),
  args: {
    variant: EnumVariants.PILL,
  },
};

export const Outlined: Story = {
  render: args => Template(args),
  args: {
    outlined: true,
  },
};

export const OutlinedRounded: Story = {
  render: args => Template(args),
  args: {
    outlined: true,
    variant: EnumVariants.ROUNDED,
  },
};

export const OutlinedPill: Story = {
  render: args => Template(args),
  args: {
    outlined: true,
    variant: EnumVariants.PILL,
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
  render: args => Template(args),
  args: {
    link: 'https://google.com',
  },
};

export const Disabled: Story = {
  render: args => Template(args),
  args: {
    disabled: true,
  },
};
