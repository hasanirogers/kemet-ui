import { html } from 'lit';

const NamedTemplate = ({
  selected = 'settings',
  panelEffect = 'slide',
  swipe = true,
  divider = true,
  tabsAlign = 'center',
  hideInk = false,
  placement = 'top',
}) => html`
 <kemet-tabs selected="${selected}" panel-effect=${panelEffect} ?swipe=${swipe} ?divider=${divider} tabs-align=${tabsAlign} ?hide-ink=${hideInk} placement=${placement}>
    <kemet-tab slot="tab" link="account">
      <kemet-icon icon="person-circle"></kemet-icon>&nbsp;Account
    </kemet-tab>
    <kemet-tab slot="tab" link="settings">
      <kemet-icon icon="gear"></kemet-icon>&nbsp;Settings
    </kemet-tab>
    <kemet-tab slot="tab" link="dashboard">
      <kemet-icon icon="columns-gap"></kemet-icon>&nbsp;Dashboard
    </kemet-tab>
    <kemet-tab-panel panel="account" slot="panel">
      <h3 kemet-margin-top="tiny:none">Account</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Tellus integer feugiat scelerisque varius morbi. Non odio euismod lacinia at quis. Dictum sit amet justo donec. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed nisi lacus sed viverra tellus. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Arcu dui vivamus arcu felis bibendum ut tristique. Dictum at tempor commodo ullamcorper a. Nisl nunc mi ipsum faucibus vitae. In eu mi bibendum neque.</p>
    </kemet-tab-panel>
    <kemet-tab-panel panel="settings" slot="panel">
      <h3 kemet-margin-top="tiny:none">Settings</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Tellus integer feugiat scelerisque varius morbi. Non odio euismod lacinia at quis. Dictum sit amet justo donec. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed nisi lacus sed viverra tellus. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Arcu dui vivamus arcu felis bibendum ut tristique. Dictum at tempor commodo ullamcorper a. Nisl nunc mi ipsum faucibus vitae. In eu mi bibendum neque.</p>
    </kemet-tab-panel>
    <kemet-tab-panel panel="dashboard" slot="panel">
      <h3 kemet-margin-top="tiny:none">Dashboard</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Tellus integer feugiat scelerisque varius morbi. Non odio euismod lacinia at quis. Dictum sit amet justo donec. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed nisi lacus sed viverra tellus. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Arcu dui vivamus arcu felis bibendum ut tristique. Dictum at tempor commodo ullamcorper a. Nisl nunc mi ipsum faucibus vitae. In eu mi bibendum neque.</p>
    </kemet-tab-panel>
  </kemet-tabs>
`;
export const SelectByName = NamedTemplate.bind({});
SelectByName.args = {
  selected: 'settings',
  panelEffect: 'slide',
  swipe: true,
  divider: true,
  tabsAlign: 'center',
  hideInk: false,
  placement: 'top',
};
SelectByName.argTypes = {
  panelEffect: {
    control: { type: 'select' },
    options: ['none', 'slide', 'fade'],
  },
  swipe: {
    control: { type: 'boolean' },
  },
  divider: {
    control: { type: 'boolean' },
  },
  tabsAlign: {
    control: { type: 'select' },
    options: ['center', 'between', 'around', 'evenly', 'start', 'end'],
  },
  hideInk: {
    control: { type: 'boolean' },
  },
  placement: {
    control: { type: 'select' },
    options: ['top', 'right', 'bottom', 'left'],
  },
};

const IndexTemplate = ({
  panelEffect = 'slide',
  swipe = true,
  divider = true,
  tabsAlign = 'center',
  hideInk = false,
  placement = 'top',
  numOfTabs = 5,
  closable = true,
}) => {
  const tabs = [];
  const panels = [];

  for (let i = 0; i < numOfTabs; i += 1) {
    tabs.push(html`<kemet-tab slot="tab" ?closable=${closable}>This is tab ${i + 1}.</kemet-tab>`);
  }

  for (let i = 0; i < numOfTabs; i += 1) {
    panels.push(html`
      <kemet-tab-panel slot="panel">
        <h3>Panel ${i + 1}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </kemet-tab-panel>
    `);
  }

  return html`
    <kemet-tabs panel-effect=${panelEffect} ?swipe=${swipe} ?divider=${divider} tabs-align=${tabsAlign} ?hide-ink=${hideInk} placement=${placement}>
      ${tabs}
      ${panels}
    </kemet-tabs>
  `;
};
export const SelectByIndex = IndexTemplate.bind({});
SelectByIndex.args = {
  numOfTabs: 5,
  closable: true,
  panelEffect: 'slide',
  swipe: true,
  divider: true,
  tabsAlign: 'center',
  hideInk: false,
  placement: 'top',
};
SelectByIndex.argTypes = {
  numOfTabs: {
    control: { type: 'number' },
  },
  closable: {
    control: { type: 'boolean' },
  },
  panelEffect: {
    control: { type: 'select' },
    options: ['none', 'slide', 'fade'],
  },
  swipe: {
    control: { type: 'boolean' },
  },
  divider: {
    control: { type: 'boolean' },
  },
  tabsAlign: {
    control: { type: 'select' },
    options: ['center', 'between', 'around', 'evenly', 'start', 'end'],
  },
  hideInk: {
    control: { type: 'boolean' },
  },
  placement: {
    control: { type: 'select' },
    options: ['top', 'right', 'bottom', 'left'],
  },
};
