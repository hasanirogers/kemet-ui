import { html, LitElement } from 'lit';
import { emitEvent } from '../../utilities/misc/events.js';
import { stylesBase } from './styles.js';

/**
 * @since 1.2.0
 * @status stable
 *
 * @tagname kemet-password
 * @summary Gauges the strength of a password entered by the user.
 *
 * @prop {array} rules - An array of objects containing the rules the password must meet.
 * @prop {boolean} show - Controls the display of the component.
 * @prop {string} value - The value of the input component.
 * @prop {string} message - A message that is above the rules.
 * @prop {string} strength - The strength of the password. Weak | Better | Strong.
 * @prop {string} icon
 * @prop {number} iconSize
 *
 * @event kemet-password-status - Fires when there's a change in status.
 *
 * @csspart status - The status message.
 * @csspart indicator - The strength indicator bars.
 * @csspart message - A message to display to the user.
 * @csspart rules - A description of rules to follow.
 *
 */

export default class KemetPassword extends LitElement {
  static get styles() {
    return [stylesBase];
  }

  static get properties() {
    return {
      rules: { type: Array },
      show: { type: Boolean, reflect: true },
      value: { type: String },
      message: { type: String },
      strength: { type: String },
      icon: { type: String },
      iconSize: { type: Number },
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

      emitEvent(this, 'kemet-password-status', {
        status: this.status,
        validity: { meetsPasswordCriteria: this.status === 'success' },
        element: this,
      });
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
