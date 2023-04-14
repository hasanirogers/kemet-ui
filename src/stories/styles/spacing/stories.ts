import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles / Spacing',
};
export default meta;

type Story = StoryObj;

const Template = ({
  type = 'padding',
  side = 'all',
  breakpoint = 'tiny',
  space = 'normal',
}) => {
  const sideAttr = side !== 'all' ? `-${side}` : '';
  const template = `
    <div kemet-${type}${sideAttr}="${breakpoint}:${space}">The quick brown fox jumps over the lazy dog.</div>
  `;

  return html`${unsafeHTML(template)}`;
};

const TemplateMultiple = () => html`
  <div kemet-padding="small:normal medium:none large:largest">
    This will have responsive margins of normal at small, none at medium, and large at largest.
  </div>
`;

export const Standard: Story = {
  render: Template,
  args: {
    type: 'padding',
    side: 'all',
    breakpoint: 'tiny',
    space: 'normal',
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['padding', 'margin'],
    },
    side: {
      control: { type: 'select' },
      options: ['all', 'top', 'right', 'bottom', 'left'],
    },
    breakpoint: {
      control: { type: 'select' },
      options: ['tiny', 'small', 'medium', 'large', 'huge'],
    },
    space: {
      control: { type: 'select' },
      options: ['none', 'smallest', 'smaller', 'small', 'normal', 'large', 'larger', 'largest'],
    },
  },
};

export const Multiple: Story = {
  render: TemplateMultiple,
}
