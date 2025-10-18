import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-alert-padding: 1rem;
    --kemet-alert-border-thickness: 4px;
    --kemet-alert-status-color: inherit;
    --kemet-alert-align-items: center;
    --kemet-alert-border: 1px solid rgb(var(--kemet-alert-status-color));
    --kemet-alert-radius: 0;

    display: flex;
    grid-template-columns: auto 1fr auto;
    gap: var(--kemet-alert-padding);
    align-items: var(--kemet-alert-align-items);
    opacity: 0;
    padding: var(--kemet-alert-padding);
    border: var(--kemet-alert-border);
    transition: opacity 300ms ease;
    border-radius: var(--kemet-alert-radius);
  }

  :host([opened]) {
    opacity: 1;
  }

  :host([border-status="top"]) {
    border-top: var(--kemet-alert-border-thickness) solid rgb(var(--kemet-alert-status-color));
  }

  :host([border-status="right"]) {
    border-right: var(--kemet-alert-border-thickness) solid rgb(var(--kemet-alert-status-color));
  }

  :host([border-status="bottom"]) {
    border-bottom: var(--kemet-alert-border-thickness) solid rgb(var(--kemet-alert-status-color));
  }

  :host([border-status="left"]) {
    border-left: var(--kemet-alert-border-thickness) solid rgb(var(--kemet-alert-status-color));
  }

  :host([status="standard"]) {
    --kemet-alert-status-color: var(--kemet-color-text);
  }

  :host([status="primary"]) {
    --kemet-alert-status-color: var(--kemet-color-primary);
  }

  :host([status="success"]) {
    --kemet-alert-status-color: var(--kemet-color-success);
  }

  :host([status="warning"]) {
    --kemet-alert-status-color: var(--kemet-color-warning);
  }

  :host([status="error"]) {
    --kemet-alert-status-color: var(--kemet-color-error);
  }

  :host([hidden]) {
    display: none;
  }

  :host([reveal]) {
    animation: fadeIn 300ms ease forwards;
  }

  :host([overlay]) {
    position: fixed;
  }

  :host([overlay*="full"]) {
    width: 100%;
  }

  :host([overlay*="top"]) {
    top: 0;
  }

  :host([overlay*="bottom"]) {
    bottom: 0;
  }

  :host([overlay*="left"]) {
    left: 0;
  }

  :host([overlay*="right"]) {
    right: 0;
  }

  :host([rounded]) {
    --kemet-alert-radius: var(--kemet-border-radius-md);
  }

  :host([rounded="sm"]) {
    --kemet-alert-radius: var(--kemet-border-radius-sm);
  }

  :host([rounded="md"]) {
    --kemet-alert-radius: var(--kemet-border-radius-md);
  }

  :host([rounded="lg"]) {
    --kemet-alert-radius: var(--kemet-border-radius-lg);
  }

  :host([rounded="xl"]) {
    --kemet-alert-radius: var(--kemet-border-radius-xl);
  }

  :host([rounded="circle"]) {
    --kemet-alert-radius: var(--kemet-border-radius-circle);
  }

  :host([rounded="pill"]) {
    --kemet-alert-radius: var(--kemet-border-radius-pill);
  }

  .close {
    cursor: pointer;
    margin-left: auto;
  }

  ::slotted(kemet-icon) {
    color: rgb(var(--kemet-alert-status-color));
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
