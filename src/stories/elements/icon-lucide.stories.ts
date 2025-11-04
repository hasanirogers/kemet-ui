import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/icon-lucide';
import '../../elements/button';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../../.storybook/elements/docs-icons';


const meta: Meta = {
  title: 'Icons / Lucide',
  component: 'kemet-icon-lucide',
  args: {
    icon: 'code',
    size: 24,
  },
};
export default meta;

type Story = StoryObj;

const Template = args => html`
  <kemet-icon-lucide icon=${args.icon} size=${args.size}></kemet-icon-lucide>
`;

export const Standard: Story = {
  render: args => Template(args)
};
