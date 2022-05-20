import { html } from 'lit';

const TemplateExample1 = () => html`
  <section kemet-layout="flexrow">
    <div><span class="box">Item 1</span></div>
    <div><span class="box">Item 2</span></div>
    <div><span class="box">Item 3</span></div>
    <div><span class="box">Item 4</span></div>
  </section>
`;
export const Example1 = TemplateExample1.bind({});

const TemplateExample2 = () => html`
  <section kemet-layout="flexrow" kemet-autostack kemet-gutters>
    <div><span class="box">Item 1</span></div>
    <div><span class="box">Item 2</span></div>
    <div><span class="box">Item 3</span></div>
    <div><span class="box">Item 4</span></div>
  </section>
`;
export const Example2 = TemplateExample2.bind({});

const TemplateExample3 = () => html`
  <section kemet-layout="flexrow" kemet-gutters="tiny:none medium:default large:plus-6">
    <div kemet-breakpoint="medium:33"><span class="box">Item 1</span></div>
    <div><span class="box">Item 2</span></div>
    <div><span class="box">Item 3</span></div>
    <div><span class="box">Item 4</span></div>
  </section>
`;
export const Example3 = TemplateExample3.bind({});

const TemplateExample4 = () => html`
  <section kemet-layout="flexrow" kemet-flex-items kemet-gutters="minus-1">
    <div kemet-breakpoint="tiny:content"><span class="box">❤️</span></div>
    <div><span class="box">Item 2</span></div>
    <div><span class="box">Item 3</span></div>
    <div kemet-breakpoint="tiny:50"><span class="box">Item 4</span></div>
  </section>
`;
export const Example4 = TemplateExample4.bind({});

const TemplateExample5 = () => html`
  <section kemet-layout="flexrow" kemet-gutters="plus-1" kemet-align="middle" style="height: 64px;">
    <div kemet-align="bottom">
      <span class="box">Item 1</span>
    </div>
    <div><span class="box">Item 2</span></div>
    <div kemet-align="top">
      <span class="box">Item 3</span>
    </div>
    <div><span class="box">Item 4</span></div>
    <div kemet-align="bottom">
      <span class="box">Item 5</span>
    </div>
  </section>
`;
export const Example5 = TemplateExample5.bind({});

const TemplateExample6 = () => html`
  <section kemet-layout="flexrow" kemet-align-cross="between">
    <div kemet-breakpoint="tiny:66"><span class="box">Left</span></div>
    <div kemet-breakpoint="tiny:content"><span class="box">Right</span></div>
  </section>
`;
export const Example6 = TemplateExample6.bind({});
