import { html } from 'lit-html';
import dedent from 'ts-dedent';
import './kemet-accordion.js';

export default {
  title: 'Kemet Accordion',
  component: 'kemet-accordion',
};

const Template = ({
  transitionSpeed = '300ms',
  togglePanels = false,
}) => html`
  <style>
    kemet-accordion h3 {
      margin: 0;
    }
    kemet-accordion-panel {
      --kemet-accordion-panel-transition-speed: ${transitionSpeed};
    }
  </style>
  <kemet-accordion ?toggle-panels=${togglePanels}>
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 1</h3>
      <kemet-icon slot="icon" icon="caret-down" size="18"></kemet-icon>
      <div slot="body">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </kemet-accordion-panel>
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 2</h3>
      <kemet-icon slot="icon" icon="caret-down" size="18"></kemet-icon>
      <div slot="body">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </kemet-accordion-panel>
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 3</h3>
      <kemet-icon slot="icon" icon="caret-down" size="18"></kemet-icon>
      <div slot="body">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </kemet-accordion-panel>
  </kemet-accordion>
`;

export const Standard = Template.bind({});
Standard.parameters = {
  docs: {
    source: {
      code: dedent`
      <kemet-accordion>
        <kemet-accordion-panel>
          <h3 slot="trigger">Trigger 1</h3>
          <kemet-icon slot="icon" icon="caret-down" size="18"></kemet-icon>
          <div slot="body">
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </kemet-accordion-panel>
        <kemet-accordion-panel>
          <h3 slot="trigger">Trigger 2</h3>
          <kemet-icon slot="icon" icon="caret-down" size="18"></kemet-icon>
          <div slot="body">
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </kemet-accordion-panel>
        <kemet-accordion-panel>
          <h3 slot="trigger">Trigger 3</h3>
          <kemet-icon slot="icon" icon="caret-down" size="18"></kemet-icon>
          <div slot="body">
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </kemet-accordion-panel>
      </kemet-accordion>
      `,
    },
  },
};
Standard.decorators = [
  story => html`<div style="margin:2rem">${story()}</div>`,
];
