import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import './kemet-accordion';
import './kemet-accordion-panel';

import '../kemet-tabs/kemet-tabs';
import '../kemet-tabs/kemet-tab';
import '../kemet-tabs/kemet-tab-panel';

import '../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Components / Accordion',
  component: 'kemet-accordion',
};
export default meta;

type Story = StoryObj;

const Template = (args) => html`
  <kemet-accordion ?toggle-panels=${args.togglePanels} kemet-elevation="layer-4">
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 1</h3>
      <kemet-icon slot="icon" icon="chevron-down" size="18"></kemet-icon>
      <div slot="body">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </kemet-accordion-panel>
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 2</h3>
      <kemet-icon slot="icon" icon="chevron-down" size="18"></kemet-icon>
      <div slot="body">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </kemet-accordion-panel>
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 3</h3>
      <kemet-icon slot="icon" icon="chevron-down" size="18"></kemet-icon>
      <div slot="body">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </kemet-accordion-panel>
  </kemet-accordion>
`;

export const Standard: Story = {
  render: args => Template(args),
};

export const TogglePanels: Story = {
  render: args => Template(args),
  args: {
    togglePanels: true,
  },
};
