import { css } from 'lit';

export const stylesCarousel = css`
  :host,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-carousel-width: 100%;
    --kemet-carousel-height: auto;
    --kemet-carousel-toolbar-gap: 1rem;
    --kemet-carousel-toolbar-justify-content: center;
    --kemet-carousel-toolbar-padding: 1rem;
    --kemet-carousel-toolbar-inner-width: 100%;
    --kemet-carousel-toolbar-inner-bottom: 0;
    --kemet-carousel-toolbar-inner-top: auto;
    --kemet-carousel-toolbar-inner-color: rgb(var(--kemet-color-white));
    --kemet-carousel-toolbar-inner-background-color: rgb(var(--kemet-color-black) / 40%);
    --kemet-carousel-slides-border: 1px solid rgb(var(--kemet-color-gray-50));
    --kemet-carousel-transition-speed: 300ms;
    --kemet-carousel-arrows-opacity: 0.25;
    --kemet-carousel-arrows-transition-speed: 300ms;
    --kemet-carousel-arrows-opacity-hover: 1;

    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: center;
    width: var(--kemet-carousel-width);
    height: var(--kemet-carousel-height);
    overflow: visible;
  }

  :host([arrows]) {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }

  .toolbar {
    display: flex;
    gap: var(--kemet-carousel-toolbar-gap);
    align-items: center;
    justify-content: var(--kemet-carousel-toolbar-justify-content);
    line-height: 1;
    padding: var(--kemet-carousel-toolbar-padding);
  }

  :host([inner]) .toolbar {
    width: var(--kemet-carousel-toolbar-inner-width);
    position: absolute;
    bottom: var(--kemet-carousel-toolbar-inner-bottom);
    top: var(--kemet-carousel-toolbar-inner-top);
    color: var(--kemet-carousel-toolbar-inner-color);
    background-color: var(--kemet-carousel-toolbar-inner-background-color);
  }

  .slides {
    overflow: hidden;
    position: relative;
    padding: 1rem 0;
    border: var(--kemet-carousel-slides-border);
  }

  .slider {
    display: flex;
    flex-wrap: nowrap;
    transition: transform var(--kemet-carousel-transition-speed) ease;
  }

  ::slotted([slot='next']),
  ::slotted([slot='prev']) {
    opacity: var(--kemet-carousel-arrows-opacity);
    transition: opacity var(--kemet-carousel-arrows-transition-speed) ease-in-out;
  }

  :host(:hover) ::slotted([slot='next']),
  :host(:hover) ::slotted([slot='prev']) {
    opacity: var(--kemet-carousel-arrows-opacity-hover);
  }
`;
