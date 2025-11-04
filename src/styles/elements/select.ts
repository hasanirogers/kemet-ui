import { css } from 'lit';

export const stylesSelect = css`
  :host {
    --kemet-select-padding: 1rem;
    --kemet-select-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-select-border-color-error: 1px solid rgb(var(--kemet-color-error));
    --kemet-select-border-color-success: 1px solid rgb(var(--kemet-color-success));
    --kemet-select-border-color-warning: 1px solid rgb(var(--kemet-color-warning));
    --kemet-select-border-radius-rounded: var(--kemet-border-radius-md);
    --kemet-select-border-filled: none;
    --kemet-select-color-filled: rgb(var(--kemet-color-white));
    --kemet-select-background-color-filled: rgb(var(--kemet-color-primary));
    --kemet-select-background-color-error: rgb(var(--kemet-color-error));
    --kemet-select-background-color-success: rgb(var(--kemet-color-success));
    --kemet-select-background-color-warning: rgb(var(--kemet-color-warning));
    --kemet-select-icon-right: 1rem;
    --kemet-select-border-radius-rounded: 0;

    position: relative;
    display: block;
  }

  select {
    color: rgb(var(--kemet-color-text));
    display: block;
    font-size: 1rem;
    width: 100%;
    padding: var(--kemet-select-padding);
    border: var(--kemet-select-border);
    appearance: none;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: var(--kemet-select-border-radius-rounded);
  }

  option {
    color: rgb(var(--kemet-color-black));
  }

  :host([status='error']) select {
    border: var(--kemet-select-border-color-error);
  }

  :host([status='success']) select {
    border: var(--kemet-select-border-color-success);
  }

  :host([status='warning']) select {
    border: var(--kemet-select-border-color-warning);
  }

  :host([disabled]) select {
    opacity: 0.5;
  }

  :host([rounded]) select {
    --kemet-select-border-radius-rounded: var(--kemet-border-radius-md);
  }

  :host([rounded=sm]) select {
    --kemet-select-border-radius-rounded: var(--kemet-border-radius-sm);
  }

  :host([rounded=md]) select {
    --kemet-select-border-radius-rounded: var(--kemet-border-radius-md);
  }

  :host([rounded=lg]) select {
    --kemet-select-border-radius-rounded: var(--kemet-border-radius-lg);
  }

  :host([rounded=xl]) select {
    --kemet-select-border-radius-rounded: var(--kemet-border-radius-xl);
  }

  :host([rounded=circle]) select {
    --kemet-select-border-radius-rounded: var(--kemet-border-radius-circle);
  }

  :host([rounded=pill]) select {
    --kemet-select-border-radius-rounded: var(--kemet-border-radius-pill);
  }

  :host([filled]) select {
    border: var(--kemet-select-border-filled);
    color: var(--kemet-select-color-filled);
    background-color: var(--kemet-select-background-color-filled);
  }

  :host([status='error'][filled]) select {
    background-color: var(--kemet-select-background-color-error);
  }

  :host([status='success'][filled]) select {
    background-color: var(--kemet-select-background-color-success);
  }

  :host([status='warning'][filled]) select {
    background-color: var(--kemet-select-background-color-warning);
  }

  kemet-icon-bootstrap {
    position: absolute;
    right: var(--kemet-select-icon-right);
    top: 50%;
    transform: translateY(-50%);
  }

  :host([filled]) kemet-icon-bootstrap {
    color: var(--kemet-select-color-filled);
  }
`;
