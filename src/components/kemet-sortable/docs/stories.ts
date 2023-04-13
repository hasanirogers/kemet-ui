import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-sortable';
import '../kemet-sortable-item';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Sortable',
  component: 'kemet-sortable',
};
export default meta;

type Story = StoryObj;

const Template = ({ numItems = 3 }) => {
  const items = [];

  for (let i = 0; i < numItems; i += 1) {
    items.push(html`<kemet-sortable-item>Item ${i + 1}</kemet-sortable-item>`);
  }

  return html`
    <kemet-sortable>
      ${items}
    </kemet-sortable>
  `;
};

export const Standard: Story = {
  render: args => Template(args),
  args: {
    numItems: 3,
  },
  argTypes: {
    numItems: {
      control: { type: 'number' },
    },
  }
};
