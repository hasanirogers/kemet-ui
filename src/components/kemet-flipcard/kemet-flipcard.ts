import { html, LitElement } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { stylesBase } from './styles';


/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-flipcard
 * @summary A card that has a front and back side which can be flipped.
 *
 * @prop {string} axis
 * @prop {boolean} flipped
 * @prop {boolean} flipOnHover
 * @prop {string} height
 * @prop {boolean} measure
 *
 * @slot front - The front of the card.
 * @slot back - The back of the card.
 *
 * @csspart front - The front of the card.
 * @csspart back - The back of the card.
 * @csspart wrapper - A container for both front and back of the card.
 *
 * @cssproperty --kemet-flipcard-front-color - The text color for the front of the card.
 * @cssproperty --kemet-flipcard-back-color - The text color for the back of the card.
 * @cssproperty --kemet-flipcard-front-background-color - The background color for the front of the card.
 * @cssproperty --kemet-flipcard-back-background-color - The background color for the back of the card.
 * @cssproperty --kemet-flipcard-border - The border on the front and back of the card.
 * @cssproperty --kemet-flipcard-border-radius - The border radius on the front and back of the card.
 * @cssproperty --kemet-flipcard-ratio - The aspect ratio of the card.
 *
 */

@customElement('kemet-flipcard')
export default class KemetFlipcard extends LitElement {
  static styles = [stylesBase];

  @property({ type: String, reflect: true })
  axis: string = 'horizontal';

  @property({ type: Boolean, reflect: true })
  flipped: boolean = false;

  @property({ type: Boolean, attribute: 'flip-on-hover' })
  flipOnHover: boolean = false;

  @property({ type: String })
  height: string = 'auto';

  @property({ type: Boolean })
  measure: boolean = false;

  @query('[name="front"]')
  frontChildren: HTMLSlotElement;

  @query('[name="back"]')
  backChildren: HTMLSlotElement;

  @state()
  frontElement: any;

  @state()
  backElement: any;

  constructor() {
    super();

    this.addEventListener('kemet-flipcard-flipped', () => {
      this.flipped = !this.flipped;
    });
  }

  firstUpdated() {
    if (this.frontChildren) [this.frontElement] = this.frontChildren.assignedNodes({ flatten: true });
    if (this.backChildren) [this.backElement] = this.backChildren.assignedNodes({ flatten: true });

    window.addEventListener('resize', this.determineHeight.bind(this));
  }

  updated() {
    this.determineHeight();
  }

  render() {
    return html`
      <section
        tabindex="0"
        part="wrapper"
        @blur=${() => { if (this.flipOnHover) this.flipped = false; }}
        @focus=${() => { if (this.flipOnHover) this.flipped = true; }}
        @mouseover=${() => { if (this.flipOnHover) this.flipped = true; }}
        @mouseout=${() => { if (this.flipOnHover) this.flipped = false; }}>
        <div id="front" class="front" part="front">
          <slot name="front" @slotchange="${() => this.determineHeight()}"></slot>
        </div>
        <div id="back" class="back" part="back">
          <slot name="back" @slotchange="${() => this.determineHeight()}"></slot>
        </div>
      </section>
    `;
  }

  determineHeight() {
    // setTimeout is need to simulate a DOM repaint
    // without the repaint, offsetHeight on Custom Elements = 0
    // so this is needed for 'measure' to work correctly

    setTimeout(() => {
      if (this.measure) {
        if (this.frontElement?.offsetHeight > this.backElement?.offsetHeight) {
          this.height = `${this.frontElement?.offsetHeight}px`;
        } else {
          this.height = `${this.backElement?.offsetHeight}px`;
        }

        this.style.height = this.height;
      } else {
        this.style.removeProperty('height');
      }
    }, 0);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-flipcard': KemetFlipcard
  }
}
