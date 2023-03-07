import { css } from 'lit';

export const stylesBase = css`
  :host {
    --kemet-alert-padding: 1rem;
    --kemet-alert-border-thickness: 4px;
    --kemet-alert-status-color: inherit;

    display: flex;
    grid-template-columns: auto 1fr auto;
    gap: var(--kemet-alert-gap, var(--kemet-alert-padding));
    align-items: var(--kemet-alert-align-items, center);
    opacity: 0;
    padding: var(--kemet-alert-padding);
    border: var(--kemet-alert-border, 1px solid var(--kemet-alert-status-color));
    transition: opacity 300ms ease;
  }

  :host([opened]) {
    opacity: 1;
  }

  :host([border-status="top"]) {
    border-top: var(--kemet-alert-border-thickness) solid var(--kemet-alert-status-color);
  }

  :host([border-status="right"]) {
    border-right: var(--kemet-alert-border-thickness) solid var(--kemet-alert-status-color);
  }

  :host([border-status="bottom"]) {
    border-bottom: var(--kemet-alert-border-thickness) solid var(--kemet-alert-status-color);
  }

  :host([border-status="left"]) {
    border-left: var(--kemet-alert-border-thickness) solid var(--kemet-alert-status-color);
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

  .close {
    cursor: pointer;
    margin-left: auto;
  }

  ::slotted(kemet-icon) {
    color: var(--kemet-alert-status-color);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
