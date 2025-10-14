import { css } from 'lit';

export const stylesRadio = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-radio-size: 18px;
    --kemet-radio-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-radio-dot-color: rgb(var(--kemet-color-primary));
    --kemet-radio-dot-border: 1px solid rgb(var(--kemet-color-primary));
    --kemet-radio-dot-border-width: 3px;
    --kemet-radio-dot-ring-color: rgb(var(--kemet-color-white));
    --kemet-radio-dot-color-filled: rgb(var(--kemet-color-white));
    --kemet-radio-dot-border-width: 4px;
    --kemet-radio-dot-border-color: rgb(var(--kemet-color-primary));

    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  label {
    cursor: pointer;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    margin-right: 0.5rem;
  }

  input {
    cursor: pointer;
    margin: 0;
    padding: 0;
    width: var(--kemet-radio-size);
    height: var(--kemet-radio-size);
    position: absolute;
    opacity: 0;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--kemet-radio-size);
    height: var(--kemet-radio-size);
    padding: 0;
    border-radius: var(--kemet-border-radius-circle);
    background: none;
    border: var(--kemet-radio-border);
  }

  [part='dot'] {
    display: inline-flex;
    border-radius: var(--kemet-border-radius-circle);
    width: var(--kemet-radio-size);
    height: var(--kemet-radio-size);
    background: var(--kemet-radio-dot-color);
    border: var(--kemet-radio-dot-border);
    box-shadow: inset 0px 0px 0px var(--kemet-radio-dot-border-width) var(--kemet-radio-dot-ring-color);
  }

  :host([filled]) [part='dot'] {
    background: var(--kemet-radio-dot-color-filled);
    box-shadow: inset 0px 0px 0px var(--kemet-radio-dot-border-width) var(--kemet-radio-dot-border-color);
  }
`;

export const stylesRadios = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.5rem;
  }

  legend {
    margin-bottom: 1rem;
  }

  :host([axis='vertical']) fieldset {
    flex-direction: column;
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
