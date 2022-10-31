import { html, css, LitElement } from 'lit';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-badge
 * @summary Badges display the status of information.
 *
 * @prop {string} status - The status of the badge
 * @prop {boolean} circle - Displays the badge in a circle
 * @prop {boolean} pill - Rounds the corners on the badge
 * @prop {number} circlePadding - Padding on the badge as a circle
 *
 * @cssproperty --kemet-badge-padding - The padding of the badge. Default: 10px.
 *
 */

export default class KemetBadge extends LitElement {
  static get styles() {
    return [
      css`
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
      `,
    ];
  }

  static get properties() {
    return {
      status: {
        type: String,
        reflect: true,
      },
      circle: {
        type: Boolean,
        reflect: true,
      },
      pill: {
        type: Boolean,
        reflect: true,
      },
      circlePadding: {
        type: Number,
        attribute: 'circle-padding',
      },
    };
  }

  constructor() {
    super();

    this.status = 'primary';
    this.pill = false;
    this.circle = false;
    this.circlePadding = 0;
  }

  render() {
    return html`<slot @slotchange=${() => this.handleSlotChange()}></slot>`;
  }

  handleSlotChange() {
    if (this.circle) {
      this.style.height = `${this.offsetWidth + this.circlePadding}px`;
      this.style.width = `${this.offsetWidth + this.circlePadding}px`;
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-badge') || customElements.define('kemet-badge', KemetBadge);
