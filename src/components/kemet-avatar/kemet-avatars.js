import { html, css, LitElement } from 'lit';

/**
 * @since 1.4.0
 * @status stable
 *
 * @tagname kemet-avatars
 * @summary Groups multiple avatars.
 *
 * @cssproperty --kemet-avatars-squeeze - The space between avatars. Default: -1.5rem.
 *
 */

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
      `,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-avatars') || customElements.define('kemet-avatars', KemetAvatars);
