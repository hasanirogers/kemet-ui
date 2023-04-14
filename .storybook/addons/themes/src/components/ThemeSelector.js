import React from 'react';
import { useGlobals } from '@storybook/api';
import { Icons, IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { TOOL_ID } from '../constants';

export const ThemeSelector = () => {
  const [{ activeTheme }, updateGlobals] = useGlobals();

  // if (!activeTheme) {
  //   updateGlobals({ activeTheme: 'light' });
  // }

  const displayLinks = (closeLink) => {
    const links = [
      {
        id: 'light',
        title: 'Light',
        onClick: () => {
          updateGlobals({ activeTheme: 'light' });
          closeLink();
        },
        value: null,
        right: undefined,
        active: activeTheme === 'light',
      },
      {
        id: 'dark',
        title: 'Dark',
        onClick: () => {
          updateGlobals({ activeTheme: 'dark' });
          closeLink();
        },
        value: null,
        right: undefined,
        active: activeTheme === 'dark',
      }
    ];

    return links;
  };

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={({ onHide }) => {
        return (
          <TooltipLinkList links={displayLinks(onHide)} />
        );
      }}
    >
      <IconButton
        key={{ TOOL_ID }}
        title="Change Theme"
        active={false}
      >
        <Icons icon="mirror" />&nbsp;{activeTheme}
      </IconButton>
    </WithTooltip>
  )
};
