import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles / Typography',
};
export default meta;

type Story = StoryObj;

const Template = ({
  label = 'The quick brown fox jumps over the lazy dog.',
  breakpoint = 'none',
  size = 'plus-2',
}) => {
  const kemetSize = breakpoint === 'none' ? size : `${breakpoint}:${size}`;

  return html`
    <p kemet-type-size="${kemetSize}">${label}</p>
  `;
};

const TemplateMultiple = () => html`
  <p kemet-type-size="tiny:minus-2 medium:plus-2 large:plus-4">
    Watch me change size at breakpoints.
  </p>
`;

export const Standard: Story = {
  render: Template,
  args: {
    label: 'The quick brown fox jumps over the lazy dog.',
    breakpoint: 'none',
    size: 'plus-2',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    breakpoint: {
      control: { type: 'select' },
      options: ['none', 'tiny', 'small', 'medium', 'large', 'huge'],
    },
    size: {
      control: { type: 'select' },
      options: ['minus-3', 'minus-2', 'minus-1', 'base', 'plus-1', 'plus-2', 'plus-3', 'plus-4', 'plus-5', 'plus-6'],
    },
  }
}

export const Multiple: Story = {
  render: TemplateMultiple,
}
