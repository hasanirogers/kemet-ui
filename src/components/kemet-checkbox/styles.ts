import { css } from 'lit';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-checkbox-size: 18px;
    --kemet-checkbox-color: rgb(var(--kemet-color-foreground));
    --kemet-checkbox-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-checkbox-border-radius: var(--kemet-border-radius-md);
    --kemet-checkbox-filled-background-color: rgb(var(--kemet-color-primary));
    --kemet-checkbox-filled-color: rgb(var(--kemet-color-white));

    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  label {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
  }

  input {
    cursor: pointer;
    margin: 0;
    padding: 0;
    width: var(--kemet-checkbox-size);
    height: var(--kemet-checkbox-size);
    position: absolute;
    opacity: 0;
  }

  button {
    margin: 0;
    border: none;
    background: none;
  }

  [part='checkbox'] {
    color: var(--kemet-checkbox-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--kemet-checkbox-size);
    height: var(--kemet-checkbox-size);
    border: var(--kemet-checkbox-border);
  }

  :host([rounded]) [part='checkbox'] {
    border-radius: var(--kemet-checkbox-border-radius);
  }

  :host([filled][checked]) [part='checkbox'],
  :host([filled][indeterminate]) [part='checkbox'] {
    border: none;
    background-color: var(--kemet-checkbox-filled-background-color);
  }

  [part='mark'] {
    display: flex;
    width: calc(var(--kemet-checkbox-size) - 4px);
    height: calc(var(--kemet-checkbox-size) - 4px);
  }

  :host([filled][checked]) [part='mark'],
  :host([filled][indeterminate]) [part='mark'] {
    color: var(--kemet-checkbox-filled-color);
  }

  [part='message'] {
    display: block;
    margin-top: 0.5rem;
  }

  :host([status='error']) [part='message'] {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='warning']) [part='message'] {
    color: rgb(var(--kemet-color-error));
  }
`;
