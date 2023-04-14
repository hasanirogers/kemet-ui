import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-fab-size: 50px;

    display: inline-block;
    position: relative;
  }

  button {
    color: var(--kemet-fab-color, var(--kemet-color-white));
    font-size: inherit;
    display: inline-flex;
    padding: 0;
    position: relative;
    min-height: var(--kemet-fab-size);
    min-width: var(--kemet-fab-size);
    max-width: var(--kemet-fab-size);
    align-items: center;
    justify-content: flex-start;
    transition: all 0.4s ease;
    border: none;
    background-color: var(--kemet-fab-background-color, var(--kemet-color-primary));
  }

  :host([outlined]) button {
    color: var(--kemet-fab-outlined-color, var(--kemet-color-background));
    border: var(--kemet-fab-outlined-border, 1px solid var(--kemet-color-background));
    background-color: transparent;
  }

  :host([pill]) button {
    border-radius: var(--kemet-fab-pill-radius, 10rem);
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: background-color 0.3s ease-in-out;
    background-color: var(--kemet-fab-background-color, var(--kemet-color-primary));
  }

  :host([pill]) button::before {
    border-radius: var(--kemet-fab-pill-radius, 10rem);
  }

  :host([outlined]) button::before {
    border: var(--kemet-fab-outline-border, 1px solid var(--kemet-color-primary));
    background-color: transparent;
  }

  :host([expanded]) button {
    max-width: 99rem;
    padding: 0 1.35rem 0 0.25rem;
  }

  :host([disabled]) button {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon {
    width: var(--kemet-fab-size);
    height: var(--kemet-fab-size);
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
  }

  .text {
    color: var(--kemet-fab-color, var(--kemet-color-white));
    z-index: 1;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  :host([outlined]) .text {
    color: var(--kemet-fab-outlined-color, var(--kemet-color-background));
  }

  :host([expanded]) .text {
    opacity: 1;
  }
`;
