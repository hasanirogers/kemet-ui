import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-combo';

import '../../kemet-field/kemet-field';
import '../../kemet-input/kemet-input';
import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Combo',
  component: 'kemet-combo',
  args: {
    options: [
      'How do use Kemet UI?',
      'What is a Blueprint System?',
      'Are there going to be more components?',
      'Is it good to use attribute for styles?',
      'Does Kemet UI work with React?',
      'Does Kemet UI work with Angular?',
    ]
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-field slug="unique-identifier" label="Frequently asked questions." kemet-margin="xs">
    <kemet-input slot="input" name="input" placeholder="Start typing to see the FAQs"></kemet-input>
    <kemet-combo slot="component" .options=${args.options}></kemet-combo>
  </kemet-field>
`;

export const Standard: Story = {
  render: (args) => Template(args),
};
