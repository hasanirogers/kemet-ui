import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles / Colors',
};
export default meta;

type Story = StoryObj;

const colors = [
  'white', 'white-10', 'white-20', 'white-30', 'white-40', 'white-50', 'white-60', 'white-70', 'white-80', 'white-90', 'white-rich',
  'black', 'black-10', 'black-20', 'black-30', 'black-40', 'black-50', 'black-60', 'black-70', 'black-80', 'black-90', 'black-rich',
  'gray1', 'gray2', 'gray3', 'gray4', 'gray5', 'gray6', 'gray7', 'gray8', 'gray9', 'gray10',
  'primary', 'primary-10', 'primary-20', 'primary-30', 'primary-40', 'primary-50', 'primary-60', 'primary-70', 'primary-80', 'primary-90',
  'error', 'success', 'neutral', 'warning',
  'text', 'foreground', 'background',
];

const Template = ({ textColor, backgroundColor }) => {
  return html`
    <div kemet-color=${textColor} kemet-background-color=${backgroundColor} kemet-padding="tiny:normal">The quick brown fox jumps over the lazy dog.</div>
  `;
}

export const Standard: Story = {
  render: Template,
  args: {
    textColor: 'foreground',
    backgroundColor: 'background',
  },
  argTypes: {
    textColor: {
      control: { type: 'select' },
      options: colors,
    },
    backgroundColor: {
      control: { type: 'select' },
      options: colors,
    },
  }
}
