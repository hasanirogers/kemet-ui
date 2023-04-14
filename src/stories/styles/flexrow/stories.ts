import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles / Flexrow',
};
export default meta;

type Story = StoryObj;

const TemplateExample1 = () => html`
  <section kemet-layout="flexrow">
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">1</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">3</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">4</div></div>
  </section>
`;

const TemplateExample2 = () => html`
  <section kemet-layout="flexrow" kemet-autostack kemet-gutters>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">1</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">3</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">4</div></div>
  </section>
`;

const TemplateExample3 = () => html`
  <section kemet-layout="flexrow" kemet-gutters="tiny:none medium:default large:plus-6">
    <div kemet-breakpoint="medium:33"><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">1</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">3</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">4</div></div>
  </section>
`;

const TemplateExample4 = () => html`
  <section kemet-layout="flexrow" kemet-gutters="minus-1">
    <div kemet-breakpoint="tiny:content"><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">❤️</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">3</div></div>
    <div kemet-breakpoint="tiny:50"><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">4</div></div>
  </section>
`;

const TemplateExample5 = () => html`
  <section kemet-layout="flexrow" kemet-gutters="plus-1" kemet-align="middle" style="height: 64px;">
    <div kemet-align="bottom">
      <div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">1</div>
    </div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">2</div></div>
    <div kemet-align="top">
      <div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">3</div>
    </div>
    <div><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">4</div></div>
    <div kemet-align="bottom">
      <div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">5</div>
    </div>
  </section>
`;

const TemplateExample6 = () => html`
  <section kemet-layout="flexrow" kemet-align-cross="between">
    <div kemet-breakpoint="tiny:66"><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">Left</div></div>
    <div kemet-breakpoint="tiny:content"><div kemet-background-color="auto" kemet-color="auto" kemet-padding="tiny:smallest">Right</div></div>
  </section>
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

export const Example4: Story = {
  render: TemplateExample4,
}

export const Example5: Story = {
  render: TemplateExample5,
}

export const Example6: Story = {
  render: TemplateExample6,
}
