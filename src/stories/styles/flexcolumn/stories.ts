import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Styles / Flexcolumn',
};
export default meta;

type Story = StoryObj;

const TemplateExample1 = () => html`
  <section kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">1</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">2</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">3</div></div>
  </section>
`;

const TemplateExample2 = () => html`
  <section kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
    <div kemet-fit-content><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">1</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">2</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">3</div></div>
  </section>
`;

export const Example1: Story = {
  render: TemplateExample1,
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

export const Example2: Story = {
  render: TemplateExample2,
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

