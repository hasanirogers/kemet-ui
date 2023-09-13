import { css } from 'lit';

export const stylesPopper = css`
  :host {
    --kemet-popper-width: auto;
    --kemet-popper-height: auto;
    --kemet-popper-padding: 1rem;
    --kemet-popper-border-color: rgb(var(--kemet-color-foreground));
    --kemet-popper-background-color: rgb(var(--kemet-color-background));

    display: inline-block;
  }

  #content {
    visibility: hidden;
    pointer-events: none;
    width: var(--kemet-popper-width);
    height: var(--kemet-popper-height);
    position: absolute;
    z-index: -1;
  }

  :host([opened]) #content {
    visibility: visible;
    z-index: 9;
    pointer-events: auto;
  }

  ::slotted([slot="content"]) {
    padding: var(--kemet-popper-padding);
    border: 1px solid var(--kemet-popper-border-color);
    background-color: var(--kemet-popper-background-color);
  }
`;
