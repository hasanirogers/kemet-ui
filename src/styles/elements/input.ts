import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-input-height: 50px;
    --kemet-input-padding: 0.5rem 1rem;
    --kemet-input-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-input-border-color-error: 1px solid rgb(var(--kemet-color-error));
    --kemet-input-border-color-success: 1px solid rgb(var(--kemet-color-success));
    --kemet-input-border-color-warning: 1px solid rgb(var(--kemet-color-warning));
    --kemet-input-icon-left-padding: 3rem;
    --kemet-input-icon-right-padding: 3rem;
    --kemet-input-border-radius-rounded: 0;
    --kemet-input-border-filled: none;
    --kemet-input-color-filled: rgb(var(--kemet-color-white));
    --kemet-input-background-color-filled: rgb(var(--kemet-color-primary));
    --kemet-input-color-filled: rgb(var(--kemet-color-white));
    --kemet-input-background-color-error: rgb(var(--kemet-color-error));
    --kemet-input-background-color-success: rgb(var(--kemet-color-success));
    --kemet-input-background-color-warning: rgb(var(--kemet-color-warning));

    position: relative;
    display: block;
  }

  input {
    color: rgb(var(--kemet-color-text));
    display: block;
    font-size: 1rem;
    width: 100%;
    height: var(--kemet-input-height);
    padding: var(--kemet-input-padding);
    border: var(--kemet-input-border);
    appearance: none;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: var(--kemet-input-border-radius-rounded);
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
    border: var(--kemet-input-border-color-error);
  }

  :host([status='success']) input {
    border: var(--kemet-input-border-color-success);
  }

  :host([status='warning']) input {
    border: var(--kemet-input-border-color-warning);
  }

  :host([disabled]) input {
    opacity: 0.5;
  }

  :host([icon-left]) input {
    padding-left: var(--kemet-input-icon-left-padding);
  }

  :host([icon-right]) input {
    padding-right: var(--kemet-input-icon-right-padding);
  }

  :host([rounded]) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-md);
  }

  :host([rounded='sm']) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-sm);
  }

  :host([rounded='lg']) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-lg);
  }

  :host([rounded='xl']) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-xl);
  }

  :host([rounded='circle']) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-circle);
  }

  :host([rounded='pill']) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-pill);
  }

  :host([filled]) input {
    border: var(--kemet-input-border-filled);
    color: var(--kemet-input-color-filled);
    background-color: var(--kemet-input-background-color-filled);
  }

  :host([filled]) kemet-icon,
  :host([filled]) input::placeholder {
    color: var(--kemet-input-color-filled);
  }

  :host([status='error'][filled]) input {
    background-color: var(--kemet-input-background-color-error);
  }

  :host([status='success'][filled]) input {
    background-color: var(--kemet-input-background-color-success);
  }

  :host([status='warning'][filled]) input {
    background-color: var(--kemet-input-background-color-warning);
  }

  kemet-icon-bootstrap,
  ::slotted(kemet-icon-bootstrap) {
    color: rgb(var(--kemet-color-text));
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  kemet-icon-bootstrap.left,
  :host([icon-left]) ::slotted(kemet-icon-bootstrap) {
    left: 1rem;
  }

  kemet-icon-bootstrap.right,
  :host([icon-right]) ::slotted(kemet-icon-bootstrap) {
    right: 1rem;
  }

  kemet-icon-bootstrap.eye,
  kemet-icon-bootstrap.search {
    cursor: pointer;
  }

  :host([status='error']) ::slotted(kemet-icon-bootstrap) {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='warning']) ::slotted(kemet-icon-bootstrap) {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='success']) ::slotted(kemet-icon-bootstrap) {
    color: rgb(var(--kemet-color-success));
  }
`;
