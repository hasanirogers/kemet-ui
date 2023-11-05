import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { makeColors } from '../../../../.storybook/utilities';

const meta: Meta = {
  title: 'Styles / Colors',
};
export default meta;

type Story = StoryObj;

const Template = (args) => {
  return html`
    <div kemet-color=${args.textColor} kemet-background-color=${args.backgroundColor} kemet-padding="2xl">The quick brown fox jumps over the lazy dog.</div>
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
      options: makeColors(),
    },
    backgroundColor: {
      control: { type: 'select' },
      options: makeColors(),
    },
  }
}
