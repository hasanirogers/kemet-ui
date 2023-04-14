import React from 'react';
import { KemetButton } from '../../WebComponents';

const SiteNav = () => {
  return (
    <aside kemet-layout="flexcolumn" kemet-gutters="tiny:normal" kemet-padding="tiny:small">
      <a href="/"><img src="https://kemet.dev/assets/images/storybook.png" alt="Kemet UI" width="134" height="32" /></a>
      <br />
      <h2 kemet-margin="tiny:none">Components</h2>
      <KemetButton link="/accordion">Accordion</KemetButton>
      <KemetButton link="/alert">Alert</KemetButton>
      <KemetButton link="/avatar">Avatar</KemetButton>
      <KemetButton link="/badge">Badge</KemetButton>
      <KemetButton link="/button">Button</KemetButton>
      <KemetButton link="/card">Card</KemetButton>
      <KemetButton link="/carousel">Carousel</KemetButton>
      <KemetButton link="/checkbox">Checkbox</KemetButton>
      <KemetButton link="/combo">Combo</KemetButton>
      <KemetButton link="/count">Count</KemetButton>
      <KemetButton link="/draggable">Draggable</KemetButton>
      <KemetButton link="/drawer">Drawer</KemetButton>
      <KemetButton link="/fab">FAB</KemetButton>
      <KemetButton link="/field">Field</KemetButton>
      <KemetButton link="/flipcard">Flipcard</KemetButton>
      <KemetButton link="/icon">Icon</KemetButton>
      <KemetButton link="/input">Input</KemetButton>
      <KemetButton link="/modal">Modal</KemetButton>
      <KemetButton link="/password">Password</KemetButton>
      <KemetButton link="/popper">Popper</KemetButton>
      <KemetButton link="/radio">Radio</KemetButton>
      <KemetButton link="/rotator">Rotator</KemetButton>
      <KemetButton link="/scrolllink">Scroll Link</KemetButton>
      <KemetButton link="/scrollnav">Scroll Nav</KemetButton>
      <KemetButton link="/scrollsnap">Scroll Snap</KemetButton>
      <KemetButton link="/select">Select</KemetButton>
      <KemetButton link="/sortable">Sortable</KemetButton>
      <KemetButton link="/svgs">SVGs</KemetButton>
      <KemetButton link="/tabs">Tabs</KemetButton>
      <KemetButton link="/textarea">Textarea</KemetButton>
      <KemetButton link="/toggle">Toggle</KemetButton>
      <KemetButton link="/tooltip">Tooltip</KemetButton>
      <KemetButton link="/tracker">Tracker</KemetButton>
      <KemetButton link="/upload">Upload</KemetButton>
    </aside>
  );
}

export default SiteNav;
