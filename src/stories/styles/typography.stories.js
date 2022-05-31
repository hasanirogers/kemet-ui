import { html } from 'lit';

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
export const Standard = Template.bind({});
Standard.args = {
  label: 'The quick brown fox jumps over the lazy dog.',
  breakpoint: 'none',
  size: 'plus-2',
};
Standard.argTypes = {
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
};

const TemplateMultiple = () => html`
  <p kemet-type-size="tiny:minus-2 medium:plus-2 large:plus-4">
    Watch me change size at breakpoints.
  </p>
`;
export const Multiple = TemplateMultiple.bind({});
