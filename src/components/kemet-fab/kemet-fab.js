import { html, css, LitElement } from 'lit';

export default class KemetFAB extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --kemet-fab-size: 50px;

          display: inline-block;
          position: relative;
        }

        button {
          color: var(--kemet-fab-color, var(--kemet-color-white));
          font-size: inherit;
          display: inline-flex;
          padding: 0;
          position: relative;
          min-height: var(--kemet-fab-size);
          min-width: var(--kemet-fab-size);
          max-width: var(--kemet-fab-size);
          align-items: center;
          justify-content: flex-start;
          transition: all 0.4s ease;
          border: none;
          background-color: var(--kemet-fab-background-color, var(--kemet-color-primary));
        }

        :host([outlined]) button {
          color: var(--kemet-fab-outlined-color, var(--kemet-color-primary));
          border: var(--kemet-fab-outlined-border, 1px solid var(--kemet-color-primary));
          background-color: transparent;
        }

        :host([pill]) button {
          border-radius: var(--kemet-fab-pill-radius, 10rem);
        }

        button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          transition: background-color 0.3s ease-in-out;
          background-color: var(--kemet-fab-background-color, var(--kemet-color-primary));
        }

        :host([pill]) button::before {
          border-radius: var(--kemet-fab-pill-radius, 10rem);
        }

        :host([outlined]) button::before {
          border: var(--kemet-fab-outline-border, 1px solid var(--kemet-color-primary));
          background-color: transparent;
        }

        :host([expanded]) button {
          max-width: 99rem;
          padding: 0 1.35rem 0 0.25rem;
        }

        :host([disabled]) button {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .icon {
          width: var(--kemet-fab-size);
          height: var(--kemet-fab-size);
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
        }

        .text {
          color: var(--kemet-fab-color, var(--kemet-color-white));
          z-index: 1;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
        }

        :host([outlined]) .text {
          color: var(--kemet-fab-outlined-color, var(--kemet-color-primary));
        }

        :host([expanded]) .text {
          opacity: 1;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * The expanded state of the button
       */
      expanded: {
        type: Boolean,
        reflect: true,
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
       * Displays the fab with rounded corners
       */
      pill: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The distance, in pixels, where the fab should automatically expand
       */
      expandPoint: {
        type: Number,
        attribute: 'expand-point',
      },
      /**
       * The distance, in pixels, where the fab should automatically collapse
       */
      collapsePoint: {
        type: Number,
        attribute: 'collapse-point',
      },
    };
  }

  constructor() {
    super();

    this.outlined = false;
    this.disabled = false;
    this.expanded = false;
  }

  firstUpdated() {
    // events
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }

  render() {
    return html`
      <button class="button" part="button" ?disabled=${this.disabled} aria-disabled=${this.disabled ? 'true' : 'false'}>
        <span class="icon" part="icon">
          <slot name="icon"></slot>
        </span>
        <span class="text" part="text">
          <slot></slot>
        </span>
      </button>
    `;
  }

  handleMouseOver() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }

  handleMouseOut() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }

  handleScroll() {
    if (window.scrollY > this.expandPoint) {
      this.expanded = true;
    }

    if (window.scrollY < this.expandPoint) {
      this.expanded = false;
    }

    if (window.scrollY > this.collapsePoint) {
      this.expanded = false;
    }

    if (window.scrollY < this.collapsePoint) {
      this.expanded = true;
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-fab') || customElements.define('kemet-fab', KemetFAB);
