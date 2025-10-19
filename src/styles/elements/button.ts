import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-button-font-size: inherit;
    --kemet-button-color: rgb(var(--kemet-color-background));
    --kemet-button-width: auto;
    --kemet-button-height: auto;
    --kemet-button-border: 0;
    --kemet-button-border-radius: 0;
    --kemet-button-transition-speed: 300ms;
    --kemet-button-background-color: rgb(var(--kemet-color-foreground));
    --kemet-button-hover-brightness: 1.25;
    --kemet-button-disabled-opacity: 0.5;
    --kemet-button-gap: 0.5rem;
    --kemet-button-padding: 1rem 1.25rem;
    --kemet-button-hover-decoration: underline;
    --kemet-button-circle-size: 50px;
    --kemet-button-rounded-amount: 6px;
    --kemet-button-border-width: 1.5px;
    --kemet-button-border-style: solid;
    --kemet-button-border-color: rgb(var(--kemet-color-foreground));

    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--kemet-button-font-size);
    color: var(--kemet-button-color);
    width: var(--kemet-button-width);
    height: var(--kemet-button-height);
    border: var(--kemet-button-border);
    border-radius: var(--kemet-button-border-radius);
    transition: filter var(--kemet-button-transition-speed) ease;
    background-color: var(--kemet-button-background-color);
  }

  :host(:hover:not([disabled])) {
    filter: brightness(var(--kemet-button-hover-brightness));
  }

  :host([disabled]) {
    opacity: var(--kemet-button-disabled-opacity);
  }

  .button {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    gap: var(--kemet-button-gap);
    align-items: center;
    justify-content: center;
    color: inherit;
    font-size: inherit;
    width: 100%;
    padding: var(--kemet-button-padding);
    border: 0;
    background: none;
  }

  :host([disabled]) .button {
    cursor: not-allowed;
  }

  :host([variant='text']) {
    --kemet-button-color: rgb(var(--kemet-color-text));
    --kemet-button-background-color: none;
  }

  :host([variant='text']:hover) {
    text-decoration: var(--kemet-button-hover-decoration);
  }

  :host([variant='circle']) {
    --kemet-button-border-radius: var(--kemet-border-radius-circle);
    --kemet-button-width: var(--kemet-button-circle-size);
    --kemet-button-height: var(--kemet-button-circle-size);
  }

  :host([variant='rounded']) {
    --kemet-button-border-radius: var(--kemet-button-rounded-amount);
  }

  :host([variant='pill']) {
    --kemet-button-border-radius: var(--kemet-border-radius-pill);
  }

  :host([outlined]) {
    --kemet-button-color: rgb(var(--kemet-color-foreground));
    --kemet-button-background-color: transparent;
    --kemet-button-border: var(--kemet-button-border-width) var(--kemet-button-border-style) var(--kemet-button-border-color);
  }

  :host([icon-left]) {
    --kemet-button-padding: 1rem 1.25rem 1rem .75rem;
  }

  :host([icon-right]) {
    --kemet-button-padding:  1rem .75rem 1rem 1.25rem;
  }
`
