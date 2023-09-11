import { css } from 'lit';

export const stylesBase = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-card-padding: 1rem;
    --kemet-card-border-color: rgb(var(--kemet-color-gray-300));
    --kemet-card-color: rgb(var(--kemet-color-text));
    --kemet-card-max-width: 600px;
    --kemet-card-border: 1px solid var(--kemet-card-border-color);
    --kemet-card-border-radius: 0;
    --kemet-card-background-color: rgb(var(--kemet-color-white));
    --kemet-card-body-padding: var(--kemet-card-padding);
    --kemet-card-header-padding: var(--kemet-card-padding);
    --kemet-card-header-border-bottom: 1px solid var(--kemet-card-border-color);
    --kemet-card-caption-color: rgb(var(--kemet-color-white));
    --kemet-card-caption-padding: calc(var(--kemet-card-padding) / 2) var(--kemet-card-padding);
    --kemet-card-caption-background-color: rgb(var(--kemet-color-black) / 35%);
    --kemet-card-footer-padding: var(--kemet-card-padding);
    --kemet-card-footer-border-top: 1px solid var(--kemet-card-border-color);

    color: var(--kemet-card-color);
    display: inline-flex;
    flex-direction: column;
    max-width: var(--kemet-card-max-width);
    border: var(--kemet-card-border);
    border-radius: var(--kemet-card-border-radius);
    background-color: var(--kemet-card-background-color);
  }

  :host([center]) {
    align-items: center;
    text-align: center;
  }

  .body {
    padding: var(--kemet-card-body-padding);
  }

  .media {
    position: relative;
  }

  ::slotted(*) {
    max-width: 100%;
  }

  ::slotted(img) {
    display: flex;
    max-width: 100%;
  }

  ::slotted([slot="header"]) {
    width: 100%;
    padding: var(--kemet-card-header-padding);
    border-bottom: var(--kemet-card-header-border-bottom);
  }

  ::slotted([slot="caption"]) {
    color: var(--kemet-card-caption-color);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: var(--kemet-card-caption-padding);
    background-color: var(--kemet-card-caption-background-color);
  }

  ::slotted([slot="footer"]) {
    width: 100%;
    padding: var(--kemet-card-footer-padding);
    border-top: var(--kemet-card-footer-border-top);
  }
`;
