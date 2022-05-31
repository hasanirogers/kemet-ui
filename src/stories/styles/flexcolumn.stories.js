import { html } from 'lit';

const TemplateExample1 = () => html`
  <section kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">1</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">3</div></div>
  </section>
`;
export const Example1 = TemplateExample1.bind({});

const TemplateExample2 = () => html`
  <section kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
    <div kemet-fit-content><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">1</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">2</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">3</div></div>
  </section>
`;
export const Example2 = TemplateExample2.bind({});
