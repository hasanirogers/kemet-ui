import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { makeColors } from '../../../../.storybook/utilities';

const meta: Meta = {
  title: 'Styles / Border',
};
export default meta;

type Story = StoryObj;

const Template = ({
  width = '1',
  side = 'all',
  style = 'solid',
  color = 'primary',
  radius = 'none',
}) => {
  const borderRadius = radius !== 'none' ? `kemet-border-radius="${radius}"` : null;

  const template = `
    <div kemet-border="${side}-${width} ${style} ${color}" ${borderRadius} kemet-margin="2xl" kemet-padding="2xl">The quick brown fox jumps over the lazy dog.</div>
  `;

  return html`${unsafeHTML(template)}`;
};

export const Standard: Story = {
  render: Template,
  args: {
    width: '1',
    side: 'all',
    style: 'solid',
    color: 'auto',
    radius: 'none',
  },
  argTypes: {
    width: {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    side: {
      control: { type: 'select' },
      options: ['all', 'top', 'right', 'bottom', 'left', 'horizontal', 'vertical'],
    },
    style: {
      control: { type: 'select' },
      options: ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
    },
    color: {
      control: { type: 'select' },
      options: makeColors(),
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'circle', 'pill'],
    },
  }
}
