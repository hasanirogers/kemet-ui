import { html } from 'lit-html';
import dedent from 'ts-dedent';

import './kemet-tabs.js';
import './kemet-tab.js';
import './kemet-tab-panel.js';

export default {
  title: 'Kemet Tabs',
  component: 'kemet-tabs',
};

const Template = ({
  selected = 'two',
}) => html`
  <kemet-tabs selected="${selected}">
    <nav slot="links">
      <kemet-tab link="one">One</kemet-tab>
      <kemet-tab link="two">Two</kemet-tab>
      <kemet-tab link="three">Three</kemet-tab>
    </nav>
    <section slot="panels">
      <kemet-tab-panel panel="one">Panel One</kemet-tab-panel>
      <kemet-tab-panel panel="two">Panel Two</kemet-tab-panel>
      <kemet-tab-panel panel="three">Panel Three</kemet-tab-panel>
    </section>
  </kemet-tabs>
`;

export const Tabs = Template.bind({});
Tabs.parameters = {
  docs: {
    source: {
      code: dedent`
        <kemet-tabs selected="two">
          <nav slot="links">
            <kemet-tab link="one">One</kemet-tab>
            <kemet-tab link="two">Two</kemet-tab>
            <kemet-tab link="three">Three</kemet-tab>
          </nav>
          <section slot="panels">
            <kemet-tab-panel panel="one">Panel One</kemet-tab-panel>
            <kemet-tab-panel panel="two">Panel Two</kemet-tab-panel>
            <kemet-tab-panel panel="three">Panel Three</kemet-tab-panel>
          </section>
        </kemet-tabs>
      `,
    },
  },
};
