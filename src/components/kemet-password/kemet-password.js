import { html, css, LitElement } from 'lit';

export default class KemetPassword extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          color: inherit;
          display: none;
        }

        :host([show]) {
          display: block;
        }

        p {
          margin: 1.6rem 0;
        }

        .status {
          display: grid;
          align-items: center;
          grid-template-columns: 1fr auto;
          line-height: 1;
          margin-top: 0.8rem;
        }

        .status > span {
          text-transform: capitalize;
        }

        .status--weak,
        .status--better {
          color: var(--kemet-color-error);
        }

        .status--strong {
          color: var(--kemet-color-success);
        }

        .indicator {
          display: flex;
          gap: 0.4rem;
          margin: 0;
          list-style: none;
        }

        .indicator li {
          width: 1.6rem;
          height: 0.2rem;
          background-color: var(--fds-color--gray2);
        }

        .status--weak .indicator li:nth-child(1) {
          background-color: var(--kemet-color-error);
        }

        .status--better .indicator li:nth-child(1),
        .status--better .indicator li:nth-child(2) {
          background-color: var(--kemet-color-error);
        }

        .status--strong .indicator li {
          background-color: var(--kemet-color-success);
        }

        .rules {
          color: var(--kemet-color-primary);
          list-style: none;
          font-size: 90%;
          padding-left: 2rem;
        }

        .rules li {
          position: relative;
        }

        .rules kemet-icon {
          color: var(--kemet-color-success);
          position: absolute;
          left: -2.4rem;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * An array of objects containing the rules the password must meet
       */
      rules: {
        type: Array,
      },
      /**
       * Controls the display of the component
       */
      show: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The value of the input component
       */
      value: {
        type: String,
      },
      /**
       * A message that is above the rules
       */
      message: {
        type: String,
      },
      /**
       * The strength of the password. Weak | Better | Strong
       */
      strength: {
        type: String,
      },
      icon: {
        type: String,
      },
      iconSize: {
        type: Number,
      },
    };
  }

  constructor() {
    super();

    // managed properties
    this.rules = [
      { pattern: '(?=.{8,}$)', message: 'At least 8 characters long' },
      { pattern: '(?=.*[a-z])(?=.*[A-Z])', message: 'Uppercase and lowercase' },
      { pattern: '(?=.*[0-9])', message: 'At least one number (0-9)' },
    ];
    this.message = 'Please make sure you meet all the requirements.';
    this.icon = 'check2';
    this.iconSize = 16;
  }

  firstUpdated() {
    // standard properties
    this.field = this.closest('kemet-field');
    this.input = this.field.querySelector('[slot="input"]');

    // managed properties
    this.slug = this.field.slug;

    // events listeners
    this.input.addEventListener('kemet-input-input', this.handleInput.bind(this));
  }

  render() {
    return html`
      <div role="alert" aria-live="assertive">
        <div class="status status--${this.strength}" part="status">
          <span>${this.strength}</span>
          <ul class="indicator" part="indicator">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <p class="message" part="message">${this.message}</p>
        <ul class="rules" part="rules">
          ${this.makeRules()}
        </ul>
      </div>
    `;
  }

  /**
   * Makes the list of rules
   * @private
   * @returns {templateResults} the criteria rules
   */
  makeRules() {
    if (this.input) {
      const rules = this.rules.map((rule, index) => {
        const regExp = new RegExp(rule.pattern);
        const meetsCriteria = regExp.test(this.input.value);
        this.rules[index].meetsCriteria = meetsCriteria;
        return html`<li>${this.makeCheckIcon(meetsCriteria)} ${rule.message}</li>`;
      });

      return rules;
    }

    return null;
  }

  /**
   * Makes the check icon if the criteria has been met
   * @param {boolean} meetsCriteria
   * @private
   * @returns {templateResults} an icon component
   */
  makeCheckIcon(meetsCriteria) {
    if (meetsCriteria) {
      return html`<kemet-icon icon=${this.icon} size=${this.iconSize}></kemet-icon>`;
    }

    return null;
  }

  /**
   * Handles the kemet-input-input event
   * @param {*} event
   * @private
   */
  handleInput(event) {
    this.value = event.detail;
    this.setStrength();
    this.visibility();
  }

  /**
   * Determines the strength of the password
   * @private
   */
  setStrength() {
    // We use a setTimeout here because makeRules adds the meetsCriteria
    // property to the rules. We need that to be set by render() before
    // setting the Strength because the percentage calc is based on it
    setTimeout(() => {
      const totalRules = this.rules.length;
      const metRules = this.rules.filter(rule => rule.meetsCriteria).length;
      const metRulesPercentage = Math.round((metRules / totalRules) * 100) / 100;

      if (metRulesPercentage <= 0.33) {
        this.strength = 'weak';
        this.status = 'error';
      }

      if (metRulesPercentage > 0.33 && metRulesPercentage <= 0.67) {
        this.strength = 'better';
        this.status = 'error';
      }

      if (metRulesPercentage > 0.67) {
        this.strength = 'strong';
        this.status = 'success';
      }

      /**
       * Fires when there's a change in status.
       */
      this.dispatchEvent(
        new CustomEvent('kemet-password-status', {
          bubbles: true,
          composed: true,
          detail: {
            status: this.status,
            validity: { meetsPasswordCriteria: this.status === 'success' },
            element: this,
          },
        }),
      );
    }, 1);
  }

  /**
   * Determines whether to show or hide the component
   * @private
   */
  visibility() {
    if (this.value.length > 0) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-password') || customElements.define('kemet-password', KemetPassword);
