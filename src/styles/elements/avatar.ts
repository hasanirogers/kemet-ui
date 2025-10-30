import { css } from 'lit';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-avatar-color: rgb(var(--kemet-color-white));
    --kemet-avatar-background-color: rgb(var(--kemet-color-gray-300));
    --kemet-avatar-rounded: 0;
    --kemet-avatar-initials-margin: 1rem;

    display: inline-flex;
    color: var(--kemet-color-white);
    position: relative;
    border-radius: var(--kemet-avatar-rounded);
    background-color: var(--kemet-avatar-background-color);
  }

  :host > * {
    border-radius: var(--kemet-avatar-rounded);
  }

  :host([rounded]) {
    --kemet-avatar-rounded: var(--kemet-border-radius-md);
  }

  :host([rounded=sm]) {
    --kemet-avatar-rounded: var(--kemet-border-radius-sm);
  }

  :host([rounded=lg]) {
    --kemet-avatar-rounded: var(--kemet-border-radius-lg);
  }

  :host([rounded=xl]) {
    --kemet-avatar-rounded: var(--kemet-border-radius-xl);
  }

  :host([rounded=circle]) {
    --kemet-avatar-rounded: var(--kemet-border-radius-circle);
  }

  :host([rounded=pill]) {
    --kemet-avatar-rounded: var(--kemet-border-radius-pill);
  }

  .initials {
    margin: var(--kemet-avatar-initials-margin);
  }

  ::slotted(kemet-badge) {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: var(--kemet-border-radius-circle);
  }
`;

export const stylesAvatars = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-avatars-squeeze: -1.5rem;

    display: inline-flex;
  }

  ::slotted(kemet-avatar:not(:first-of-type)) {
    margin-left: var(--kemet-avatars-squeeze);
  }
`;
