import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Styles / Type Alignment',
};
export default meta;

type Story = StoryObj;

const Template = () => html`
  <p kemet-type-align="tiny:left medium:center large:right">
    Watch me change alignment at breakpoints.
  </p>
`;

export const Standard: Story = {
  render: Template,
}
