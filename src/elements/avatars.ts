import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { stylesAvatars } from '../styles/elements/avatar';

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

@customElement('kemet-avatars')
export default class KemetAvatars extends LitElement {
  static styles = [stylesAvatars];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-avatars': KemetAvatars
  }
}
