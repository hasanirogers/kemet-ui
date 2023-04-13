import React from 'react';
import { addons, types } from '@storybook/addons';

import { ADDON_ID, TOOL_ID, PANEL_ID } from '../constants';
import { ThemeSelector } from './components/ThemeSelector';
import { ThemeSelectorPanel } from './components/ThemeSelectorPanel';

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    title: 'Theme',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => <ThemeSelector />,
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Theme',
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active, key }) => <ThemeSelectorPanel active={active} key={key} />,
  });
});
