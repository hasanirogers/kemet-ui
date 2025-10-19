import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import {
 userEvent, waitFor, within, expect,
} from 'storybook/test';

import '../../elements/accordion';
import '../../elements/accordion-panel';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';

import '../../elements/icon-bootstrap';
import KemetAccordionPanel from '../../elements/accordion-panel';
import KemetAccordion from '../../elements/accordion';

const meta: Meta = {
  title: 'Organization / Accordion',
  component: 'kemet-accordion',
};
export default meta;

type Story = StoryObj;

const Template = args => html`
  <kemet-accordion ?toggle-panels=${args.togglePanels} kemet-elevation="layer-4">
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 1</h3>
      <kemet-icon-bootstrap slot="icon" icon="chevron-down" size="18"></kemet-icon-bootstrap>
      <div slot="body">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </kemet-accordion-panel>
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 2</h3>
      <kemet-icon-bootstrap slot="icon" icon="chevron-down" size="18"></kemet-icon-bootstrap>
      <div slot="body">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </div>
    </kemet-accordion-panel>
    <kemet-accordion-panel>
      <h3 slot="trigger">Trigger 3</h3>
      <kemet-icon-bootstrap slot="icon" icon="chevron-down" size="18"></kemet-icon-bootstrap>
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
    const panel1 = trigger1.closest('kemet-accordion-panel') as KemetAccordionPanel;
    const panel2 = trigger2.closest('kemet-accordion-panel') as KemetAccordionPanel;
    const panel3 = trigger3.closest('kemet-accordion-panel') as KemetAccordionPanel;
    const accordion = trigger1.closest('kemet-accordion') as KemetAccordion;

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
    const panel2 = trigger2.closest('kemet-accordion-panel') as KemetAccordionPanel;

    await step('Expand Trigger 2', async () => {
      await userEvent.click(trigger2);
      await waitFor(() => expect(panel2.opened).toBeTruthy());
    });

    await step('Expand Trigger 1', async () => {
      await waitFor(() => expect(panel2.opened).toBeTruthy());
      await userEvent.click(trigger1);
      await waitFor(() => expect(panel2.opened).toBeFalsy());
    });

    await step('Keyboard', async () => {
      // await userEvent.click(trigger1);
      // await userEvent.tab();

      trigger2.focus();
      await userEvent.keyboard('{ArrowDown}{Enter}');

      // console.log(document.activeElement);
      // fireEvent.keyDown(trigger1, { key: 'ArrowDown' });
      // fireEvent.keyDown(trigger2, { key: 'Enter'});
      // console.log(panel2.opened);
    });
  },
};
