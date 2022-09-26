import { html, css, LitElement } from 'lit';

export default class KemetAvatars extends LitElement {
  static get styles() {
    return [
      css`
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

        :host([border]) ::slotted(kemet-avatar) {
          border: var(--kemet-avatars-border, 4px solid var(--kemet-color-white));
        }
      `,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-avatars') || customElements.define('kemet-avatars', KemetAvatars);
