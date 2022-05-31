import { html } from 'lit';

const Template = ({
  label = 'Label',
  message = 'Too many characters!',
  status = 'standard',
  remaining = 'characters remaining.',
  validateImmediately = true,
  limit = 8,
}) => html`
  <kemet-field slug="unique-identifier" label="${label}" message="${message}" status="${status}">
    <kemet-input slot="input" name="input-field" status="${status}" validate-on-blur></kemet-input>
    <kemet-count slot="component" message="${remaining}" limit="${limit}" ?validate-immediately=${validateImmediately}></kemet-count>
  </kemet-field>
`;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Label',
  message: 'Too many characters!',
  status: 'standard',
  remaining: 'characters remaining.',
  validateImmediately: true,
  limit: 8,
};
Standard.argTypes = {
  label: {
    control: { type: 'text' },
  },
  message: {
    control: { type: 'text' },
  },
  status: {
    control: { type: 'radio' },
    options: ['standard', 'error', 'warning'],
  },
  remaining: {
    control: { type: 'text' },
  },
  validateImmediately: {
    control: { type: 'boolean' },
  },
  limit: {
    control: { type: 'number' },
  },
};
