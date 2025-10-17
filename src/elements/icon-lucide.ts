import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { query } from 'lit/decorators/query.js';
import { repeat } from 'lit/directives/repeat.js';
import { stylesBase } from '../styles/elements/icon-lucide';

/**
 * @since 4.0.0
 * @status stable
 *
 * @tagname kemet-icon-lucide
 * @summary A versatile button that can be used either to submit a form, trigger an action, or link to content.
 *
 * @prop {string} icon - The name of the icon to display
 * @prop {string} version - The version of Lucide to use
 * @prop {number} size - The size of the icon
 *
 */

@customElement('kemet-icon-lucide')
export default class KemetIconLucide extends LitElement {
  static styles = [stylesBase];

  @property() icon: string = 'code';
  @property() version: string = 'latest';
  @property() size: number = 24;
  @query('svg[data-lucide]') svg!: SVGElement | null;

  render() {
    // Use repeat() with icon as the key to force node replacement when it changes.
    return repeat([this.icon], i => i, i => html`<i data-lucide=${i}></i>`);
  }

  async firstUpdated() {
    await this._initLucide();
    window.lucide?.createIcons({ root: this.renderRoot });
  }

  willUpdate(changed: Map<string, unknown>) {
    // Runs BEFORE render. Remove any prior Lucide SVG so Lit won’t try to diff into it.
    if (changed.has('icon') && this.svg) {
      this.svg.remove();
    }
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('icon')) {
      window.lucide?.createIcons({ root: this.renderRoot })
    }

    // setTimeout is the only way to get the svg after lucide has created it
    setTimeout(() => {
      const svg = this.shadowRoot.querySelector('svg');
      console.log(this.size);
      if (svg) {
        svg.style.width = `${this.size.toString()}px`;
        svg.style.height = `${this.size.toString()}px`;
      }
    }, 500);
  }

  private _initLucide(): Promise<void> {
    if (window.lucide) return Promise.resolve();
    const existing = Array.from(document.scripts).find(s => s.src.includes('unpkg.com/lucide@')) as HTMLScriptElement | undefined;
    if (existing) {
      return new Promise<void>(resolve => {
        if (window.lucide) return resolve();
        existing.addEventListener('load', () => resolve(), { once: true });
      });
    }
    return new Promise<void>((resolve, reject) => {
      const s = document.createElement('script');
      s.src = `https://unpkg.com/lucide@${this.version}`;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load Lucide'));
      document.head.appendChild(s);
    });
  }
}
