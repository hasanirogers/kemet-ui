import { html } from 'lit';

const Template = ({
  label = 'Label',
  checked = false,
  indeterminate = false,
  disabled = false,
  rounded = false,
  filled = false,
}) => html`
  <kemet-checkbox label=${label} ?checked=${checked} ?indeterminate=${indeterminate} ?disabled=${disabled} ?rounded=${rounded} ?filled=${filled}></kemet-checkbox>
`;
export const Standard = Template.bind({});
Standard.args = {
  label: 'Label',
  checked: false,
  indeterminate: false,
  disabled: false,
  rounded: false,
  filled: false,
};
Standard.argTypes = {
  label: {
    control: 'text',
  },
  checked: {
    control: 'boolean',
  },
  indeterminate: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
  rounded: {
    control: 'boolean',
  },
  filled: {
    control: 'boolean',
  },
};
