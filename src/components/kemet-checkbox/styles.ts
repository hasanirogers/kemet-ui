import { css } from 'lit';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
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
    width: var(--kemet-checkbox-size, 18px);
    height: var(--kemet-checkbox-size, 18px);
    position: absolute;
    opacity: 0;
  }

  button {
    margin: 0;
    border: none;
    background: none;
  }

  [part='checkbox'] {
    color: var(--kemet-checkbox-color, var(--kemet-color-background));
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--kemet-checkbox-size, 18px);
    height: var(--kemet-checkbox-size, 18px);
    border: var(--kemet-checkbox-border, 1px solid var(--kemet-color-background));
  }

  :host([rounded]) [part='checkbox'] {
    border-radius: var(--kemet-checkbox-border-radius, 4px);
  }

  :host([filled][checked]) [part='checkbox'],
  :host([filled][indeterminate]) [part='checkbox'] {
    border: none;
    background-color: var(--kemet-checkbox-filled-background-color, var(--kemet-color-primary));
  }

  [part='mark'] {
    display: flex;
    width: calc(var(--kemet-checkbox-size, 18px) - 4px);
    height: calc(var(--kemet-checkbox-size, 18px) - 4px);
  }

  :host([filled][checked]) [part='mark'],
  :host([filled][indeterminate]) [part='mark'] {
    color: var(--kemet-checkbox-filled-color, var(--kemet-color-white));
  }

  [part='message'] {
    display: block;
    margin-top: 0.5rem;
  }

  :host([status='error']) [part='message'] {
    color: var(--kemet-color-error);
  }

  :host([status='warning']) [part='message'] {
    color: var(--kemet-color-error);
  }
`;
