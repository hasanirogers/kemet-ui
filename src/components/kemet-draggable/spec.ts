import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import { waitFor } from '@testing-library/dom';

import './kemet-draggable';
import drag from '../../utilities/misc/drag';

describe('Draggable', () => {
  const templates = {
    default: html`
      <kemet-draggable measure memory="memory">
        <kemet-button>Drag Me!</kemet-button>
      </kemet-draggable>
    `,
  };

  it('should drag the component', async () => {
    render(templates.default, document.body);
    const kemetDraggable = document.querySelector('kemet-draggable');
    const initialX = kemetDraggable.left;
    const initialY = kemetDraggable.top;

    await waitFor(async () => {
      const draggable = kemetDraggable.shadowRoot.querySelector('#draggable');

      await drag(draggable, {
        to: { x: 0, y: 0 },
        delta: { x: 100, y: 100 },
      });

      expect(kemetDraggable.style.left).not.toBe(initialX);
      expect(kemetDraggable.style.top).not.toBe(initialY);
    });
  });
});
