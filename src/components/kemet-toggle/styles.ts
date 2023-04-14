import { css } from 'lit';

export const stylesToggle = css`
  :host {
    --kemet-toggle-width: 3.5rem;
    --kemet-toggle-height: 2rem;
    --kemet-toggle-handle-diameter: 1.6rem;
    --kemet-toggle-handle-margin: calc((var(--kemet-toggle-height) - var(--kemet-toggle-handle-diameter)) / 2);

    display: flex;
    align-items: center;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: inherit;
    color: inherit;
  }

  :host([disabled]) label {
    cursor: not-allowed;
  }

  input {
    display: none;
  }

  [part='control'] {
    position: relative;
    display: inline-flex;
    margin: 0;
    width: var(--kemet-toggle-width);
    height: var(--kemet-toggle-height);
  }

  [part='control'] > span {
    transition: 300ms ease-in-out;
  }

  [part='track'] {
    width: var(--kemet-toggle-width);
    height: var(--kemet-toggle-height);
    border: var(--kemet-toggle-track-border, none);
    border-radius: var(--kemet-toggle-height);
    background-color: var(--kemet-toggle-track-color, var(--kemet-color-white));
    box-shadow: var(--kemet-toggle-track-shadow, inset 0 0.4rem 0.7rem 0 rgba(47, 47, 47, 0.35), inset 0 -0.2rem 0.4rem 0 var(--kemet-color-gray1));
  }

  :host([squared]) [part='track'] {
    border-radius: 0;
  }

  [part='handle'] {
    position: absolute;
    top: var(--kemet-toggle-handle-margin);
    left: var(--kemet-toggle-handle-margin);
    width: var(--kemet-toggle-handle-diameter);
    height: var(--kemet-toggle-handle-diameter);
    transform: translateX(0);
    border: var(--kemet-toggle-handle-border, none);
    border-radius: var(--kemet-toggle-handle-diameter);
    background-color: var(--kemet-toggle-handle-color, var(--kemet-color-primary));
    box-shadow: var(--kemet-toggle-handle-shadow, 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2));
  }

  :host([squared]) [part='handle'] {
    border-radius: 0;
  }

  :host([checked]) [part='handle'] {
    transform: translateX(calc(var(--kemet-toggle-width) - var(--kemet-toggle-handle-diameter) - var(--kemet-toggle-handle-margin) * 2));
  }

  .option {
    font-size: 90%;
  }
`;
