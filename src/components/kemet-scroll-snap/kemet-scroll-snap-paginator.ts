import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../../utilities/misc/events';
import { stylesScrollSnapPaginator } from './styles';

/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-scroll-snap-paginator
 * @summary The scroll snap's pagination.
 *
 * @prop {array} slides - Information about each slide.
 * @prop {string} icon - A string representing which icon to use for pagination. Supports icons used in kemet-icon.
 * @prop {number} size - The size in pixels of the icons.
 * @prop {boolean} center - Determines whether to center the pagination items.
 * @prop {boolean} hideFocusedLinks - Will hide inactive pagination items if set to true.
 * @prop {boolean} useNumberPages - If set to true, the pages in the pagination iterator will appear as a set of numbers.
 * @prop {boolean} useLabelPages - If set to true, the pages in the pagination iterator will appear as the label set on the slide.
 *
 * @cssproperty --kemet-scroll-snap-paginator-padding - The padding on the container. Default: 1rem 0.
 * @cssproperty --kemet-scroll-snap-paginator-gap - The space between pagination items. Default: 0.5rem.
 * @cssproperty --kemet-scroll-snap-paginator-link-color - The color of a linkable pagination item. Default: var(--kemet-color-primary).
 *
 * @event kemet-scroll-snap-focus - Fires when a set of slides are focused on.
 *
 */

@customElement('kemet-scroll-snap-paginator')
export default class KemetScrollSnapPaginator extends LitElement {
  static styles = [stylesScrollSnapPaginator];

  @property({ type: Array })
  slides: any[] = [];

  @property({ type: String })
  icon: string = 'circle-fill';

  @property({ type: Number })
  size: number = 16;

  @property({ type: Boolean, reflect: true })
  center: boolean;

  @property({ type: Boolean, attribute: 'hide-focused-links' })
  hideFocusedLinks: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'use-number-pages' })
  useNumberPages: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'use-label-pages' })
  useLabelPages: boolean = false;


  updated() {
    const scrollSnapElement = this.closest('kemet-scroll-snap');

    if (scrollSnapElement) {
      scrollSnapElement.addEventListener('kemet-scroll-snap-make-slides', (event: CustomEvent) => {
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
    emitEvent(this, 'kemet-scroll-snap-focus', index);
  }

  handleKeyboardInput(event, id) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.slideLink(id);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-scroll-snap-paginator': KemetScrollSnapPaginator
  }
}
