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
    --kemet-avatar-rounded-radius: 1rem;
    --kemet-avatar-initials-margin: 1rem;

    display: inline-flex;
    color: var(--kemet-color-white);
    position: relative;
    background-color: var(--kemet-avatar-background-color);
  }

  :host([circle]) {
    border-radius: 50%;
  }

  :host([circle]) > * {
    border-radius: 50%;
  }

  :host([rounded]) {
    border-radius: var(--kemet-avatar-rounded-radius);
  }

  :host([rounded]) > * {
    border-radius: var(--kemet-avatar-rounded-radius);
  }

  .initials {
    margin: var(--kemet-avatar-initials-margin);
  }

  ::slotted(kemet-badge) {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 50%;
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
