import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-badge-padding: 10px;
    --kemet-badge-color: rgb(var(--kemet-color-white));
    --kemet-badge-background-color: rgb(var(--kemet-color-primary));
    --kemet-badge-border: 0;
    --kemet-badge-border-width: 1px;
    --kemet-badge-border-style: solid;
    --kemet-badge-border-color: rgb(var(--kemet-color-primary));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--kemet-badge-padding);
    line-height: 1;
    color: var(--kemet-badge-color);
    background-color: var(--kemet-badge-background-color);
    border: var(--kemet-badge-border);
  }

  :host([status='primary']) {
    --kemet-badge-background-color: rgb(var(--kemet-color-primary));
  }

  :host([status='success']) {
    --kemet-badge-background-color: rgb(var(--kemet-color-success));
  }

  :host([status='standard']) {
    --kemet-badge-background-color: rgb(var(--kemet-color-gray-500));
  }

  :host([status='warning']) {
    --kemet-badge-background-color: rgb(var(--kemet-color-warning));
  }

  :host([status='error']) {
    --kemet-badge-background-color: rgb(var(--kemet-color-error));
  }

  :host([rounded]) {
    border-radius: var(--kemet-border-radius-md);
  }

  :host([rounded=sm]) {
    border-radius: var(--kemet-border-radius-sm);
  }

  :host([rounded=md]) {
    border-radius: var(--kemet-border-radius-md);
  }

  :host([rounded=lg]) {
    border-radius: var(--kemet-border-radius-lg);
  }

  :host([rounded=xl]) {
    border-radius: var(--kemet-border-radius-xl);
  }

  :host([rounded=circle]) {
    border-radius: var(--kemet-border-radius-circle);
  }

  :host([rounded=pill]) {
    border-radius: var(--kemet-border-radius-pill);
  }

  :host([outlined]) {
    --kemet-badge-color: rgb(var(--kemet-color-foreground));
    --kemet-badge-background-color: transparent;
    --kemet-badge-border: var(--kemet-badge-border-width) var(--kemet-badge-border-style) var(--kemet-badge-border-color);
  }

  :host([outlined][status=primary]) {
    --kemet-badge-border-color: rgb(var(--kemet-color-primary));
  }

  :host([outlined][status=success]) {
    --kemet-badge-border-color: rgb(var(--kemet-color-success));
  }

  :host([outlined][status=warning]) {
    --kemet-badge-border-color: rgb(var(--kemet-color-warning));
  }

  :host([outlined][status=error]) {
    --kemet-badge-border-color: rgb(var(--kemet-color-error));
  }
`;
