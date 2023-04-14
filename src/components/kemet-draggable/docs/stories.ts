import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-draggable';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Draggable',
  component: 'kemet-draggable',
};
export default meta;

type Story = StoryObj;

const Template = ({
  text = 'Drag Me',
  memory = null,
}) => html`
  <kemet-draggable memory=${ifDefined(memory || undefined)}>
    <kemet-button>${text}</kemet-button>
  </kemet-draggable>
`;

export const Standard: Story = {
  render: args => Template(args),
  args: {
    text: 'Drag Me',
    memory: 'kemet-draggable-demo',
  },
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    memory: {
      control: { type: 'text' },
    },
  }
};
