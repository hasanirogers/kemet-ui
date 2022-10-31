import { css } from 'lit';

export const stylesCarousel = css`
  :host,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: center;
    width: var(--kemet-carousel-width, 100%);
    height: var(--kemet-carousel-height, auto);
    overflow: visible;
  }

  :host([arrows]) {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }

  .toolbar {
    display: flex;
    gap: var(--kemet-carousel-toolbar-gap, 1rem);
    align-items: center;
    justify-content: var(--kemet-carousel-toolbar-justify-content, center);
    line-height: 1;
    padding: var(--kemet-carousel-toolbar-padding, 1rem);
  }

  :host([inner]) .toolbar {
    width: var(--kemet-carousel-toolbar-inner-width, 100%);
    position: absolute;
    bottom: var(--kemet-carousel-toolbar-inner-bottom, 0);
    top: var(--kemet-carousel-toolbar-inner-top, auto);
    color: var(--kemet-carousel-toolbar-inner-color, var(--kemet-color-white));
    background-color: var(--kemet-carousel-toolbar-inner-background-color, rgba(0, 0, 0, 0.4));
  }

  .slides {
    overflow: hidden;
    position: relative;
    padding: 1rem 0;
    border: var(--kemet-carousel-slides-border, 1px solid var(--kemet-color-gray1));
  }

  .slider {
    display: flex;
    flex-wrap: nowrap;
    transition: transform var(--kemet-carousel-transition-speed, 300ms) ease;
  }

  ::slotted([slot='next']),
  ::slotted([slot='prev']) {
    opacity: var(--kemet-carousel-arrows-opacity, 0.25);
    transition: opacity var(--kemet-carousel-arrows-transition-speed, 300ms) ease-in-out;
  }

  :host(:hover) ::slotted([slot='next']),
  :host(:hover) ::slotted([slot='prev']) {
    opacity: var(--kemet-carousel-arrows-opacity-hover, 1);
  }
`;
