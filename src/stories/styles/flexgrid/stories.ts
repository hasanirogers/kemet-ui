import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles / Flexgrid',
};
export default meta;

type Story = StoryObj;

const TemplateExample1 = () => html`
  <section kemet-layout="flexgrid" kemet-gutters="lg">
    <div kemet-breakpoint="tiny:100 medium:33 large:25">
      <div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">1</div>
    </div>
    <div kemet-breakpoint="tiny:50 medium:33 large:25">
      <div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">2</div>
    </div>
    <div kemet-breakpoint="tiny:50 medium:33 large:25">
      <div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">3</div>
    </div>
    <div kemet-breakpoint="tiny:100 medium:100 large:25">
      <div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">4</div>
    </div>
  </section>
`;

const TemplateExample2 = () => html`
  <section kemet-layout="flexgrid" kemet-gutters kemet-basis="tiny:4-columns medium:6-columns huge:12-columns">
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">1</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">3</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">4</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">5</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">6</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">7</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">8</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">9</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">10</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">11</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">12</div></div>
  </section>
`;

export const Example1: Story = {
  render: TemplateExample1,
}

export const Example2: Story = {
  render: TemplateExample2,
}

