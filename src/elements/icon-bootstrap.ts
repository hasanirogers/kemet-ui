import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('kemet-icon-bootstrap')
export default class KemetIconBootstrap extends LitElement {
  @property() icon: string = 'code';
  @property() version: string = '1.11.3'; // Default to stable version
  @property() size: number = 24;

  private static fontFaceLoaded = new Map<string, boolean>();
  private static iconStylesCache = new Map<string, CSSStyleSheet>();
  private static resolvedVersions = new Map<string, string>();
  private stylesLoaded = false;

  async connectedCallback() {
    super.connectedCallback();
    await this._loadBootstrapStyles();
  }

  private async _resolveVersion(version: string): Promise<string> {
    // If it's already a specific version, return it
    if (version !== 'latest' && /^\d+\.\d+\.\d+/.test(version)) {
      return version;
    }

    // Check cache
    if (KemetIconBootstrap.resolvedVersions.has(version)) {
      return KemetIconBootstrap.resolvedVersions.get(version)!;
    }

    try {
      // Fetch without version to get redirected to latest
      const response = await fetch('https://unpkg.com/bootstrap-icons/package.json');
      if (!response.ok) throw new Error('Failed to resolve version');

      const pkg = await response.json();
      const resolvedVersion = pkg.version;

      KemetIconBootstrap.resolvedVersions.set(version, resolvedVersion);
      return resolvedVersion;
    } catch (error) {
      console.warn('Failed to resolve Bootstrap Icons version, using 1.11.3:', error);
      return '1.11.3'; // Fallback to known stable version
    }
  }

  private async _loadBootstrapStyles() {
    if (this.stylesLoaded) return;

    try {
      // Resolve version if needed
      const resolvedVersion = await this._resolveVersion(this.version);
      const cacheKey = resolvedVersion;

      // Load font-face in light DOM (only once per version)
      if (!KemetIconBootstrap.fontFaceLoaded.get(cacheKey)) {
        await this._loadFontFaceInDocument(resolvedVersion);
        KemetIconBootstrap.fontFaceLoaded.set(cacheKey, true);
      }

      // Load icon classes in shadow DOM
      let iconSheet = KemetIconBootstrap.iconStylesCache.get(cacheKey);

      if (!iconSheet) {
        const response = await fetch(
          `https://unpkg.com/bootstrap-icons@${resolvedVersion}/font/bootstrap-icons.min.css`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let cssText = await response.text();

        // Remove @font-face rules (already in light DOM)
        cssText = cssText.replace(/@font-face\s*{[^}]*}/g, '');

        iconSheet = new CSSStyleSheet();
        await iconSheet.replace(cssText);
        KemetIconBootstrap.iconStylesCache.set(cacheKey, iconSheet);
      }

      this.shadowRoot!.adoptedStyleSheets = [
        ...this.shadowRoot!.adoptedStyleSheets,
        iconSheet
      ];

      this.stylesLoaded = true;
      this.requestUpdate();
    } catch (error) {
      console.error('Failed to load Bootstrap Icons:', error);
      this.requestUpdate();
    }
  }

  private async _loadFontFaceInDocument(resolvedVersion: string) {
    try {
      const response = await fetch(
        `https://unpkg.com/bootstrap-icons@${resolvedVersion}/font/bootstrap-icons.min.css`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const cssText = await response.text();

      // Extract ONLY @font-face rules
      const fontFaceMatches = cssText.match(/@font-face\s*{[^}]*}/g);
      if (!fontFaceMatches) return;

      // Fix relative URLs to absolute
      const baseUrl = `https://unpkg.com/bootstrap-icons@${resolvedVersion}/font/`;
      let fontFaceCss = fontFaceMatches.join('\n');
      fontFaceCss = fontFaceCss.replace(/url\(["']?\.\/fonts\//g, `url("${baseUrl}fonts/`);
      fontFaceCss = fontFaceCss.replace(/url\(["']?fonts\//g, `url("${baseUrl}fonts/`);

      // Add to document head
      const styleId = `bootstrap-icons-fonts-${resolvedVersion}`;
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = fontFaceCss;
        document.head.appendChild(style);
      }
    } catch (error) {
      console.error('Failed to load Bootstrap Icons fonts:', error);
      throw error;
    }
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <i class="bi bi-${this.icon}" style="font-size: ${this.size}px;"></i>
    `;
  }
}
