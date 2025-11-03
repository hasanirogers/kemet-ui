import { html } from 'lit';
import { useGlobals, useEffect } from 'storybook/preview-api';

export const globalFormatting = (StoryFn, context) => {
  const blacklistMargins = ['kemet-alert', 'kemet-combo', 'kemet-drawer', 'kemet-tooltip'];

  // add spacing to those not blacklisted
  if (blacklistMargins.indexOf(context.component) === -1) {
    return html`<div kemet-margin="2xl">${StoryFn()}</div>`;
  }

  // component specific
  if (context.component === 'kemet-combo') {
    return html`<div style="min-height:380px;" kemet-margin="2xl">${StoryFn()}</div>`;
  }

  // default
  return html`<div>${StoryFn()}</div>`;
};

export const handlePolaritySwitching = (StoryFn: any, context) => {
  const [globals, updateGlobals] = useGlobals();

  useEffect(() => {
    document.documentElement.setAttribute('polarity', globals.polarity);

    if (context.viewMode === 'story') {
      if (globals.polarity === 'dark') {
        // updateGlobals({ backgrounds: { value: '#202020', name: 'dark' } });
        document.body.style.backgroundColor = '#222425';
      } else {
        // updateGlobals({ backgrounds: { value: '#f8f8f8', name: 'light' } });
        document.body.style.backgroundColor = '#f8f8f8';
      }
    }
  }, [globals.polarity]);

  return StoryFn();
}
