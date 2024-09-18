import { html } from 'lit';
import { useGlobals, useEffect } from '@storybook/preview-api';

export const globalFormatting = (StoryFn, context) => {
  const blacklistMargins = ['kemet-alert', 'kemet-combo', 'kemet-drawer', 'kemet-tooltip'];

  // add spacing to those not blacklisted
  if (blacklistMargins.indexOf(context.component) === -1) {
    return html`<div kemet-margin="2xl">${StoryFn()}</div>`;
  }hey

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
        updateGlobals({['backgrounds']:
          {value: 'rgb(var(--kemet-color-neutral-900))'}
        });
      } else {
        updateGlobals({['backgrounds']:
          {value: 'rgb(var(--kemet-color-neutral-100))'}
        });
      }
    }
  }, [globals.polarity]);

  return StoryFn();
}
