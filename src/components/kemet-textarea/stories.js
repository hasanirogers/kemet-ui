import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';

const Template = ({
  status = 'standard',
  validateOnBlur = true,
  required = true,
  placeholder = 'Placeholder',
  minlength = null,
  maxlength = null,
  inputmode = 'none',
  autofocus = false,
  disabled = false,
  readonly = false,
  rows = '4',
  filled = false,
  rounded = false,
}) => html`<kemet-textarea
  status=${status}
  ?required=${required}
  ?validate-on-blur=${validateOnBlur}
  placeholder=${ifDefined(placeholder || null)}
  minlength=${ifDefined(minlength || null)}
  maxlength=${ifDefined(maxlength || null)}
  inputmode=${inputmode}
  ?autofocus=${autofocus}
  ?disabled=${disabled}
  ?readonly=${readonly}
  rows=${rows}
  ?filled=${filled}
  ?rounded=${rounded}
></kemet-textarea>`;

export const Standard = Template.bind({});
Standard.args = {
  status: 'standard',
  validateOnBlur: true,
  required: true,
  placeholder: 'Placeholder',
  minlength: null,
  maxlength: null,
  inputmode: 'none',
  autofocus: false,
  disabled: false,
  readonly: false,
  rows: 4,
  filled: false,
  rounded: false,
};
Standard.argTypes = {
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
  placeholder: {
    control: { type: 'text' },
  },
  minlength: {
    control: { type: 'number' },
  },
  maxlength: {
    control: { type: 'number' },
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
  rows: {
    control: { type: 'number' },
  },
  filled: {
    control: { type: 'boolean' },
  },
  rounded: {
    control: { type: 'boolean' },
  },
};
