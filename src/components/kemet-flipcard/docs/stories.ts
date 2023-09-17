import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-flipcard';
import '../kemet-flipcard-trigger';

import '../../kemet-button/kemet-button';
import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

const meta: Meta = {
  title: 'Components / Flipcard',
  component: 'kemet-flipcard',
};
export default meta;

type Story = StoryObj;

const Template = ({
  width = '50%',
  height = 'auto',
  frontColor = 'var(--kemet-color-text)',
  frontBackgroundColor = 'transparent',
  backColor = 'var(--kemet-color-text)',
  backBackgroundColor = 'transparent',
  border = '2px solid var(--kemet-color-background)',
  borderRadius = '0',
  ratio = '16/9',
  flipped = false,
  measure = false,
  axis = 'horizontal',
  flipOnHover = false,
  rounded = false,
}) => html`
  <style>
    kemet-flipcard {
      --kemet-flipcard-width: ${width};
      --kemet-flipcard-height: ${height};
      --kemet-flipcard-front-color: ${frontColor};
      --kemet-flipcard-front-background-color: ${frontBackgroundColor};
      --kemet-flipcard-back-color: ${backColor};
      --kemet-flipcard-back-background-color: ${backBackgroundColor};
      --kemet-flipcard-border: ${border};
      --kemet-flipcard-border-radius: ${borderRadius};
      --kemet-flipcard-ratio: ${ratio};
    }
  </style>
  <kemet-flipcard
    ?flipped="${flipped}"
    ?measure="${measure}"
    axis="${axis}"
    ?flip-on-hover="${flipOnHover}"
    ?rounded=${rounded}
  >
    <div slot="front" kemet-elevation="layer5" kemet-padding="2xl">
      <p>This is the front of the card.</p>
      <kemet-flipcard-trigger>
        <kemet-button>Flip Me</kemet-button>
      </kemet-flipcard-trigger>
    </div>
    <div slot="back" kemet-elevation="layer5" kemet-padding="2xl">
      <p>This is the back of the card.</p>
      <kemet-flipcard-trigger>
        <kemet-button>Flip Me</kemet-button>
      </kemet-flipcard-trigger>
    </div>
  </kemet-flipcard>
`;

export const Standard: Story = {
  render: (args) => Template(args),
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    frontColor: {
      control: { type: 'color' },
    },
    frontBackgroundColor: {
      control: { type: 'color' },
    },
    backColor: {
      control: { type: 'color' },
    },
    backBackgroundColor: {
      control: { type: 'color' },
    },
    border: {
      control: { type: 'text' },
    },
    borderRadius: {
      control: { type: 'text' },
    },
    flipped: {
      control: { type: 'boolean' },
    },
    measure: {
      control: { type: 'boolean' },
    },
    axis: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    flipOnHover: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
  args: {
    width: '50%',
    height: 'auto',
    frontColor: 'rgb(var(--kemet-color-text))',
    frontBackgroundColor: 'transparent',
    backColor: 'rgb(var(--kemet-color-text))',
    backBackgroundColor: 'transparent',
    border: '2px solid rgb(var(--kemet-color-foreground))',
    borderRadius: '0',
    ratio: '16/9',
    flipped: false,
    measure: false,
    axis: 'horizontal',
    flipOnHover: false,
    rounded: false,
  },
};
