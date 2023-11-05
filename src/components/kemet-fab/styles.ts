import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-fab-size: 50px;
    --kemet-fab-color: rgb(var(--kemet-color-white));
    --kemet-fab-background-color: rgb(var(--kemet-color-primary));
    --kemet-fab-outlined-color: rgb(var(--kemet-color-foreground));
    --kemet-fab-outlined-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-fab-pill-radius: 10rem;
    --kemet-fab-background-color: rgb(var(--kemet-color-primary));
    --kemet-fab-outline-border: 1px solid rgb(var(--kemet-color-primary));
    --kemet-fab-color: rgb(var(--kemet-color-white));
    --kemet-fab-outlined-color: rgb(var(--kemet-color-foreground));

    display: inline-block;
    position: relative;
  }

  button {
    color: var(--kemet-fab-color);
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
    background-color: var(--kemet-fab-background-color);
  }

  :host([outlined]) button {
    color: var(--kemet-fab-outlined-color);
    border: var(--kemet-fab-outlined-border);
    background-color: transparent;
  }

  :host([pill]) button {
    border-radius: var(--kemet-fab-pill-radius);
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
    background-color: var(--kemet-fab-background-color);
  }

  :host([pill]) button::before {
    border-radius: var(--kemet-fab-pill-radius);
  }

  :host([outlined]) button::before {
    border: var(--kemet-fab-outline-border);
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
    color: var(--kemet-fab-color);
    z-index: 1;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  :host([outlined]) .text {
    color: var(--kemet-fab-outlined-color);
  }

  :host([expanded]) .text {
    opacity: 1;
  }
`;
