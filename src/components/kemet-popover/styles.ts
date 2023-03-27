import { css } from 'lit';

export const stylesPopover = css`
  :host {
    display: inline-block;
    position: relative;
    z-index: unset;
  }

  #trigger {
    display: inline-block;
    cursor: pointer;
  }

  ::slotted([slot="trigger"]) {
    position: relative;
    /* z-index: 2; */
  }

  #content {
    visibility: hidden;
    pointer-events: none;
    width: var(--kemet-popover-width, 100%);
    height: var(--kemet-popover-height, auto);
    position: absolute;
    z-index: -1;
  }

  :host([opened]) #content {
    visibility: visible;
    z-index: 9;
    pointer-events: auto;
  }

  ::slotted([slot="content"]) {
    color: var(--kemet-popover-color, #fafafa);
    display: block;
    position: relative;
    z-index: 2;
    cursor: default;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: var(--kemet-popover-background-color, #202020);
    transform: translate(var(--kemet-popover-content-offset-x, 0), var(--kemet-popover-content-offset-y, 0));
  }

  :host([position="top"]) #content {
    bottom: calc(100% + var(--kemet-popover-gap, 1rem));
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="right"]) #content {
    left: calc(100% + var(--kemet-popover-gap, 1rem));
    top: 50%;
    transform: translateY(-50%);
  }

  :host([position="bottom"]) #content {
    top: calc(100% + var(--kemet-popover-gap, 1rem));
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="left"]) #content {
    right: calc(100% + var(--kemet-popover-gap, 1rem));
    top: 50%;
    transform: translateY(-50%);
  }

  #overlay {
    display: none;
  }

  :host([opened]) #overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
`;
