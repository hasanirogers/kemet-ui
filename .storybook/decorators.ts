import { html } from 'lit';
import { useEffect, useGlobals } from '@storybook/addons';

export const globalFormatting = (StoryFn, context) => {
  const blacklistMargins = ['kemet-alert', 'kemet-combo', 'kemet-drawer', 'kemet-tooltip'];

  // add spacing to those not blacklisted
  if (blacklistMargins.indexOf(context.component) === -1) {
    return html`<div kemet-margin="tiny:normal">${StoryFn()}</div>`;
  }

  // component specific
  if (context.component === 'kemet-combo') {
    return html`<div style="min-height:380px;" kemet-margin="tiny:normal">${StoryFn()}</div>`;
  }

  // default
  return html`<div>${StoryFn()}</div>`;
};

export const handleThemeSwitching = (StoryFn: any, context) => {
  const [{theme}, updateGlobals] = useGlobals();

  useEffect(() => {
    if (context.viewMode === 'story') {
      if (theme === 'light') {
        updateGlobals({ backgrounds: { name: 'Gray 1', value: '#eff2f1' } });
      }

      if (theme === 'dark') {
        updateGlobals({ backgrounds: { name: 'Gray 9', value: '#262626' } });
      }

      document.documentElement.setAttribute('theme', theme);
    } else {
      document.documentElement.setAttribute('theme', 'light');
    }
  }, [theme]);

  return StoryFn();
}
