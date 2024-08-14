import { html, render } from 'lit';
import { expect } from '@wdio/globals';
import userEvent from '@testing-library/user-event';

import './kemet-flipcard';
import './kemet-flipcard-trigger';
import '../kemet-button/kemet-button';
import { fireEvent } from '@testing-library/dom';

describe('Flipcard', () => {
  const templates = {
    default: html`
      <kemet-flipcard measure>
        <div slot="front">
          <p>This is the front of the card.</p>
          <kemet-flipcard-trigger>
            <kemet-button>Flip Me</kemet-button>
          </kemet-flipcard-trigger>
        </div>
        <div slot="back">
          <p>This is the back of the card.</p>
          <kemet-flipcard-trigger>
            <kemet-button>Flip Me</kemet-button>
          </kemet-flipcard-trigger>
        </div>
      </kemet-flipcard>
    `,
  };

  it('should flip the card when trigger is activated', async () => {
    render(templates.default, document.body);
    const kemetFlipcard = document.querySelector('kemet-flipcard');
    const kemetFlipcardTrigger = kemetFlipcard.querySelector('kemet-flipcard-trigger');
    const kemetButton = kemetFlipcardTrigger.querySelector('kemet-button');

    await userEvent.click(kemetButton);
    expect(kemetFlipcard.flipped).toBe(true);

    fireEvent.keyPress(kemetButton, { key: 'Enter' });
    expect(kemetFlipcard.flipped).toBe(false);
  });
});
