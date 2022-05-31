import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const Template = ({
  label = null,
  disabled = false,
  checked = false,
  show = false,
  squared = false,
  optionUnchecked = null,
  optionChecked = null,
}) => html`
  <kemet-toggle
    label=${ifDefined(label)}
    ?disabled=${disabled}
    ?checked=${checked}
    ?show=${show}
    ?squared=${squared}
    option-unchecked=${ifDefined(optionUnchecked)}
    option-checked=${ifDefined(optionChecked)}
  ></kemet-toggle>
`;

export const Standard = Template.bind({});
Standard.args = {
  checked: false,
  label: 'Label',
  squared: false,
  show: false,
  disabled: false,
  optionUnchecked: 'No',
  optionChecked: 'Yes',
};
Standard.argTypes = {
  label: {
    control: { type: 'text' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  checked: {
    control: { type: 'boolean' },
  },
  show: {
    control: { type: 'boolean' },
  },
  squared: {
    control: { type: 'boolean' },
  },
  optionChecked: {
    control: { type: 'text' },
  },
  optionUnchecked: {
    control: { type: 'text' },
  },
};
