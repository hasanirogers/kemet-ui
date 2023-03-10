import { css } from 'lit';

export const stylesBase = css`
  :host {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--kemet-button-font-size, inherit);
    color: var(--kemet-button-color, var(--kemet-color-foreground));
    width: var(--kemet-button-width, auto);
    height: var(--kemet-button-height, auto);
    border: var(--kemet-button-border, 0);
    border-radius: var(--kemet-button-border-radius, 0);
    transition: filter var(--kemet-button-transition-speed, 300ms) ease;
    background-color: var(--kemet-button-background-color, var(--kemet-color-background));
  }

  :host(:hover:not([disabled])) {
    filter: brightness(var(--kemet-button-hover-brightness, 1.25));
  }

  :host([disabled]) {
    opacity: var(--kemet-button-disabled-opacity, 0.5);
  }

  .button {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    gap: var(--kemet-button-gap, 0.5rem);
    align-items: center;
    color: inherit;
    font-size: inherit;
    padding: var(--kemet-button-padding, 1rem 1.25rem);
    border: 0;
    background: none;
  }

  :host([disabled]) .button {
    cursor: not-allowed;
  }

  :host([type='text']) {
    --kemet-button-color: var(--kemet-color-text);
    --kemet-button-background-color: none;
  }

  :host([type='text']:hover) {
    text-decoration: var(--kemet-button-hover-decoration, underline);
  }

  :host([type='circle']) {
    --kemet-button-border-radius: 50%;
    --kemet-button-width: var(--kemet-button-circle-size, 50px);
    --kemet-button-height: var(--kemet-button-circle-size, 50px);
  }

  :host([type='rounded']) {
    --kemet-button-border-radius: var(--kemet-button-rounded-amount, 6px);
  }

  :host([type='pill']) {
    --kemet-button-border-radius: 10rem;
  }

  :host([outlined]) {
    --kemet-button-color: var(--kemet-color-background);
    --kemet-button-background-color: transparent;
    --kemet-button-border: var(--kemet-button-border-width, 1px) var(--kemet-button-border-style, solid) var(--kemet-button-border-color, var(--kemet-color-background));
  }
`
