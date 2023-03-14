import { css } from 'lit';

export const stylesRadio = css`
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
    width: var(--kemet-radio-size, 18px);
    height: var(--kemet-radio-size, 18px);
    position: absolute;
    opacity: 0;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--kemet-radio-size, 18px);
    height: var(--kemet-radio-size, 18px);
    padding: 0;
    border-radius: 50%;
    background: none;
    border: var(--kemet-radio-border, 1px solid var(--kemet-color-background));
  }

  [part='dot'] {
    display: inline-flex;
    border-radius: 50%;
    width: var(--kemet-radio-size, 18px);
    height: var(--kemet-radio-size, 18px);
    background: var(--kemet-radio-dot-color, var(--kemet-color-primary));
    border: var(--kemet-radio-border, 1px solid var(--kemet-color-primary));
    box-shadow: inset 0px 0px 0px var(--kemet-radio-dot-border-width, 3px) var(--kemet-radio-dot-border-color, var(--kemet-color-white));
  }

  :host([filled]) [part='dot'] {
    background: var(--kemet-radio-dot-color-filled, var(--kemet-color-white));
    box-shadow: inset 0px 0px 0px var(--kemet-radio-dot-border-width, 4px) var(--kemet-radio-dot-border-color, var(--kemet-color-primary));
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
    color: var(--kemet-color-error);
  }

  :host([status='warning']) [part='message'] {
    color: var(--kemet-color-error);
  }
`;
