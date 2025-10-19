import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/multi-input';
import '../../elements/field';
import '../../elements/combo';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Form Controls / Multi Input',
  component: 'kemet-multi-input',
  args: {
    options: [
      'Art',
      'Automotive',
      'Bar',
      'Beauty',
      'Contractor',
      'Finance',
      'Market',
      'Medical',
      'Restaurant',
      'Technology',
    ],
  },
};
export default meta;

type Story = StoryObj;

const Template = args => html`
  <kemet-field slug="categories" label="Categories">
    <kemet-multi-input slot="input" name="categories" rounded></kemet-multi-input>
    <kemet-combo slot="component" .options=${args.options}></kemet-combo>
  </kemet-field>
`;

export const Standard: Story = {
  render: args => Template(args),
};
