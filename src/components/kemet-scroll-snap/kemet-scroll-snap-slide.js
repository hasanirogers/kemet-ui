import { html, css, LitElement } from 'lit';

export class KemetScrollSnapSlide extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        flex: 0 0 auto;
        width: var(--kemet-scroll-snap-slide-width, 100%);
        scroll-snap-align: var(--kemet-scroll-snap-slide-align, center);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Is true when the slide is fully visible in it's container.
       */
      focused: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Identifies the slide.
       */
      index: {
        type: String,
        reflect: true,
      },
      /**
       * Labels the slide.
       */
      label: {
        type: String,
        reflect: true,
      },
    };
  }

  updated() {
    this.addTabIndex();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  addTabIndex() {
    this.setAttribute('tabindex', '0');
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-scroll-snap-slide') || customElements.define('kemet-scroll-snap-slide', KemetScrollSnapSlide);
