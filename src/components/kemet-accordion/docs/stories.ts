import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../kemet-accordion';
import '../kemet-accordion-panel';

import '../../kemet-tabs/kemet-tabs';
import '../../kemet-tabs/kemet-tab';
import '../../kemet-tabs/kemet-tab-panel';

import '../../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Components / Accordion',
  component: 'kemet-accordion',
};
export default meta;

type Story = StoryObj;

const Template = args => html`
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const trigger1 = canvas.getByText('Trigger 1');
    const trigger2 = canvas.getByText('Trigger 2');
    const trigger3 = canvas.getByText('Trigger 3');
    const panel1 = trigger1.closest('kemet-accordion-panel');
    const panel2 = trigger2.closest('kemet-accordion-panel');
    const panel3 = trigger3.closest('kemet-accordion-panel');
    const accordion = trigger1.closest('kemet-accordion');

    await step('Expand Trigger 2', async () => {
      await userEvent.click(trigger2);
      await waitFor(() => expect(panel2.opened).toBeTruthy());
    });

    await step('Expand them all', async () => {
      accordion.expandAll();
      await waitFor(() => expect(panel1.opened).toBeTruthy());
      await waitFor(() => expect(panel2.opened).toBeTruthy());
      await waitFor(() => expect(panel3.opened).toBeTruthy());
    });

    await step('Collapse them all', async () => {
      accordion.collapseAll();
      await waitFor(() => expect(panel1.opened).toBeFalsy());
      await waitFor(() => expect(panel2.opened).toBeFalsy());
      await waitFor(() => expect(panel3.opened).toBeFalsy());
    });
  },
};

export const TogglePanels: Story = {
  render: args => Template(args),
  args: {
    togglePanels: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const trigger1 = canvas.getByText('Trigger 1');
    const trigger2 = canvas.getByText('Trigger 2');
    const panel2 = trigger2.closest('kemet-accordion-panel');

    await step('Expand Trigger 2', async () => {
      await userEvent.click(trigger2);
      await waitFor(() => expect(panel2.opened).toBeTruthy());
    });

    await step('Expand Trigger 1', async () => {
      await waitFor(() => expect(panel2.opened).toBeTruthy());
      await userEvent.click(trigger1);
      await waitFor(() => expect(panel2.opened).toBeFalsy());
    });
  },
};
