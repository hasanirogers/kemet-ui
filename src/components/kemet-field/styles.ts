import { css } from 'lit';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  label {
    position: relative;
    display: block;
  }

  label span {
    color: inherit;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  :host([status='error']) kemet-icon {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='success']) kemet-icon {
    color: rgb(var(--kemet-color-success));
  }

  :host([status='warning']) kemet-icon {
    color: rgb(var(--kemet-color-warning));
  }

  .message {
    font-size: 0.9rem;
    line-height: 1;
    display: block;
    margin-top: 0.8rem;
  }

  :host([status='error']) .message {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='success']) .message {
    color: rgb(var(--kemet-color-success));
  }

  :host([status='warning']) .message {
    color: rgb(var(--kemet-color-warning));
  }
`;
