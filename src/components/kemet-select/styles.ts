import { css } from 'lit';

export const stylesSelect = css`
  :host {
    position: relative;
    display: block;
  }

  select {
    color: var(--kemet-color-text);
    display: block;
    font-size: 1rem;
    width: 100%;
    padding: var(--kemet-select-padding, 1rem);
    border: var(--kemet-select-border, 1px solid var(--kemet-color-background));
    appearance: none;
    box-sizing: border-box;
    background-color: transparent;
  }

  option {
    color: var(--kemet-color-black);
  }

  :host([status='error']) select {
    border: var(--kemet-select-border-color-error, 1px solid var(--kemet-color-error));
  }

  :host([status='success']) select {
    border: var(--kemet-select-border-color-success, 1px solid var(--kemet-color-success));
  }

  :host([status='warning']) select {
    border: var(--kemet-select-border-color-warning, 1px solid var(--kemet-color-warning));
  }

  :host([disabled]) select {
    opacity: 0.5;
  }

  :host([rounded]) select {
    border-radius: var(--kemet-select-border-radius-rounded, var(--kemet-border-radius));
  }

  :host([filled]) select {
    border: var(--kemet-select-border-filled, none);
    color: var(--kemet-select-color-filled, var(--kemet-color-white));
    background-color: var(--kemet-select-background-color-filled, var(--kemet-color-primary));
  }

  :host([filled]) kemet-icon {
    color: var(--kemet-select-color-filled, var(--kemet-color-white));
  }

  :host([status='error'][filled]) select {
    background-color: var(--kemet-select-background-color-error, var(--kemet-color-error));
  }

  :host([status='success'][filled]) select {
    background-color: var(--kemet-select-background-color-success, var(--kemet-color-success));
  }

  :host([status='warning'][filled]) select {
    background-color: var(--kemet-select-background-color-warning, var(--kemet-color-warning));
  }

  kemet-icon {
    position: absolute;
    right: var(--kemet-select-icon-right, 1rem);
    top: 50%;
    transform: translateY(-50%);
  }
`;
