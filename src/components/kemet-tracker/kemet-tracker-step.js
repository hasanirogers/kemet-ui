import { html, css, LitElement } from 'lit';

export default class KemetTrackerStep extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --kemet-tracker-step-dot-size: 50px;
          --kemet-tracker-step-dot-size-mobile: 25px;
          --kemet-tracker-step-dot-gap: 4px;
          --kemet-tracker-step-standard-line-weight: 1px;
          --kemet-tracker-step-completed-line-weight: 3px;
          --kemet-tracker-step-dot-transition: all 300ms ease-in-out;

          position: relative;
          width: 100%;
          text-align: center;
        }

        .dot {
          font-size: var(--kemet-tracker-step-dot-font-size, 90%);
          color: var(--kemet-tracker-step-dot-color, var(--kemet-color-primary));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          width: var(--kemet-tracker-step-dot-size);
          height: var(--kemet-tracker-step-dot-size);
          border-radius: 100%;
          transition: var(--kemet-tracker-step-dot-transition);
          background-color: var(--kemet-tracker-step-dot-background-color, var(--kemet-color-white));
        }

        .dot::after {
          content: "";
          width: unset;
          height: unset;
          position: absolute;
          top: var(--kemet-tracker-step-dot-gap);
          left: var(--kemet-tracker-step-dot-gap);
          right: var(--kemet-tracker-step-dot-gap);
          bottom: var(--kemet-tracker-step-dot-gap);
          z-index: -1;
          border-radius: 100%;
          transition: var(--kemet-tracker-step-dot-transition);
          border: var(--kemet-tracker-step-dot-border, 1px solid var(--kemet-color-primary));
          background-color: var(--kemet-tracker-step-dot-fill-color, transparent);
        }

        :host([completed]) .dot {
          color: var(--kemet-tracker-step-completed-color, var(--kemet-color-white));
        }

        :host([completed]) .dot::after {
          border: 0;
          background-color: var(--kemet-tracker-step-completed-fill-color, var(--kemet-color-success));
        }

        :host([current]) .dot.animate {
          color: var(--kemet-tracker-step-current-color, var(--kemet-color-white));
        }

        :host([current]) .dot.animate::after {
          border: 0;
          background-color: var(--kemet-tracker-step-current-fill-color, var(--kemet-color-primary));
        }

        :host([mobile]) .dot {
          width: var(--kemet-tracker-step-dot-size-mobile);
          height: var(--kemet-tracker-step-dot-size-mobile);
        }

        .line {
          display: block;
          position: absolute;
          left: 50%;
          right: 0;
          bottom: 0;
          width: 100%;

          /* standard */
          top: calc((var(--kemet-tracker-step-dot-size) - var(--kemet-tracker-step-standard-line-weight)) / 2);
          height: var(--kemet-tracker-step-standard-line-weight);
          background-color: var(--kemet-tracker-step-line-color, var(--kemet-color-primary));
        }

        .line.completed {
          width: 100%;
          transform: scaleX(0);
          transform-origin: left center;
          top: calc((var(--kemet-tracker-step-dot-size) - var(--kemet-tracker-step-completed-line-weight)) / 2);
          height: var(--kemet-tracker-step-completed-line-weight);
          background-color: var(--kemet-tracker-step-completed-line-color, var(--kemet-color-primary));
          animation-name: grow;
          animation-delay: 1s;
          animation-duration: 600ms;
          animation-fill-mode: forwards;
        }

        :host([mobile]) .line {
          top: calc((var(--kemet-tracker-step-dot-size-mobile) - var(--kemet-tracker-step-standard-line-weight)) / 2);
        }

        :host([mobile]) .line.completed {
          top: calc((var(--kemet-tracker-step-dot-size-mobile) - var(--kemet-tracker-step-completed-line-weight)) / 2);
        }

        @keyframes grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * The current step number
       */
      step: {
        type: Number,
      },
      /**
       * Determines whether or not a step renders as complete
       */
      completed: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Determines whether or not a step renders as the current step
       */
      current: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Is automatically added to the last step
       */
      last: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Determines if a step should render as mobile
       */
      mobile: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Hides the label inside of a dot
       */
      hideDotContent: {
        type: Boolean,
        reflect: true,
        attribute: 'hide-dot-content',
      },
      /**
       * The icon size for the completed check mark
       */
      completedSize: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.completedSize = 16;
  }

  firstUpdated() {
    this.tracker = this.closest('kemet-tracker');
  }

  render() {
    return html`
      ${this.makeLine()}
      ${this.makeCompletedLine()}
      <div class="dot" part="dot">${this.makeDotContent()}</div>
      ${this.makeSlotContent()}
    `;
  }

  makeLine() {
    if (!this.last) {
      return html`<div class="line" part="line"></div>`;
    }

    return null;
  }

  makeCompletedLine() {
    if (this.completed && !this.last) {
      return html`<div class="line completed" part="completed-line" @animationend=${() => this.handleCompletedLineEnd()}></div>`;
    }

    return null;
  }

  makeDotContent() {
    if (this.completed && !this.mobile && !this.hideDotContent) {
      return html`
        <kemet-icon icon="check2" size=${this.completedSize}></kemet-icon>
      `;
    }

    if (!this.mobile && !this.hideDotContent) {
      return html`
        <span>${this.step}/${this.tracker?.total}</span>
      `;
    }

    return null;
  }

  makeSlotContent() {
    if (!this.mobile) {
      return html`<slot></slot>`;
    }

    return null;
  }

  handleCompletedLineEnd() {
    const currentDot = this.tracker.querySelector('[current]').shadowRoot.querySelector('.dot');

    if (currentDot) {
      currentDot.classList.add('animate');
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-tracker-step') || customElements.define('kemet-tracker-step', KemetTrackerStep);
