import { html } from 'lit';

const TemplateInput = ({
  label = 'Label', message = '', status = 'standard',
}) => html`
  <kemet-field slug="unique-identifier" label="${label}" message="${message}" status="${status}">
    <kemet-input required slot="input" name="input-field" status="${status}" validate-on-blur></kemet-input>
  </kemet-field>
`;
export const Input = TemplateInput.bind({});
Input.args = {
  label: 'Label',
  message: '',
  status: 'standard',
};
Input.argTypes = {
  label: {
    name: 'Label',
    control: { type: 'text' },
  },
  message: {
    name: 'Validation Message',
    control: { type: 'text' },
  },
  status: {
    name: 'Status',
    control: { type: 'radio' },
    options: ['standard', 'error', 'success', 'warning'],
  },
};

const TemplateSelect = ({
  label = 'Label', message = '', status = 'standard',
}) => html`
  <kemet-field slug="unique-identifier" label="${label}" message="${message}" status="${status}">
    <kemet-select slot="input" name="select-field" status="${status}" required>
      <kemet-option label="Choose an Item" value=""></kemet-option>
      <kemet-option label="Item 1" value="1"></kemet-option>
      <kemet-option label="Item 2" value="2" selected></kemet-option>
      <kemet-option label="Item 3" value="3"></kemet-option>
      <kemet-option label="Item 4" value="4" disabled></kemet-option>
    </kemet-select>
  </kemet-field>
`;
export const Select = TemplateSelect.bind({});
Select.args = {
  label: 'Label',
  message: '',
  status: 'standard',
};
Select.argTypes = {
  label: {
    name: 'Label',
    control: { type: 'text' },
  },
  message: {
    name: 'Validation Message',
    control: { type: 'text' },
  },
  status: {
    name: 'Status',
    control: { type: 'radio' },
    options: ['standard', 'error', 'success', 'warning'],
  },
};

const TemplateTextarea = ({
  label = 'Label', message = '', status = 'standard',
}) => html`
  <kemet-field slug="unique-identifier" label="${label}" message="${message}" status="${status}">
    <kemet-textarea required slot="input" name="textarea-field" status="${status}"></kemet-textarea>
  </kemet-field>
`;
export const Textarea = TemplateTextarea.bind({});
Textarea.args = {
  label: 'Label',
  message: '',
  status: 'standard',
};
Textarea.argTypes = {
  label: {
    name: 'Label',
    control: { type: 'text' },
  },
  message: {
    name: 'Validation Message',
    control: { type: 'text' },
  },
  status: {
    name: 'Status',
    control: { type: 'radio' },
    options: ['standard', 'error', 'success', 'warning'],
  },
};
