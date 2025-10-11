import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-button';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

import '../../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Elements / Button',
  component: 'kemet-button',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'text', 'circle', 'rounded', 'pill'],
    },
    outlined: {
      control: { type: 'boolean' },
    },
    iconLeft: {
      control: { type: 'text' },
    },
    iconRight: {
      control: { type: 'text' },
    },
    link: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-button variant="${ifDefined(args.variant)}" ?outlined=${args.outlined} ?disabled=${args.disabled} link=${ifDefined(args.link !== '' ? args.link : undefined)}>
    ${ifDefined(args.iconLeft !== '' && args.type !== 'circle' && args.iconLeft ? html`<kemet-icon slot="left" icon="${args.iconLeft}"></kemet-icon>` : undefined)}
    ${args.variant === 'circle' ? html`<kemet-icon icon="gear" size="24"></kemet-icon>` : 'Button'}
    ${ifDefined(args.iconRight !== '' && args.variant !== 'circle' && args.iconRight ? html`<kemet-icon slot="right" icon="${args.iconRight}"></kemet-icon>` : undefined)}
  </kemet-button>
`;


export const Standard: Story = {
  render: args => Template(args),
};

export const Text: Story = {
  render: args => Template(args),
  args: {
    variant: 'text',
  },
};

export const Circle: Story = {
  render: args => Template(args),
  args: {
    variant: 'circle',
  },
};

export const Rounded: Story = {
  render: args => Template(args),
  args: {
    variant: 'rounded',
  },
};

export const Pill: Story = {
  render: args => Template(args),
  args: {
    variant: 'pill',
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
    variant: 'rounded',
  },
};

export const OutlinedPill: Story = {
  render: args => Template(args),
  args: {
    outlined: true,
    variant: 'pill',
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
