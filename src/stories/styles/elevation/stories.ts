import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles / Elevation',
};
export default meta;

type Story = StoryObj;

const Template = ({ layer = 'layer-3' }) => html`
  <div kemet-elevation=${layer} kemet-padding="2xl" kemet-margin="2xl">The quick brown fox jumps over the lazy dog.</div>
`;

export const Standard: Story = {
  render: Template,
  args: {
    layer: 'layer-3',
  },
  argTypes: {
    layer: {
      control: { type: 'select' },
      options: ['none', 'layer-1', 'layer-2', 'layer-3', 'layer-4', 'layer-5', 'layer-6', 'inner'],
    },
  }
}
