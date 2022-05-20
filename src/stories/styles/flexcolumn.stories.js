import { html } from 'lit';

const TemplateExample1 = () => html`
  <section kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
    <div><span class="box">1</span></div>
    <div><span class="box">2</span></div>
    <div><span class="box">3</span></div>
  </section>
`;
export const Example1 = TemplateExample1.bind({});

const TemplateExample2 = () => html`
  <section kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
    <div fit-content><span class="box">1</span></div>
    <div><span class="box">2</span></div>
    <div><span class="box">3</span></div>
  </section>
`;
export const Example2 = TemplateExample2.bind({});
