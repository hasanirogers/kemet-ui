import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles / Elevation',
};
export default meta;

type Story = StoryObj;

const Template = ({ layer = 'layer3' }) => html`
  <div kemet-elevation=${layer} kemet-padding="tiny:normal" kemet-margin="tiny:normal">The quick brown fox jumps over the lazy dog.</div>
`;

export const Standard: Story = {
  render: Template,
  args: {
    layer: 'layer3',
  },
  argTypes: {
    layer: {
      control: { type: 'select' },
      options: ['none', 'layer1', 'layer2', 'layer3', 'layer4', 'layer5', 'layer6', 'inner'],
    },
  }
}
