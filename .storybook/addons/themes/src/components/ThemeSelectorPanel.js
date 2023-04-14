import React from 'react';
import { useGlobals } from '@storybook/api';
import { AddonPanel, Button } from "@storybook/components";

export const ThemeSelectorPanel = (props) => {
  const [{ activeTheme }, updateGlobals] = useGlobals();

  const setLight = () => {
    updateGlobals({ activeTheme: 'light' });
  }

  const setDark = () => {
    updateGlobals({ activeTheme: 'dark' });
  }

  return (
    <AddonPanel {...props}>
      <section style={{display: 'flex', gap: '1rem', margin: '1rem'}}>
        <Button secondary outline={activeTheme !== 'light'} onClick={setLight}>Light</Button>
        <Button secondary outline={activeTheme !== 'dark'} onClick={setDark}>Dark</Button>
      </section>
    </AddonPanel>
  );
};
