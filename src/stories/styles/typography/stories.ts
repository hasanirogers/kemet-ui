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
  size = 'lg',
}) => {
  const kemetSize = breakpoint === 'none' ? size : `${breakpoint}:${size}`;

  return html`
    <p kemet-type-size="${kemetSize}">${label}</p>
  `;
};

const TemplateMultiple = () => html`
  <p kemet-type-size="tiny:xs medium:lg large:2xl">
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
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  }
}

export const Multiple: Story = {
  render: TemplateMultiple,
}
