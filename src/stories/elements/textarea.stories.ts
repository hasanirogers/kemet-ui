import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { EnumRoundedSizes, roundedSizes } from '../../utilities/constants';

import '../../elements/textarea';

const meta: Meta = {
  title: 'Form Controls / Textarea',
  component: 'kemet-textarea',
  render: args => Template(args),
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['standard', 'error', 'success', 'warning'],
    },
    inputmode: {
      control: { type: 'select' },
      options: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
    },
    rounded: {
      control: { type: 'select' },
      options: roundedSizes,
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
  .rounded=${args.rounded}
></kemet-textarea>`;

export const Standard: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Filled: Story = {
  args: {
    filled: true
  }
};

export const Rounded: Story = {
  args: {
    rounded: EnumRoundedSizes.MD
  }
};
