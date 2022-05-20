import { html } from 'lit';

const TemplateExample1 = () => html`
  <section kemet-layout="flexgrid" kemet-gutters="plus-1">
    <div kemet-breakpoint="tiny:100 medium:33 large:25">
      <span class="box">1</span>
    </div>
    <div kemet-breakpoint="tiny:50 medium:33 large:25">
      <span class="box">2</span>
    </div>
    <div kemet-breakpoint="tiny:50 medium:33 large:25">
      <span class="box">3</span>
    </div>
    <div kemet-breakpoint="tiny:100 medium:100 large:25">
      <span class="box">4</span>
    </div>
  </section>
`;
export const Example1 = TemplateExample1.bind({});

const TemplateExample2 = () => html`
  <section kemet-layout="flexgrid" kemet-gutters kemet-basis="tiny:4-columns medium:6-columns huge:12-columns">
    <div><span class="box">1</span></div>
    <div><span class="box">2</span></div>
    <div><span class="box">3</span></div>
    <div><span class="box">4</span></div>
    <div><span class="box">5</span></div>
    <div><span class="box">6</span></div>
    <div><span class="box">7</span></div>
    <div><span class="box">8</span></div>
    <div><span class="box">9</span></div>
    <div><span class="box">10</span></div>
    <div><span class="box">11</span></div>
    <div><span class="box">12</span></div>
  </section>
`;
export const Example2 = TemplateExample2.bind({});
