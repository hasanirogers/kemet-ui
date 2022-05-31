import { html } from 'lit';

const Template = ({
  status = 'standard',
  required = true,
  disabled = false,
  icon = 'chevron-down',
  iconSize = 16,
  filled = false,
  rounded = false,
}) => html`
<kemet-select status="${status}" ?required=${required} ?disabled=${disabled} icon=${icon} icon-size=${iconSize} ?filled=${filled} ?rounded=${rounded}>
  <kemet-option label="Choose an Item" value=""></kemet-option>
  <kemet-option label="Item 1" value="1"></kemet-option>
  <kemet-option label="Item 2" value="2" selected></kemet-option>
  <kemet-option label="Item 3" value="3"></kemet-option>
  <kemet-option label="Item 4" value="4" disabled></kemet-option>
</kemet-select>
`;
export const Standard = Template.bind({});
Standard.args = {
  status: 'standard',
  required: true,
  disabled: false,
  icon: 'chevron-down',
  iconSize: 16,
  filled: false,
  rounded: false,
};
Standard.argTypes = {
  status: {
    control: { type: 'radio' },
    options: ['standard', 'error', 'success', 'warning'],
  },
  required: {
    control: { type: 'boolean' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  icon: {
    control: { type: 'text' },
  },
  iconSize: {
    control: { type: 'number' },
  },
  filled: {
    control: { type: 'boolean' },
  },
  rounded: {
    control: { type: 'boolean' },
  },
};
