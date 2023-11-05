import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../kemet-tabs';
import '../kemet-tab';
import '../kemet-tab-panel';

import '../../kemet-icon/kemet-icon';

const meta: Meta = {
  title: 'Components / Tabs',
  component: 'kemet-tabs',
  argTypes: {
    panelEffect: {
      control: { type: 'select' },
      options: ['none', 'slide', 'fade'],
    },
    tabsAlign: {
      control: { type: 'select' },
      options: ['center', 'between', 'around', 'evenly', 'start', 'end'],
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
  }
};
export default meta;

type Story = StoryObj;

const NamedTemplate = (args) => html`
  <kemet-tabs selected="${ifDefined(args.selected)}" panel-effect=${ifDefined(args.panelEffect)} ?swipe=${args.swipe} ?divider=${args.divider} tabs-align=${ifDefined(args.tabsAlign)} ?hide-ink=${args.hideInk} placement=${ifDefined(args.placement)} measure-height-offset=${ifDefined(args.measureHeightOffset)}>
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
      <h3 kemet-margin-top="none">Account</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </kemet-tab-panel>
    <kemet-tab-panel panel="settings" slot="panel">
      <h3 kemet-margin-top="none">Settings</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </kemet-tab-panel>
    <kemet-tab-panel panel="dashboard" slot="panel">
      <h3 kemet-margin-top="none">Dashboard</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Tellus integer feugiat scelerisque varius morbi. Non odio euismod lacinia at quis. Dictum sit amet justo donec. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed nisi lacus sed viverra tellus. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Arcu dui vivamus arcu felis bibendum ut tristique. Dictum at tempor commodo ullamcorper a. Nisl nunc mi ipsum faucibus vitae. In eu mi bibendum neque.</p>
    </kemet-tab-panel>
  </kemet-tabs>
  <hr />
`;

const IndexTemplate = (args) => {
  const tabs = [];
  const panels = [];

  for (let i = 0; i < args.numOfTabs; i += 1) {
    tabs.push(html`<kemet-tab slot="tab" ?closable=${args.closable}>This is tab ${i + 1}.</kemet-tab>`);
  }

  for (let i = 0; i < args.numOfTabs; i += 1) {
    panels.push(html`
      <kemet-tab-panel slot="panel">
        <h3>Panel ${i + 1}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </kemet-tab-panel>
    `);
  }

  return html`
    <kemet-tabs panel-effect=${ifDefined(args.panelEffect)} ?swipe=${args.swipe} ?divider=${args.divider} tabs-align=${ifDefined(args.tabsAlign)} ?hide-ink=${args.hideInk} placement=${ifDefined(args.placement)} measure-height-offset=${ifDefined(args.measureHeightOffset)}>
      ${tabs}
      ${panels}
    </kemet-tabs>
  `;
};

export const SelectByName: Story = {
  render: (args: any) => NamedTemplate(args),
  args: {
    selected: 'settings',
  },
};

export const SelectByIndex: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 5,
  },
};

export const Closable: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 5,
    closable: true,
  },
};

export const Fade: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 5,
    panelEffect: 'fade',
  },
};

export const Slide: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 5,
    panelEffect: 'slide',
  },
};

export const Divider: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 5,
    divider: true,
  },
};

export const NoInk: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 5,
    hideInk: true,
  },
};

export const Right: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 3,
    placement: 'right',
  },
};

export const Bottom: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 3,
    placement: 'bottom',
  },
};

export const Left: Story = {
  render: (args: any) => IndexTemplate(args),
  args: {
    numOfTabs: 3,
    placement: 'left',
  },
};
