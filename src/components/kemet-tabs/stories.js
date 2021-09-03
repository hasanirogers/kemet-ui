import { html } from 'lit-html';

import './kemet-tabs.js';
import './kemet-tab.js';
import './kemet-tab-panel.js';

const namedTemplateResult = args => html`
 <kemet-tabs selected="${args.selected}" panel-effect=${args.panelEffect}>
    <div slot="links" role="tablist" aria-label="Tabs">
      <kemet-tab link="one">One</kemet-tab>
      <kemet-tab link="two">Two</kemet-tab>
      <kemet-tab link="three">Three</kemet-tab>
    </div>
    <section slot="panels">
      <kemet-tab-panel panel="one">Panel One</kemet-tab-panel>
      <kemet-tab-panel panel="two">Panel Two</kemet-tab-panel>
      <kemet-tab-panel panel="three">Panel Three</kemet-tab-panel>
    </section>
  </kemet-tabs>
`;

const namedTemplate = args => namedTemplateResult(args);

export const SelectByName = namedTemplate.bind({});
SelectByName.args = {
  selected: 'two',
  panelEffect: 'slide',
};
SelectByName.parameters = {
  docs: {
    source: {
      code: namedTemplateResult(SelectByName.args).getHTML(),
    },
  },
};

const indexTemplateResult = (args) => {
  const tabs = [];
  const panels = [];

  for (let i = 0; i < args.numOfTabs; i += 1) {
    tabs.push(html`<kemet-tab>Tab${i + 1}&nbsp;&nbsp;</kemet-tab>`);
  }

  for (let i = 0; i < args.numOfTabs; i += 1) {
    panels.push(html`<kemet-tab-panel>Panel ${i + 1}</kemet-tab-panel>`);
  }

  return html`
    <kemet-tabs panel-effect=${args.panelEffect}>
      <div slot="links" role="tablist" aria-label="Tabs">
        ${tabs}
      </div>
      <section slot="panels">
        ${panels}
      </section>
    </kemet-tabs>
  `;
};

const indexTemplate = args => indexTemplateResult(args);

export const SelectByIndex = indexTemplate.bind({});
SelectByIndex.args = {
  panelEffect: 'slide',
  numOfTabs: 5,
};
SelectByIndex.parameters = {
  docs: {
    source: {
      code: indexTemplateResult(SelectByIndex.args).getHTML(),
    },
  },
};
