import { html, css, LitElement } from 'lit';

export class KemetScrollSnapPaginator extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: auto;
        padding: var(--kemet-scroll-snap-paginator-padding, 1rem 0);
      }

      nav {
        display: flex;
        gap: var(--kemet-scroll-snap-paginator-gap, 0.5rem);
      }

      :host([center]) nav {
        justify-content: center;
      }

      .link {
        cursor: pointer;
        color: var(--kemet-scroll-snap-paginator-link-color, var(--kemet-color-primary));
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Information about each slide.
       */
      slides: {
        type: Array,
      },
      /**
       * A string representing which icon to use for pagination. Supports icons used in kemet-icon.
       */
      icon: {
        type: String,
      },
      /**
       * The size in pixels of the icons.
       */
      size: {
        type: Number,
      },
      /**
       * Determines whether to center the pagination items.
       */
      center: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Will hide inactive pagination items if set to true.
       */
      hideFocusedLinks: {
        type: Boolean,
        attribute: 'hide-focused-links',
      },
      /**
       * If set to true, the pages in the pagination iterator will appear as a set of numbers.
       */
      useNumberPages: {
        type: Boolean,
        reflect: true,
        attribute: 'use-number-pages',
      },
      /**
       * If set to true, the pages in the pagination iterator will appear as the label set on
       * the slide.
       */
      useLabelPages: {
        type: Boolean,
        reflect: true,
        attribute: 'use-label-pages',
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.slides = [];
    this.icon = 'circle-fill';
    this.size = 16;
    this.hideFocusedLinks = false;
    this.useNumberPages = false;
    this.useLabelPages = false;
  }

  updated() {
    const scrollSnapElement = this.closest('kemet-scroll-snap');

    if (scrollSnapElement) {
      scrollSnapElement.addEventListener('kemet-scroll-snap-make-slides', (event) => {
        this.slides = event.detail;
      });
    }
  }

  render() {
    return html`
      <nav part="nav">${this.makePagination()}</nav>
    `;
  }

  makePagination() {
    let counter = 0;

    if (this.slides) {
      return this.slides.map((slide) => {
        counter = counter += 1;

        if (slide.focused) {
          return html`
            <span part="span">${this.pageDisplay(slide, counter)}</span>
          `;
        }

        return html`
          <span
            class="link"
            tabindex="0"
            role="button"
            @keyup="${event => this.handleKeyboardInput(event, slide.id)}"
            @click=${() => this.slideLink(slide.id)}
            aria-label="${slide.label}">
            ${this.pageDisplay(slide, counter)}
          </span>
        `;
      });
    }

    return null;
  }

  pageDisplay(slide, visibleIndex) {
    if (this.useNumberPages) {
      return visibleIndex;
    }

    if (this.useLabelPages) {
      return slide.label;
    }

    return html`<kemet-icon icon=${this.icon} size=${this.size}></kemet-icon>`;
  }

  slideLink(index) {
    /**
     * Fires when a set of slides are focused on.
     */
    this.dispatchEvent(new CustomEvent('kemet-scroll-snap-focus', {
      bubbles: true,
      composed: true,
      detail: index,
    }));
  }

  handleKeyboardInput(event, id) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.slideLink(id);
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-scroll-snap-paginator') || customElements.define('kemet-scroll-snap-paginator', KemetScrollSnapPaginator);
