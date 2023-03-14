import { css } from 'lit';

export const stylesBase = css`
  :host {
    position: relative;
    display: block;
  }

  input {
    color: var(--kemet-color-text);
    display: block;
    font-size: 1rem;
    width: 100%;
    height: var(--kemet-input-height, 50px);
    padding: var(--kemet-input-padding, 0.5rem 1rem);
    border: var(--kemet-input-border, 1px solid var(--kemet-color-background));
    appearance: none;
    box-sizing: border-box;
    background-color: transparent;
  }

  input[type='color'] {
    min-width: 10rem;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  :host([status='error']) input {
    border: var(--kemet-input-border-color-error, 1px solid var(--kemet-color-error));
  }

  :host([status='success']) input {
    border: var(--kemet-input-border-color-success, 1px solid var(--kemet-color-success));
  }

  :host([status='warning']) input {
    border: var(--kemet-input-border-color-warning, 1px solid var(--kemet-color-warning));
  }

  :host([disabled]) input {
    opacity: 0.5;
  }

  :host([icon-left]) input {
    padding-left: var(--kemet-input-icon-left-padding, 3rem);
  }

  :host([icon-right]) input {
    padding-right: var(--kemet-input-icon-right-padding, 3rem);
  }

  :host([rounded]) input {
    border-radius: var(--kemet-input-border-radius-rounded, var(--kemet-border-radius));
  }

  :host([filled]) input {
    border: var(--kemet-input-border-filled, none);
    color: var(--kemet-input-color-filled, var(--kemet-color-white));
    background-color: var(--kemet-input-background-color-filled, var(--kemet-color-primary));
  }

  :host([filled]) kemet-icon,
  :host([filled]) input::placeholder {
    color: var(--kemet-input-color-filled, var(--kemet-color-white));
  }

  :host([status='error'][filled]) input {
    background-color: var(--kemet-input-background-color-error, var(--kemet-color-error));
  }

  :host([status='success'][filled]) input {
    background-color: var(--kemet-input-background-color-success, var(--kemet-color-success));
  }

  :host([status='warning'][filled]) input {
    background-color: var(--kemet-input-background-color-warning, var(--kemet-color-warning));
  }

  kemet-icon {
    color: var(--kemet-color-text);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  kemet-icon.left {
    left: 1rem;
  }

  kemet-icon.right {
    right: 1rem;
  }

  kemet-icon.eye,
  kemet-icon.search {
    cursor: pointer;
  }

  :host([status='error']) kemet-icon {
    color: var(--kemet-color-error);
  }

  :host([status='warning']) kemet-icon {
    color: var(--kemet-color-error);
  }

  :host([status='success']) kemet-icon {
    color: var(--kemet-color-success);
  }
`;
