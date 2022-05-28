import { html, css, LitElement } from 'lit';
import '../kemet-icon/kemet-icon.js';
import { FormSubmitController } from '../../utilities/controllers/forms.js';

export default class KemetButton extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: var(--kemet-button-font-size, inherit);
          color: var(--kemet-button-color, var(--kemet-color-white));
          width: var(--kemet-button-width, auto);
          height: var(--kemet-button-height, auto);
          border: var(--kemet-button-border, 0);
          border-radius: var(--kemet-button-border-radius, 0);
          transition: filter var(--kemet-button-transition-speed, 300ms) ease;
          background-color: var(--kemet-button-background-color, var(--kemet-color-primary));
        }

        :host(:hover:not([disabled])) {
          filter: brightness(var(--kemet-button-hover-brightness, 1.25));
        }

        :host([disabled]) {
          opacity: var(--kemet-button-disabled-opacity, 0.5);
        }

        .button {
          cursor: pointer;
          text-decoration: none;
          display: flex;
          gap: var(--kemet-button-gap, 0.5rem);
          align-items: center;
          color: inherit;
          font-size: inherit;
          padding: var(--kemet-button-padding, 1rem 1.25rem);
          border: 0;
          background: none;
        }

        :host([disabled]) .button {
          cursor: not-allowed;
        }

        :host([type='text']) {
          --kemet-button-color: var(--kemet-color-primary);
          --kemet-button-background-color: none;
        }

        :host([type='text']:hover) {
          text-decoration: var(--kemet-button-hover-decoration, underline);
        }

        :host([type='circle']) {
          --kemet-button-border-radius: 50%;
          --kemet-button-width: var(--kemet-button-circle-size, 50px);
          --kemet-button-height: var(--kemet-button-circle-size, 50px);
        }

        :host([type='rounded']) {
          --kemet-button-border-radius: var(--kemet-button-rounded-amount, 6px);
        }

        :host([type='pill']) {
          --kemet-button-border-radius: 10rem;
        }

        :host([outlined]) {
          --kemet-button-color: var(--kemet-color-primary);
          --kemet-button-background-color: var(--kemet-color-white);
          --kemet-button-border: var(--kemet-button-border-width, 1px) var(--kemet-button-border-style, solid) var(--kemet-button-border-color, var(--kemet-color-primary));
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Determines whether or not the button is active
       */
      active: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Is true when the button is hovered
       */
      hover: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Is true when the button is focused
       */
      focused: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The url a button should link too
       */
      link: {
        type: String,
      },
      /**
       * Outline style for a button
       */
      outlined: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Determines whether not a button is disabled
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Controls the type of button
       * standard | text | circle | rounded | pill
       */
      type: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.addEventListener('click', this.handleClick.bind(this));
    this.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.addEventListener('mouseout', this.handleMouseOut.bind(this));
    this.addEventListener('blur', this.handleBlur.bind(this));
    this.addEventListener('keyup', event => this.handleKeyUp(event));

    this.type = 'standard';
    this.outline = false;
    this.disable = false;

    /**
      * Used only for form reactive controller
      */
    this.formSubmitController = new FormSubmitController(this);
  }

  render() {
    if (this.link && !this.disabled) {
      return html`
        <a href=${this.link} class="button" role="button" part="button">
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </a>
      `;
    }

    return html`
      <button class="button" part="button" ?disabled=${this.disabled} aria-disabled=${this.disabled ? 'true' : 'false'}>
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </button>
    `;
  }

  /**
   * Sets hover to true onMouseOver
   * @private
   */
  handleMouseOver() {
    this.hover = true;
  }

  /**
   * Sets hover to false onMouseOut
   * @private
   */
  handleMouseOut() {
    this.hover = false;
  }

  /**
   * Handles click behavior
   * @private
   */
  handleClick() {
    this.hover = false;
    this.active = true;

    setTimeout(() => {
      this.active = false;
    }, 300);

    if (this.shadowRoot.querySelector('button')) {
      this.formSubmitController.submit(this);
    }
  }

  /**
   * Handles blur
   * @private
   */
  handleBlur() {
    this.focused = false;
    this.active = false;
    this.hover = false;
  }

  /**
   * Handles keyup
   * @private
   * @param {object} event - event object
   */
  handleKeyUp(event) {
    if (event.key === 'Tab') {
      this.focused = true;
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-button') || customElements.define('kemet-button', KemetButton);
