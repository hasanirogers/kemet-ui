import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles / Flexcolumn',
};
export default meta;

type Story = StoryObj;

const TemplateExample1 = () => html`
  <section kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">1</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">3</div></div>
  </section>
`;

const TemplateExample2 = () => html`
  <section kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
    <div kemet-fit-content><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">1</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">3</div></div>
  </section>
`;

export const Example1: Story = {
  render: TemplateExample1,
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

export const Example2: Story = {
  render: TemplateExample2,
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

