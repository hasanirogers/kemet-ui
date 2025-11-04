import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/sortable';
import '../../elements/sortable-item';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Actions / Sortable',
  component: 'kemet-sortable',
  args: {
    numItems: 3,
  },
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  const items = [];

  for (let i = 0; i < args.numItems; i += 1) {
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
};
