import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/password';

import '../../elements/input';
import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Elements / Password',
  component: 'kemet-password',
  args: {
    rules: [
      { pattern: '(?=.{8,}$)', message: 'At least 8 characters long' },
      { pattern: '(?=.*[a-z])(?=.*[A-Z])', message: 'Uppercase and lowercase' },
      { pattern: '(?=.*[0-9])', message: 'At least one number (0-9)' },
    ],
    message: 'Please make sure you meet all the requirements.',
  },
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-field slug="new-password" label="New Password">
    <kemet-input slot="input" type="password" name="new-password"></kemet-input>
    <kemet-password slot="component" message=${args.message} .rules=${args.rules}></kemet-password>
  </kemet-field>
`;

export const Standard: Story = {
  render: (args: any) => Template(args),
};
