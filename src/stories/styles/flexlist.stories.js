import { html } from 'lit';

const TemplateExample1 = () => html`
  <div kemet-layout="flexlist" kemet-gutters>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">One</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Two</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Three</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Four</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Five</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Six</div></div>
  </div>
`;
export const Example1 = TemplateExample1.bind({});

const TemplateExample2 = () => html`
  <div kemet-layout="flexlist" kemet-gutters>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">One</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Two</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Three</div></div>
    <div kemet-order="medium:minus-1"><div kemet-background-color="gray5" kemet-color="white" kemet-padding="tiny:smallest">Four</div></div>
    <div kemet-order="medium:minus-1"><div kemet-background-color="gray5" kemet-color="white" kemet-padding="tiny:smallest">Five</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Six</div></div>
  </div>
`;
export const Example2 = TemplateExample2.bind({});

const TemplateExample3 = () => html`
  <div kemet-layout="flexlist" kemet-gutters="">
  <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">One</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Two</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Three</div></div>
    <div kemet-order="medium:plus-1"><div kemet-background-color="gray5" kemet-color="white" kemet-padding="tiny:smallest">Four</div></div>
    <div kemet-order="medium:plus-1"><div kemet-background-color="gray5" kemet-color="white" kemet-padding="tiny:smallest">Five</div></div>
    <div><div kemet-background-color="primary" kemet-color="white" kemet-padding="tiny:smallest">Six</div></div>
  </div>
`;
export const Example3 = TemplateExample3.bind({});
