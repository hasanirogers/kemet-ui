import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../kemet-draggable';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

import '../../kemet-button/kemet-button';

const meta: Meta = {
  title: 'Components / Draggable',
  component: 'kemet-draggable',
  args: {
    text: 'Drag Me',
    memory: 'kemet-draggable-demo',
  },
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-draggable memory=${ifDefined(args.memory || undefined)}>
    <kemet-button>${args.text}</kemet-button>
  </kemet-draggable>
`;

export const Standard: Story = {
  render: args => Template(args),
};
