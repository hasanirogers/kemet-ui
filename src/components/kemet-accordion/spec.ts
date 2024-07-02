import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';
import { fireEvent, getByText, waitFor } from '@testing-library/dom';

import './kemet-accordion';
import './kemet-accordion-panel';

describe('Accordion', () => {
  const templates = {
    default: html`
      <kemet-accordion toggle-panels>
        <kemet-accordion-panel>
          <h3 slot="trigger">Trigger 1</h3>
          <svg slot="icon" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
          </svg>
          <svg slot="icon-opened" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"></path>
          </svg>
          <div slot="body">
            <p><a href="https://google.com">Google</a>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </kemet-accordion-panel>
        <kemet-accordion-panel>
          <h3 slot="trigger">Trigger 2</h3>
          <svg slot="icon" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
          </svg>
          <svg slot="icon-opened" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"></path>
          </svg>
          <div slot="body">
            <p><a href="https://google.com">Google</a> The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </kemet-accordion-panel>
        <kemet-accordion-panel>
          <h3 slot="trigger">Trigger 3</h3>
          <svg slot="icon" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
          </svg>
          <svg slot="icon-opened" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"></path>
          </svg>
          <div slot="body">
            <p><a href="https://google.com">Google</a> The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </kemet-accordion-panel>
      </kemet-accordion>
    `,
  };

  it('opens a closed panel', async () => {
    render(templates.default, document.body);
    const trigger1 = getByText(document.documentElement, 'Trigger 1');
    const kemetPanel = trigger1.closest('kemet-accordion-panel');
    await userEvent.click(trigger1);
    expect(kemetPanel.opened).toBe(true);
  });

  it('toggles a panel correctly', async () => {
    render(templates.default, document.body);
    const kemetPanel = document.querySelector('kemet-accordion-panel');

    await waitFor(() => {
      kemetPanel.toggle();
      expect(kemetPanel.hasAttribute('opened')).toBe(false);
    });
  });

  it('open a panel with the enter key', async () => {
    render(templates.default, document.body);
    const trigger1 = getByText(document.documentElement, 'Trigger 1');
    const kemetPanel = trigger1.closest('kemet-accordion-panel');
    trigger1.focus();
    fireEvent.keyDown(trigger1, { key: 'Enter' });
    expect(kemetPanel.opened).toBe(true);
  });

  it('should toggle panels', async () => {
    render(templates.default, document.body);

    const trigger1 = getByText(document.documentElement, 'Trigger 1');
    const trigger2 = getByText(document.documentElement, 'Trigger 2');
    const panel1 = trigger1.closest('kemet-accordion-panel');

    await waitFor(async () => {
      await userEvent.click(trigger1);
      expect(panel1.opened).toBe(true);
      await userEvent.click(trigger2);
      expect(panel1.opened).toBe(false);
    });
  });

  it('should expand and collapse all panels', () => {
    render(templates.default, document.body);

    const accordion = document.querySelector('kemet-accordion');
    const panel1 = getByText(document.documentElement, 'Trigger 1').closest('kemet-accordion-panel');
    const panel2 = getByText(document.documentElement, 'Trigger 2').closest('kemet-accordion-panel');
    const panel3 = getByText(document.documentElement, 'Trigger 3').closest('kemet-accordion-panel');

    accordion.expandAll();

    expect(panel1.opened).toBe(true);
    expect(panel2.opened).toBe(true);
    expect(panel3.opened).toBe(true);

    accordion.collapseAll();

    expect(panel1.opened).toBe(false);
    expect(panel2.opened).toBe(false);
    expect(panel3.opened).toBe(false);
  });

  it('should handle keyboard navigation', async () => {
    render(templates.default, document.body);

    const accordion = document.querySelector('kemet-accordion');
    const trigger1 = getByText(document.documentElement, 'Trigger 1');

    fireEvent.keyDown(trigger1, { key: 'ArrowDown' });
    expect(accordion.currentPanel).toBe(2);
    fireEvent.keyDown(trigger1, { key: 'ArrowUp' });
    expect(accordion.currentPanel).toBe(1);
    fireEvent.keyDown(trigger1, { key: 'ArrowRight' });
    expect(accordion.currentPanel).toBe(2);
    fireEvent.keyDown(trigger1, { key: 'ArrowLeft' });
    expect(accordion.currentPanel).toBe(1);
    fireEvent.keyDown(trigger1, { key: 'Home' });
    expect(accordion.currentPanel).toBe(0);
    fireEvent.keyDown(trigger1, { key: 'End' });
    expect(accordion.currentPanel).toBe(2);
  });

  it('should loop back to first panel when end of panels is reached', () => {
    render(templates.default, document.body);
    const accordion = document.querySelector('kemet-accordion');
    const trigger1 = getByText(document.documentElement, 'Trigger 1');
    fireEvent.keyDown(trigger1, { key: 'ArrowDown' });
    expect(accordion.currentPanel).toBe(0);
  });

  it('should go to last panel when up is pressed on first panel', () => {
    render(templates.default, document.body);
    const accordion = document.querySelector('kemet-accordion');
    const trigger1 = getByText(document.documentElement, 'Trigger 1');
    fireEvent.keyDown(trigger1, { key: 'ArrowUp' });
    expect(accordion.currentPanel).toBe(2);
  });
});
