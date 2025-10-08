import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-input';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Input',
  component: 'kemet-input',
  argTypes: {
    type: {
      name: 'Type',
      control: { type: 'select' },
      options: ['text', 'color', 'date', 'datetime-local', 'email', 'password', 'hidden', 'month', 'number', 'reset', 'search', 'tel', 'time', 'url', 'week'],
    },
    status: {
      control: { type: 'radio' },
      options: ['standard', 'error', 'success', 'warning'],
    },
    autocomplete: {
      control: { type: 'radio' },
      options: ['off', 'on'],
    },
    inputmode: {
      control: { type: 'select' },
      options: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`<kemet-input
  type="${args.type}"
  status="${args.status}"
  pattern=${ifDefined(args.pattern !== '' ? args.pattern : undefined)}
  ?required=${args.required}
  ?validate-on-blur=${args.validateOnBlur}
  ?rounded=${args.rounded}
  ?filled=${args.filled}
  icon-left=${ifDefined(args.iconLeft !== '' ? args.iconLeft : undefined)}
  icon-right=${ifDefined(args.iconRight !== '' ? args.iconRight : undefined)}
  placeholder=${ifDefined(args.placeholder !== '' ? args.placeholder : undefined)}
  minlength=${ifDefined(args.minlength || undefined)}
  maxlength=${ifDefined(args.maxlength || undefined)}
  min=${ifDefined(args.min || undefined)}
  max=${ifDefined(args.max || undefined)}
  step=${ifDefined(args.step || undefined)}
  autocomplete="${args.autocomplete}"
  inputmode="${args.inputmode}"
  ?autofocus=${args.autofocus}
  ?disabled=${args.disabled}
  ?readonly=${args.readonly}
></kemet-input>`;

export const Standard: Story = {
  render: args => Template(args),
};

export const Rounded: Story = {
  render: args => Template(args),
  args: {
    rounded: true,
  },
};

export const Filled: Story = {
  render: args => Template(args),
  args: {
    filled: true,
  },
};

export const LeftIcon: Story = {
  render: args => Template(args),
  args: {
    iconLeft: 'phone',
  },
};

export const ValidateOnBlur: Story = {
  render: args => Template(args),
  args: {
    validateOnBlur: true,
    required: true,
    pattern: '^[a-zA-Z0-9]*$',
    placeholder: "Enter a special character."
  },
};
