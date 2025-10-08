import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Styles / Flexlist',
};
export default meta;

type Story = StoryObj;

const TemplateExample1 = () => html`
  <div kemet-layout="flexlist" kemet-gutters>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">One</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Two</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Three</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Four</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Five</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Six</div></div>
  </div>
`;

const TemplateExample2 = () => html`
  <div kemet-layout="flexlist" kemet-gutters>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">One</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Two</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Three</div></div>
    <div kemet-order="medium:minus-1"><div kemet-background-color="gray-400" kemet-color="white" kemet-padding="xs">Four</div></div>
    <div kemet-order="medium:minus-1"><div kemet-background-color="gray-400" kemet-color="white" kemet-padding="xs">Five</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Six</div></div>
  </div>
`;

const TemplateExample3 = () => html`
  <div kemet-layout="flexlist" kemet-gutters>
  <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">One</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Two</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Three</div></div>
    <div kemet-order="medium:plus-1"><div kemet-background-color="gray-400" kemet-color="white" kemet-padding="xs">Four</div></div>
    <div kemet-order="medium:plus-1"><div kemet-background-color="gray-400" kemet-color="white" kemet-padding="xs">Five</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="xs">Six</div></div>
  </div>
`;

export const Example1: Story = {
  render: TemplateExample1,
}

export const Example2: Story = {
  render: TemplateExample2,
}

export const Example3: Story = {
  render: TemplateExample3,
}
