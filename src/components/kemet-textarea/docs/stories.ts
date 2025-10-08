import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-textarea';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Textarea',
  component: 'kemet-textarea',
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['standard', 'error', 'success', 'warning'],
    },
    inputmode: {
      control: { type: 'select' },
      options: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
    },
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`<kemet-textarea
  status=${ifDefined(args.status)}
  ?required=${args.required}
  ?validate-on-blur=${args.validateOnBlur}
  placeholder=${ifDefined(args.placeholder || null)}
  minlength=${ifDefined(args.minlength || null)}
  maxlength=${ifDefined(args.maxlength || null)}
  inputmode=${args.inputmode}
  ?autofocus=${args.autofocus}
  ?disabled=${args.disabled}
  ?readonly=${args.readonly}
  rows=${ifDefined(args.rows)}
  ?filled=${args.filled}
  ?rounded=${args.rounded}
></kemet-textarea>`;

export const Standard: Story = {
  render: args => Template(args),
};

export const Disabled: Story = {
  render: args => Template(args),
  args: {
    disabled: true
  }
};

export const Filled: Story = {
  render: args => Template(args),
  args: {
    filled: true
  }
};

export const Rounded: Story = {
  render: args => Template(args),
  args: {
    rounded: true
  }
};
