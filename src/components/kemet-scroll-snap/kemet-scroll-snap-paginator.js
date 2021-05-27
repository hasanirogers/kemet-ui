import { html, css, LitElement } from 'lit';

const keyCodes = {
  ENTER: 13,
  SPACE: 32,
  ESC: 27,
};

export class KemetScrollSnapPaginator extends LitElement {
  static get properties() {
    return {
      slides: {
        type: Array,
      },
      icon: {
        type: String,
      },
      hideFocusedLinks: {
        type: Boolean,
      },
      useNumberPages: {
        type: Boolean,
        reflect: true,
        attribute: 'use-number-pages',
      },
      useLabelPages: {
        type: Boolean,
        reflect: true,
        attribute: 'use-label-pages',
      },
    };
  }

  constructor() {
    super();

    this.slides = [];
    this.icon = '•';
    this.hideFocusedLinks = false;
    this.useNumberPages = false;
    this.useLabelPages = false;
  }

  static get styles() {
    return css`
      :host {
        margin: auto;
      }
    `;
  }

  firstUpdated() {
    const scrollSnapElement = this.closest('kemet-scroll-snap');

    if (scrollSnapElement) {
      scrollSnapElement.addEventListener('kemet-scroll-snap-make-slides', (event) => {
        this.slides = event.detail;
      });
    }
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <nav>${this.makePagination()}</nav>
    `;
  }

  makePagination() {
    let counter = 0;

    if (this.slides) {
      return this.slides.map((slide) => {
        counter = counter += 1;

        if (slide.focused) {
          return html`
            <span>${this.pageDisplay(slide, counter)}</span>
          `;
        }

        return html`
          <span
            class="link"
            tabindex="0"
            @keyup="${event => this.handleKeyboardInput(event, slide.id)}"
            @click=${() => this.slideLink(slide.id)} aria-label="${slide.label}">
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

    return this.icon;
  }

  slideLink(index) {
    this.dispatchEvent(new CustomEvent('kemet-scroll-snap-focus', {
      bubbles: true,
      composed: true,
      detail: index,
    }));
  }

  handleKeyboardInput(event, id) {
    if (event.keyCode === keyCodes.ENTER || event.keyCode === keyCodes.SPACE) {
      this.slideLink(id);
    }
  }
}

window.customElements.define('kemet-scroll-snap-paginator', KemetScrollSnapPaginator);
