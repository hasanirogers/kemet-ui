import { css } from 'lit';

export const stylesTextarea = css`
  :host {
    --kemet-textarea-padding: 1rem;
    --kemet-textarea-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-textarea-border-color-error: 1px solid rgb(var(--kemet-color-error));
    --kemet-textarea-border-color-success: 1px solid rgb(var(--kemet-color-success));
    --kemet-textarea-border-color-warning: 1px solid rgb(var(--kemet-color-warning));
    --kemet-textarea-icon-left-padding: 3rem;
    --kemet-textarea-icon-right-padding: 3rem;
    --kemet-textarea-border-radius-rounded: var(--kemet-border-radius);
    --kemet-textarea-border-filled: none;
    --kemet-textarea-color-filled: rgb(var(--kemet-color-white));
    --kemet-textarea-background-color-filled: rgb(var(--kemet-color-primary));
    --kemet-textarea-background-color-error: rgb(var(--kemet-color-error));
    --kemet-textarea-background-color-success: rgb(var(--kemet-color-success));
    --kemet-textarea-background-color-warning: rgb(var(--kemet-color-warning));

    position: relative;
    display: block;
  }

  textarea {
    color: rgb(var(--kemet-color-text));
    display: block;
    width: 100%;
    padding: var(--kemet-textarea-padding);
    border: var(--kemet-textarea-border);
    appearance: none;
    box-sizing: border-box;
    background: transparent;
  }

  :host([status='error']) textarea {
    border: var(--kemet-textarea-border-color-error);
  }

  :host([status='success']) textarea {
    border: var(--kemet-textarea-border-color-success);
  }

  :host([status='warning']) textarea {
    border: var(--kemet-textarea-border-color-warning);
  }

  :host([disabled]) textarea {
    opacity: 0.5;
  }

  :host([icon-left]) textarea {
    padding-left: var(--kemet-textarea-icon-left-padding);
  }

  :host([icon-right]) textarea {
    padding-right: var(--kemet-textarea-icon-right-padding);
  }

  :host([rounded]) textarea {
    border-radius: var(--kemet-textarea-border-radius-rounded);
  }

  :host([filled]) textarea {
    border: var(--kemet-textarea-border-filled);
    color: var(--kemet-textarea-color-filled);
    background-color: var(--kemet-textarea-background-color-filled);
  }

  :host([filled]) textarea::placeholder {
    color: var(--kemet-textarea-color-filled);
  }

  :host([status='error'][filled]) textarea {
    background-color: var(--kemet-textarea-background-color-error);
  }

  :host([status='success'][filled]) textarea {
    background-color: var(--kemet-textarea-background-color-success);
  }

  :host([status='warning'][filled]) textarea {
    background-color: var(--kemet-textarea-background-color-warning);
  }
`;
