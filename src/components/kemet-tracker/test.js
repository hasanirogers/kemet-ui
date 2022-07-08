import { html, fixture, expect } from '@open-wc/testing';

import './kemet-tracker.js';
import './kemet-tracker-step.js';

const template = () => html`
  <kemet-tracker>
    <kemet-tracker-step completed>Step 1</kemet-tracker-step>
    <kemet-tracker-step current>Step 2</kemet-tracker-step>
    <kemet-tracker-step>Step 3</kemet-tracker-step>
  </kemet-tracker>
`;

describe('KemetTracker', () => {
  it('passes the a11y audit', async () => {
    const element = await fixture(template());
    await expect(element).shadowDom.to.be.accessible();
  });

  it('has the correct default props', async () => {
    const element = await fixture(template());

    expect(element.breakpoint).to.equal('767px');

    element.querySelectorAll('kemet-tracker-step').forEach((step) => {
      expect(step.completedSize).to.equal(16);
    });
  });
});
