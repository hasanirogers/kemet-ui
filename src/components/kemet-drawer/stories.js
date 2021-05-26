import { html } from 'lit-html';
import dedent from 'ts-dedent';

import './kemet-drawer.js';

export default {
  title: 'Kemet Drawer',
  component: 'kemet-drawer',
};

const Template = ({
  width = '300px',
  height = '100%',
  color = '#fafafa',
  backgroundColor = '#202020',
  opened = false,
  effect = 'slide',
  side = 'left',
  overlay = false,
  overlayColor = 'rgba(0,0,0,0.2)',
}) => html`
  <style>
    kemet-drawer {
      --kemet-drawer-width: ${width};
      --kemet-drawer-height: ${height};
      --kemet-drawer-color: ${color};
      --kemet-drawer-background-color: ${backgroundColor};
      --kemet-drawer-overlay-color: ${overlayColor};
    }
  </style>
  <kemet-drawer ?opened=${opened} effect="${effect}" side="${side}" ?overlay=${overlay}>
    <nav slot="navigation">
      <p>Your navigation goes here.</p>
      <button @click=${event => toggleDrawer(event)}>Toggle the Drawer</button>
    </nav>
    <section slot="content">
      <p>Your content goes here.</p>
      <button @click=${event => toggleDrawer(event)}>Toggle the Drawer</button>
    </section>
  </kemet-drawer>
`;

const toggleDrawer = (event) => {
  const drawer = event.target.closest('kemet-drawer');
  drawer.opened = !drawer.opened;
};

export const Drawer = Template.bind({});
Drawer.parameters = {
  docs: {
    source: {
      code: dedent`
        <kemet-drawer>
          <nav slot="navigation">Your navigation goes here.</nav>
          <section slot="content">Your content goes here.</section>
        </kemet-drawer>
      `,
    },
  },
};
