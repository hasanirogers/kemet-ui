import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/field';
import '../../elements/input';
import '../../elements/textarea';
import '../../elements/select';
import '../../elements/option';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Form Controls / Field',
  component: 'kemet-accordion',
  args: {
    label: 'Label',
  },
  argTypes: {
    status: {
      name: 'Status',
      control: { type: 'radio' },
      options: ['standard', 'error', 'success', 'warning'],
    },
  }
};
export default meta;

type Story = StoryObj;

const TemplateInput = (args) => html`
  <kemet-field slug="unique-identifier" label="${args.label}" message="${args.message}" status="${args.status}">
    <kemet-input required slot="input" name="input-field" status="${args.status}" validate-on-blur></kemet-input>
  </kemet-field>
`;

const TemplateSelect = (args) => html`
  <kemet-field slug="unique-identifier" label="${args.label}" message="${args.message}" status="${args.status}">
    <kemet-select slot="input" name="select-field" status="${status}" required>
      <kemet-option label="Choose an Item" value=""></kemet-option>
      <kemet-option label="Item 1" value="1"></kemet-option>
      <kemet-option label="Item 2" value="2" selected></kemet-option>
      <kemet-option label="Item 3" value="3"></kemet-option>
      <kemet-option label="Item 4" value="4" disabled></kemet-option>
    </kemet-select>
  </kemet-field>
`;

const TemplateTextarea = (args) => html`
  <kemet-field slug="unique-identifier" label="${args.label}" message="${args.message}" status="${args.status}">
    <kemet-textarea required slot="input" name="textarea-field" status="${args.status}"></kemet-textarea>
  </kemet-field>
`;

export const Input: Story = {
  render: args => TemplateInput(args),
};

export const Select: Story = {
  render: args => TemplateSelect(args),
};

export const Textarea: Story = {
  render: args => TemplateTextarea(args),
};
