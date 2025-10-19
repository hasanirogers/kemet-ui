import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/input';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../elements/icon-bootstrap';
import { statuses } from '../../utilities/misc/constants';

const meta: Meta = {
  title: 'Form Controls / Input',
  component: 'kemet-input',
  argTypes: {
    type: {
      name: 'Type',
      control: { type: 'select' },
      options: ['text', 'color', 'date', 'datetime-local', 'email', 'password', 'hidden', 'month', 'number', 'reset', 'search', 'tel', 'time', 'url', 'week'],
    },
    status: {
      control: { type: 'radio' },
      options: statuses,
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
  type="${ifDefined(args.type)}"
  status="${ifDefined(args.status)}"
  pattern=${ifDefined(args.pattern)}
  ?required=${args.required}
  ?validate-on-blur=${args.validateOnBlur}
  ?rounded=${args.rounded}
  ?filled=${args.filled}
  placeholder=${ifDefined(args.placeholder)}
  minlength=${ifDefined(args.minlength)}
  maxlength=${ifDefined(args.maxlength)}
  min=${ifDefined(args.min)}
  max=${ifDefined(args.max)}
  step=${ifDefined(args.step)}
  autocomplete="${ifDefined(args.autocomplete)}"
  inputmode="${ifDefined(args.inputmode)}"
  ?autofocus=${args.autofocus}
  ?disabled=${args.disabled}
  ?readonly=${args.readonly}
>
  ${args.left}
  ${args.right}
</kemet-input>`;

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

export const search: Story = {
  render: args => Template(args),
  args: {
    type: 'search',
    left: html`<kemet-icon-bootstrap icon="search" slot="left"></kemet-icon-bootstrap>`,
    placeholder: 'Input a value to see the clear icon appear'
  },
}

export const LeftIcon: Story = {
  render: args => Template(args),
  args: {
    left: html`<kemet-icon-bootstrap icon="phone" slot="left"></kemet-icon-bootstrap>`,
  },
};

export const RightIcon: Story = {
  render: args => Template(args),
  args: {
    right: html`<kemet-icon-bootstrap icon="search" slot="right"></kemet-icon-bootstrap>`,
  },
};

export const ValidateOnBlur: Story = {
  render: args => Template(args),
  args: {
    validateOnBlur: true,
    required: true,
    inputmode: 'tel',
    pattern: "^(?:\\+?1\\p{White_Space}?)?(?:\\([2-9]\\d{2}\\)|[2-9]\\d{2})[\\p{White_Space}.\\-]?[2-9]\\d{2}[\\p{White_Space}.\\-]?\\d{4}$",
    placeholder: "Enter an invalid us phone number to see the input trigger an error on blur",
    left: html`<kemet-icon-bootstrap icon="phone" slot="left"></kemet-icon-bootstrap>`
  },
};
