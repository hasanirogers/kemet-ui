import { html } from 'lit';
import './kemet-drawer.js';

export default {
  title: 'Kemet Drawer',
  component: 'kemet-drawer',
};

export const slide = () => {
  const toggle = (event) => {
    event.preventDefault();

    const drawer = document.querySelector('[effect="slide"]');
    drawer.toggle();
  };

  return html`
    <kemet-drawer effect="slide">
      <nav slot="navigation">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
      <section slot="content">
        <a href="#" @click=${event => toggle(event)}>Toggle Drawer</a>
      </section>
    </kemet-drawer>
  `;
};

export const reveal = () => {
  const toggle = (event) => {
    event.preventDefault();

    const drawer = document.querySelector('[effect="reveal"]');
    drawer.toggle();
  };

  return html`
    <kemet-drawer effect="reveal">
      <nav slot="navigation">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
      <section slot="content">
        <a href="#" @click=${event => toggle(event)}>Toggle Drawer</a>
      </section>
    </kemet-drawer>
  `;
};

export const push = () => {
  const toggle = (event) => {
    event.preventDefault();

    const drawer = document.querySelector('[effect="push"]');
    drawer.toggle();
  };

  return html`
    <kemet-drawer effect="push">
      <nav slot="navigation">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
      <section slot="content">
        <a href="#" @click=${event => toggle(event)}>Toggle Drawer</a>
      </section>
    </kemet-drawer>
  `;
};

export const scale = () => {
  const toggle = (event) => {
    event.preventDefault();

    const drawer = document.querySelector('[effect="scale"]');
    drawer.toggle();
  };

  return html`
    <kemet-drawer effect="scale">
      <nav slot="navigation">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
      <section slot="content">
        <a href="#" @click=${event => toggle(event)}>Toggle Drawer</a>
      </section>
    </kemet-drawer>
  `;
};
