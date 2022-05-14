import { html } from 'lit-html';

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
Standard.argTypes = {
  transitionSpeed: {
    control: { type: 'text' },
  },
  togglePanels: {
    control: { type: 'boolean' },
  },
};
Standard.args = {
  transitionSpeed: '300ms',
  togglePanels: false,
};
