import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Typewriter from 'typewriter-effect/dist/core';
import { emitEvent } from '../utilities/events';

/**
 * @since 4.1.0
 * @status stable
 *
 * @tagname kemet-typewriter
 * @summary An element that types out content.
 *
 * @prop {string} content - The content to be typed.
 * @prop {number} delay - The delay between each character.
 * @prop {string} cursor - The cursor to be displayed.
 * @prop {boolean} loop - Whether to loop the content.
 * @prop {number} restartDelay - The delay before restarting the typewriter.
 *
 * @event kemet-completed - Fires when typewriter is completed
 *
 */

@customElement('kemet-typewriter')
export default class KemetTypewriter extends LitElement {
  @property({ type: String })
  content: string = '';

  @property({ type: Number })
  delay: number = 10;

  @property({ type: String })
  cursor: string = '';

  @property({ type: Boolean })
  loop: boolean = false;

  @property({ type: Number, attribute: 'restart-delay' })
  restartDelay: number = 1000;

  private typewriter!: Typewriter;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    const target = this.querySelector('kemet-typewriter-target') as HTMLElement;

    this.typewriter = new Typewriter(target, {
      cursor: this.cursor,
      loop: this.loop,
      delay: this.delay,
    });

    this.restartTypewriter();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has('content') ||
      changedProperties.has('delay') ||
      changedProperties.has('cursor') ||
      changedProperties.has('loop')
    ) {
      const target = this.querySelector('kemet-typewriter-target') as HTMLElement;

      if (this.typewriter) {
        this.typewriter.stop();
      }

      this.typewriter = new Typewriter(target, {
        cursor: this.cursor,
        loop: this.loop,
        delay: this.delay,
      });

      this.restartTypewriter();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    if (this.typewriter) {
      this.typewriter.stop();
    }
  }

  render() {
    return html`
      <kemet-typewriter-target></kemet-typewriter-target>
    `;
  }

  restartTypewriter() {
    if (!this.typewriter) return;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.typewriter
        .deleteAll(1)
        .typeString(this.content)
        .callFunction(() => {
          emitEvent(this, 'kemet-completed', { element: this });
        })
        .start();
    }, this.restartDelay);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-typewriter': KemetTypewriter;
  }
}
