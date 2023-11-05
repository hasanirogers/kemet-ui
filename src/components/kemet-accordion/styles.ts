import { css } from 'lit';

export const stylesBase =  css`
  :host {
    display: block;
  }
`;

export const stylesPanel = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid rgb(var(--kemet-color-foreground));
  }

  .trigger {
    color: inherit;
    cursor: pointer;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr auto;
    width: 100%;
    text-align: left;
    padding: 0;
    border: none;
    background: none;
  }

  .body {
    overflow: hidden;
    transition: all 300ms ease;
  }

  ::slotted([slot='body']) {
    padding: 1rem 0;
  }
`;
