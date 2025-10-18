import { html, LitElement, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import styles from './styles.css?inline';


@customElement('docs-icons')
export default class DocsIcons extends LitElement {
  static styles = [unsafeCSS(styles)];

  @property({ type: String }) library: string = 'bootstrap';

  @state() slugs: string[] = [];
  @state() loading: boolean = true;

  firstUpdated() {
    this.getIcons();
  }

  render() {
    return html`<div>${this.makeIcons()}</div>`;
  }

  getIcons() {
    fetch(this.getUrl())
      .then(response => response.text())
      .then(xmlString => (new DOMParser()).parseFromString(xmlString, 'text/xml'))
      .then((spriteMap) => {
        this.slugs = this.getSlugs(spriteMap);
        this.loading = false;
      });
  }

  getUrl(){
    let url: string;

    switch (this.library) {
      case 'bootstrap': url = 'https://unpkg.com/bootstrap-icons@latest/bootstrap-icons.svg'; break;
      case 'lucide': url = 'https://unpkg.com/lucide-static@latest/font/lucide.svg'; break;
      default: url = 'https://unpkg.com/bootstrap-icons@latest/bootstrap-icons.svg'; break;
    }

    return url;
  }

  getSlugs(spriteMap) {
    if (this.library === 'lucide') {
      const icons = spriteMap.documentElement.querySelectorAll('glyph');
      const slugs = [];

      icons.forEach((icon) => {
        slugs.push(icon.getAttribute('glyph-name').replace(/^a+-/, ''));
      });

      return slugs;
    }


    const icons = spriteMap.documentElement.querySelectorAll('symbol');
    const slugs: any[] = [];

    icons.forEach((icon) => {
      slugs.push(icon.getAttribute('id').replace(/^\d+-/, ''));
    });

    return slugs;
  }

  makeIcons() {
    if (this.loading) {
      return html`<div class="kemet-icons">loading...</div>`;
    }

    return html`
      <ul class="kemet-icons">
        ${this.slugs.map(slug => html`
          <li>
            <figure>
              ${this.library === 'bootstrap' ? html`<kemet-icon-bootstrap icon=${slug} size="32"></kemet-icon-bootstrap>` : null}
              ${this.library === 'lucide' ? html`<kemet-icon-lucide icon=${slug} size="32"></kemet-icon-lucide>` : null}
              <figcaption>${slug}</figcaption>
            </figure>
          </li>
        `)}
      </ul>
    `;
  }
}
