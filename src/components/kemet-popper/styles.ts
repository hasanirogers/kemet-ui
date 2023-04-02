import { css } from 'lit';

export const stylesPopper = css`
  :host {
    display: inline-block;
  }

  #content {
    visibility: hidden;
    pointer-events: none;
    width: var(--kemet-popper-width, auto);
    height: var(--kemet-popper-height, auto);
    position: absolute;
    z-index: -1;
  }

  :host([opened]) #content {
    visibility: visible;
    z-index: 9;
    pointer-events: auto;
  }

  ::slotted([slot="content"]) {
    padding: var(--kemet-popper-padding, 1rem);
    border: 1px solid var(--kemet-popper-border-color, var(--kemet-color-background));
    background-color: var(--kemet-popper-background-color, var(--kemet-color-foreground));
  }
`;
