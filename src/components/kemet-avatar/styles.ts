import { css } from 'lit';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: inline-flex;
    color: var(--kemet-avatar-color, var(--kemet-color-white));
    position: relative;
    background-color: var(--kemet-avatar-background-color, var(--kemet-color-gray4));
  }

  :host([circle]) {
    border-radius: 50%;
  }

  :host([circle]) > * {
    border-radius: 50%;
  }

  :host([rounded]) {
    border-radius: var(--kemet-avatar-rounded-radius, 1rem);
  }

  :host([rounded]) > * {
    border-radius: var(--kemet-avatar-rounded-radius, 1rem);
  }

  .initials {
    margin: var(--kemet-avatar-initials-margin, 1rem);
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
    display: inline-flex;
  }

  ::slotted(kemet-avatar:not(:first-of-type)) {
    margin-left: var(--kemet-avatars-squeeze, -1.5rem);
  }
`;
