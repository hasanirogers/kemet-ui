import { css } from 'lit';

export const stylesTextarea = css`
  :host {
    position: relative;
    display: block;
  }

  textarea {
    color: var(--kemet-color-text);
    display: block;
    width: 100%;
    padding: var(--kemet-textarea-padding, 1rem);
    border: var(--kemet-textarea-border, 1px solid var(--kemet-color-background));
    appearance: none;
    box-sizing: border-box;
    background: transparent;
  }

  :host([status='error']) textarea {
    border: var(--kemet-textarea-border-color-error, 1px solid var(--kemet-color-error));
  }

  :host([status='success']) textarea {
    border: var(--kemet-textarea-border-color-success, 1px solid var(--kemet-color-success));
  }

  :host([status='warning']) textarea {
    border: var(--kemet-textarea-border-color-warning, 1px solid var(--kemet-color-warning));
  }

  :host([disabled]) textarea {
    opacity: 0.5;
  }

  :host([icon-left]) textarea {
    padding-left: var(--kemet-textarea-icon-left-padding, 3rem);
  }

  :host([icon-right]) textarea {
    padding-right: var(--kemet-textarea-icon-right-padding, 3rem);
  }

  :host([rounded]) textarea {
    border-radius: var(--kemet-textarea-border-radius-rounded, var(--kemet-border-radius));
  }

  :host([filled]) textarea {
    border: var(--kemet-textarea-border-filled, none);
    color: var(--kemet-textarea-color-filled, var(--kemet-color-white));
    background-color: var(--kemet-textarea-background-color-filled, var(--kemet-color-primary));
  }

  :host([filled]) textarea::placeholder {
    color: var(--kemet-textarea-color-filled, var(--kemet-color-white));
  }

  :host([status='error'][filled]) textarea {
    background-color: var(--kemet-textarea-background-color-error, var(--kemet-color-error));
  }

  :host([status='success'][filled]) textarea {
    background-color: var(--kemet-textarea-background-color-success, var(--kemet-color-success));
  }

  :host([status='warning'][filled]) textarea {
    background-color: var(--kemet-textarea-background-color-warning, var(--kemet-color-warning));
  }
`;
