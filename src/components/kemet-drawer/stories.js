import { html } from 'lit';

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
}) => {
  setTimeout(() => {
    const docsStoryWrapper = document.querySelector('.docs-story > div');
    if (docsStoryWrapper) docsStoryWrapper.style.padding = '0';
  }, 100);

  return html`
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
      <nav slot="navigation" kemet-padding="tiny:large">
        <p>Your navigation goes here.</p>
        <kemet-button @click=${event => toggleDrawer(event)}>Toggle the Drawer</kemet-button>
      </nav>
      <section slot="content">
        <div kemet-padding="tiny:large">
          <p>Your content goes here.</p>
          <kemet-button @click=${event => toggleDrawer(event)}>Toggle the Drawer</kemet-button>
        </div>
      </section>
    </kemet-drawer>
  `;
};

const toggleDrawer = (event) => {
  const drawer = event.target.closest('kemet-drawer');
  drawer.opened = !drawer.opened;
};

export const Drawer = Template.bind({});
Drawer.argTypes = {
  width: {
    control: { type: 'text' },
  },
  height: {
    control: { type: 'text' },
  },
  color: {
    control: { type: 'color' },
  },
  backgroundColor: {
    control: { type: 'color' },
  },
  opened: {
    control: { type: 'boolean' },
  },
  effect: {
    control: { type: 'select' },
    options: ['slide', 'reveal', 'push', 'scale'],
  },
  side: {
    control: { type: 'select' },
    options: ['top', 'right', 'bottom', 'left'],
  },
  overlay: {
    control: { type: 'boolean' },
  },
  overlayColor: {
    control: { type: 'color' },
  },
};
Drawer.args = {
  width: '300px',
  height: '100%',
  color: '#fafafa',
  backgroundColor: '#202020',
  opened: false,
  effect: 'slide',
  side: 'left',
  overlay: false,
  overlayColor: 'rgba(0,0,0,0.2)',
};
