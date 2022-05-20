import { html } from 'lit';

const TemplateExample1 = () => html`
  <div kemet-layout="flexlist" kemet-gutters>
    <div><span class="box">One</span></div>
    <div><span class="box">Two</span></div>
    <div><span class="box">Three</span></div>
    <div><span class="box">Four</span></div>
    <div><span class="box">Five</span></div>
    <div><span class="box">Six</span></div>
  </div>
`;
export const Example1 = TemplateExample1.bind({});

const TemplateExample2 = () => html`
  <div kemet-layout="flexlist" kemet-gutters>
    <div><span class="box">One</span></div>
    <div><span class="box">Two</span></div>
    <div><span class="box">Three</span></div>
    <div kemet-order="medium:minus-1"><span class="box" style="background:darkgoldenrod;">Four</span></div>
    <div kemet-order="medium:minus-1"><span class="box" style="background:darkgoldenrod;">Five</span></div>
    <div><span class="box">Six</span></div>
  </div>
`;
export const Example2 = TemplateExample2.bind({});

const TemplateExample3 = () => html`
  <div kemet-layout="flexlist" kemet-gutters="">
    <div><span class="box">One</span></div>
    <div><span class="box">Two</span></div>
    <div><span class="box">Three</span></div>
    <div kemet-order="medium:plus-1"><span class="box" style="background:darkgoldenrod;">Four</span></div>
    <div kemet-order="medium:plus-1"><span class="box" style="background:darkgoldenrod;">Five</span></div>
    <div><span class="box">Six</span></div>
  </div>
`;
export const Example3 = TemplateExample3.bind({});
