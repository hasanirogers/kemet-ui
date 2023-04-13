import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-input';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Input',
  component: 'kemet-input',
};
export default meta;

type Story = StoryObj;

const Template = ({
  type = 'text',
  status = 'standard',
  validateOnBlur = true,
  required = true,
  pattern = '^[a-zA-Z0-9]*$',
  rounded = false,
  filled = false,
  iconLeft = '',
  iconRight = '',
  placeholder = 'Placeholder',
  minlength = null,
  maxlength = null,
  min = null,
  max = null,
  step = null,
  autocomplete = 'off',
  inputmode = 'none',
  autofocus = false,
  disabled = false,
  readonly = false,
}) => html`<kemet-input
  type="${type}"
  status="${status}"
  pattern=${ifDefined(pattern !== '' ? pattern : undefined)}
  ?required=${required}
  ?validate-on-blur=${validateOnBlur}
  ?rounded=${rounded}
  ?filled=${filled}
  icon-left=${ifDefined(iconLeft !== '' ? iconLeft : undefined)}
  icon-right=${ifDefined(iconRight !== '' ? iconRight : undefined)}
  placeholder=${ifDefined(placeholder !== '' ? placeholder : undefined)}
  minlength=${ifDefined(minlength || undefined)}
  maxlength=${ifDefined(maxlength || undefined)}
  min=${ifDefined(min || undefined)}
  max=${ifDefined(max || undefined)}
  step=${ifDefined(step || undefined)}
  autocomplete="${autocomplete}"
  inputmode="${inputmode}"
  ?autofocus=${autofocus}
  ?disabled=${disabled}
  ?readonly=${readonly}
></kemet-input>`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    type: 'text',
    status: 'standard',
    validateOnBlur: true,
    required: true,
    pattern: '^[a-zA-Z0-9]*$',
    rounded: false,
    filled: false,
    iconLeft: '',
    iconRight: '',
    placeholder: 'Placeholder',
    minlength: null,
    maxlength: null,
    min: null,
    max: null,
    step: null,
    autocomplete: 'off',
    inputmode: 'none',
    autofocus: false,
    disabled: false,
    readonly: false,
  },
  argTypes: {
    type: {
      name: 'Type',
      control: { type: 'select' },
      options: [
        'text',
        'color',
        'date',
        'datetime-local',
        'email',
        'password',
        'hidden',
        'month',
        'number',
        'reset',
        'search',
        'tel',
        'time',
        'url',
        'week',
      ],
    },
    status: {
      control: { type: 'radio' },
      options: ['standard', 'error', 'success', 'warning'],
    },
    validateOnBlur: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    pattern: {
      control: { type: 'text' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    filled: {
      control: { type: 'boolean' },
    },
    iconLeft: {
      control: { type: 'text' },
    },
    iconRight: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    minlength: {
      control: { type: 'number' },
    },
    maxlength: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    autocomplete: {
      control: { type: 'radio' },
      options: ['off', 'on'],
    },
    inputmode: {
      control: { type: 'select' },
      options: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
    },
    autofocus: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
  }
};
