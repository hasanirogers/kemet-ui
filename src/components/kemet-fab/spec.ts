import { html, render } from 'lit';
import { expect } from '@wdio/globals';

import './kemet-fab';
import '../kemet-icon/kemet-icon';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';

describe('FAB', () => {
  const templates = {
    default: html`
      <kemet-fab expand-point="100" collapse-point="200">
        <kemet-icon slot="icon" icon="gear"></kemet-icon>
        Label Here
      </kemet-fab>
    `,
  };

  it('should expand and close on mouse over', async () => {
    render(templates.default, document.body);
    const kemetFab = document.querySelector('kemet-fab');
    await userEvent.hover(kemetFab);
    expect(kemetFab.expanded).toBe(true);
    await userEvent.unhover(kemetFab);
    expect(kemetFab.expanded).toBe(false);
  });

  it('should auto expand when document is scrolled', async () => {
    render(templates.default, document.body);
    const kemetFab = document.querySelector('kemet-fab');

    await fireEvent.scroll(window, { target: { scrollY: 101 } });
    expect(kemetFab.expanded).toBe(true);
  });

  it('should auto collapse past collapse point', async () => {
    render(templates.default, document.body);
    const kemetFab = document.querySelector('kemet-fab');

    await fireEvent.scroll(window, { target: { scrollY: 300 } });
    expect(kemetFab.expanded).toBe(false);
  });

  it('should not expand if expand point has not been reached', async () => {
    render(templates.default, document.body);
    const kemetFab = document.querySelector('kemet-fab');
    await fireEvent.scroll(window, { target: { scrollY: 9 } });
    expect(kemetFab.expanded).toBe(false);
  });
});
