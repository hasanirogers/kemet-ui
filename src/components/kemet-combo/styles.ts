import { css } from 'lit';

export const stylesBase = css`
  :host {
    opacity: 0;
    width: var(--kemet-combo-width, calc(100% - 2px));
    margin: var(--kemet-combo-margin, 1rem auto);
    pointer-events: none;
    display: block;
    position: relative;
    transition: opacity 0.3s ease-in-out;
  }

  :host([show]) {
    opacity: 1;
    pointer-events: auto;
  }

  ul {
    width: 100%;
    max-height: var(--kemet-combo-max-height, calc(5 * 3rem));
    position: absolute;
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    border: var(--kemet-combo-border, 1px solid var(--kemet-color-background));
    border-radius: var(--kemet-combo-border-radius, var(--kemet-border-radius));
    background-color: var(--kemet-combo-background-color, var(--kemet-color-white-to-black));
    box-shadow: var(--kemet-combo-shadow, var(--kemet-elevation-layer5));
  }
  li {
    line-height: 3rem;
    padding: 0 1.5rem;
    cursor: pointer;
  }
  li:hover,
  li:focus {
    color: var(--kemet-combo-hover-color, var(--kemet-color-white));
    outline: none;
    background-color: var(--kemet-combo-hover-background-color, var(--kemet-color-primary));
  }
`;
