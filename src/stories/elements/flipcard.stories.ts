import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/flipcard';
import '../../elements/flipcard-trigger';

import '../../elements/button';
import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

const meta: Meta = {
  title: 'Elements / Flipcard',
  component: 'kemet-flipcard',
  argTypes: {
    axis: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    flipped: false
  }
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-flipcard ?flipped="${args.flipped}" ?measure="${args.measure}" axis="${ifDefined(args.axis)}" ?flip-on-hover="${args.flipOnHover}" ?rounded=${args.rounded}>
    <div slot="front" kemet-elevation="layer-5" kemet-padding="2xl">
      <p>This is the front of the card.</p>
      <kemet-flipcard-trigger>
        <kemet-button>Flip Me</kemet-button>
      </kemet-flipcard-trigger>
    </div>
    <div slot="back" kemet-elevation="layer-5" kemet-padding="2xl">
      <p>This is the back of the card.</p>
      <kemet-flipcard-trigger>
        <kemet-button>Flip Me</kemet-button>
      </kemet-flipcard-trigger>
    </div>
  </kemet-flipcard>
`;

export const Standard: Story = {
  render: (args) => Template(args),
};

export const Vertical: Story = {
  render: (args) => Template(args),
  args: {
    axis: 'vertical',
  },
};

export const Rounded: Story = {
  render: (args) => Template(args),
  args: {
    rounded: true,
  },
};

export const Hover: Story = {
  render: (args) => Template(args),
  args: {
    flipOnHover: true,
  },
};
