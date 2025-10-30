import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-input-height: 50px;
    --kemet-input-padding: 0.5rem 1rem;
    --kemet-input-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-lg);
    --kemet-input-border-filled: none;
    --kemet-input-color-filled: rgb(var(--kemet-color-white));
    --kemet-input-background-color-filled: rgb(var(--kemet-color-primary));
    --kemet-input-color-filled: rgb(var(--kemet-color-white));
    --kemet-input-background-color-error: rgb(var(--kemet-color-error));
    --kemet-input-background-color-success: rgb(var(--kemet-color-success));
    --kemet-input-background-color-warning: rgb(var(--kemet-color-warning));
    --kemet-input-border-radius-rounded: 0;

    --kemet-multi-input-chip-color: rgb(var(--kemet-color-background));
    --kemet-multi-input-chip-background: rgb(var(--kemet-color-foreground));

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

  :host([status=error]) input {
    --kemet-input-border: 1px solid rgb(var(--kemet-color-error));
  }

  :host([status=success]) input {
    --kemet-input-border: 1px solid rgb(var(--kemet-color-success));
  }

  :host([status=warning]) input {
    --kemet-input-border: 1px solid rgb(var(--kemet-color-warning));
  }

  :host([disabled]) input {
    opacity: 0.5;
  }

  :host([rounded]) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-md);
  }

  :host([rounded=sm]) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-sm);
  }

  :host([rounded=lg]) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-lg);
  }

  :host([rounded=xl]) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-xl);
  }

  :host([rounded=circle]) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-circle);
  }

  :host([rounded=pill]) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-pill);
  }

  :host([rounded=circle]) input {
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-circle);
  }

  :host([filled]) input {
    border: var(--kemet-input-border-filled);
    color: var(--kemet-input-color-filled);
    background-color: var(--kemet-input-background-color-filled);
  }

  div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.25rem 0.5rem;
    color: var(--kemet-multi-input-chip-color);
    background-color: var(--kemet-multi-input-chip-background);
  }

  :host([rounded]) li {
    border-radius: var(--kemet-input-border-radius-rounded);
  }

  button {
    color: inherit;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0;
    border: 0;
    background-color: transparent
  }
`;
