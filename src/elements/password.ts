import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { emitEvent } from '../utilities/events';
import KemetField from './field';
import KemetInput from './input';
import { EnumStatuses, TypeStatus } from '../utilities/constants';
import KemetTextarea from './textarea';
import { stylesBase } from '../styles/elements/password';
import './icon-bootstrap';


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
 * @event kemet-status-change - Fires when there's a change in status.
 *
 * @csspart status - The status message.
 * @csspart indicator - The strength indicator bars.
 * @csspart message - A message to display to the user.
 * @csspart rules - A description of rules to follow.
 *
 */

interface InterfaceOptions {
  pattern: string;
  message: string;
  meetsCriteria?: boolean;
}

export interface InterfacePasswordStatusChangeDetails {
  status: TypeStatus;
  meetsPasswordCriteria: boolean;
  element: KemetPassword;
}

@customElement('kemet-password')
export default class KemetPassword extends LitElement {
  static styles = [stylesBase];

  @property({ type: Array })
  rules: InterfaceOptions[] = [
    { pattern: '(?=.{8,}$)', message: 'At least 8 characters long' },
    { pattern: '(?=.*[a-z])(?=.*[A-Z])', message: 'Uppercase and lowercase' },
    { pattern: '(?=.*[0-9])', message: 'At least one number (0-9)' },
  ];

  @property({ type: Boolean, reflect: true })
  show: boolean;

  @property({ type: String })
  value: string;

  @property({ type: String })
  message: string = 'Please make sure you meet all the requirements.';

  @property({ type: String })
  strength: string;

  @property({ type: String })
  icon: string = 'check2';

  @property({ type: Number })
  iconSize: number = 18;

  @state()
  status: TypeStatus;

  @state()
  field: KemetField;

  @state()
  input: KemetInput | KemetTextarea;

  firstUpdated() {
    // elements
    this.field = this.closest('kemet-field');
    this.input = this.field.querySelector('[slot="input"]');

    // events listeners
    this.input.addEventListener('kemet-input', this.handleInput.bind(this));
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
   * @returns {TemplateResult<1>[]} the criteria rules
   */
  makeRules(): TemplateResult<1>[] {
    if (this.input) {
      return this.rules.map((rule, index) => {
        const regExp = new RegExp(rule.pattern);
        const meetsCriteria = regExp.test(this.input.value);
        this.rules[index].meetsCriteria = meetsCriteria;
        return html`<li>${this.makeCheckIcon(meetsCriteria)} ${rule.message}</li>`;
      });
    }

    return null;
  }

  /**
   * Makes the check icon if the criteria has been met
   * @param {boolean} meetsCriteria
   * @private
   * @returns {TemplateResult} an icon component
   */
  makeCheckIcon(meetsCriteria: boolean): TemplateResult {
    if (meetsCriteria) {
      return html`<kemet-icon-bootstrap icon=${this.icon} size=${this.iconSize}></kemet-icon-bootstrap>`;
    }

    return null;
  }

  /**
   * Handles the kemet-input-input event
   * @param {*} event
   * @private
   */
  handleInput(event: CustomEvent) {
    this.value = event.detail.value;
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
        this.status = EnumStatuses.Error;
      }

      if (metRulesPercentage > 0.33 && metRulesPercentage <= 0.67) {
        this.strength = 'better';
        this.status = EnumStatuses.Error;
      }

      if (metRulesPercentage > 0.67) {
        this.strength = 'strong';
        this.status = EnumStatuses.Success;
      }

      emitEvent(this, 'kemet-status-change', {
        status: this.status,
        meetsPasswordCriteria: this.status === EnumStatuses.Success,
        element: this,
      });
    }, 1);
  }

  /**
   * Determines whether to show or hide the component
   * @private
   */
  visibility() {
    this.show = this.value.length > 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-password': KemetPassword
  }
}
