import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-badge-padding: 10px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--kemet-badge-padding);
    line-height: 1;
    color: rgb(var(--kemet-color-white));
  }

  :host([status='primary']) {
    background-color: rgb(var(--kemet-color-primary));
  }

  :host([status='success']) {
    background-color: rgb(var(--kemet-color-success));
  }

  :host([status='standard']) {
    background-color: rgb(var(--kemet-color-gray-500));
  }

  :host([status='warning']) {
    background-color: rgb(var(--kemet-color-warning));
  }

  :host([status='error']) {
    background-color: rgb(var(--kemet-color-error));
  }

  :host([circle]) {
    border-radius: var(--kemet-border-radius-circle);
  }

  :host([pill]) {
    border-radius: var(--kemet-border-radius-pill);
  }
`;
