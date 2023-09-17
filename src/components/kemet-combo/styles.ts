import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-combo-width: calc(100% - 2px);
    --kemet-combo-margin: 1rem auto;
    --kemet-combo-max-height: calc(5 * 3rem);
    --kemet-combo-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-combo-border-radius: var(--kemet-border-radius);
    --kemet-combo-background-color: rgb(var(--kemet-color-white-to-black));
    --kemet-combo-shadow: var(--kemet-elevation-layer-5);
    --kemet-combo-hover-color: rgb(var(--kemet-color-white));
    --kemet-combo-hover-background-color: rgb(var(--kemet-color-primary));

    opacity: 0;
    width: var(--kemet-combo-width);
    margin: var(--kemet-combo-margin);
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
    max-height: var(--kemet-combo-max-height);
    position: absolute;
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    border: var(--kemet-combo-border);
    border-radius: var(--kemet-combo-border-radius);
    background-color: var(--kemet-combo-background-color);
    box-shadow: var(--kemet-combo-shadow);
  }

  li {
    line-height: 3rem;
    padding: 0 1.5rem;
    cursor: pointer;
  }

  li:hover,
  li:focus {
    color: var(--kemet-combo-hover-color);
    outline: none;
    background-color: var(--kemet-combo-hover-background-color);
  }
`;
