import React from 'react';
import { KemetTab, KemetTabPanel, KemetTabs } from '../../WebComponents';

const ViewTabs = () => {
  return (
    <content-wrapper>
      <KemetTabs panel-effect="slide" swipe={true} divider={true} tabs-align="center" placement="top" kemet-margin="tiny:largest">
        <KemetTab slot="tab" closable={true}>This is tab 1.</KemetTab>
        <KemetTab slot="tab" closable={true}>This is tab 2.</KemetTab>
        <KemetTab slot="tab" closable={true}>This is tab 3.</KemetTab>

        <KemetTabPanel slot="panel">
          <h3>Panel 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </KemetTabPanel>

        <KemetTabPanel slot="panel">
          <h3>Panel 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </KemetTabPanel>

        <KemetTabPanel slot="panel">
          <h3>Panel 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </KemetTabPanel>
      </KemetTabs>
    </content-wrapper>
  );
}

export default ViewTabs;
