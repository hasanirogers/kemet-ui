import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-count';

import '../../kemet-input/kemet-input';
import '../../kemet-field/kemet-field';
import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Count',
  component: 'kemet-count',
};
export default meta;

type Story = StoryObj;

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

export const Standard: Story = {
  render: args => Template(args),
  args: {
    label: 'Label',
    message: 'Too many characters!',
    status: 'standard',
    remaining: 'characters remaining.',
    validateImmediately: true,
    limit: 8,
  },
  argTypes: {
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
  }
};
