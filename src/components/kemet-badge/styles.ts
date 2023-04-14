import { css } from 'lit';

export const stylesBase = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--kemet-badge-padding, 10px);
    line-height: 1;
    color: var(--kemet-color-white);
  }

  :host([status='primary']) {
    background-color: var(--kemet-color-primary);
  }

  :host([status='success']) {
    background-color: var(--kemet-color-success);
  }

  :host([status='standard']) {
    background-color: var(--kemet-color-gray6);
  }

  :host([status='warning']) {
    background-color: var(--kemet-color-warning);
  }

  :host([status='error']) {
    background-color: var(--kemet-color-error);
  }

  :host([circle]) {
    border-radius: 50%;
  }

  :host([pill]) {
    border-radius: 99rem;
  }
`;
