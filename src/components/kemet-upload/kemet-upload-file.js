import { html, css, LitElement } from 'lit';
import { stylesLoaders } from './kemet-upload-file.loaders.styles.js';

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // eslint-disable-next-line no-restricted-properties
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export default class KemetUploadFile extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --kemet-upload-file-ripple-color: var(--kemet-color-primary);

          color: var(--kemet-upload-file-color, var(--kemet-color-gray7));
          display: grid;
          gap: 1rem;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          padding: var(--kemet-upload-file-padding, 0.5rem 1rem);
          border: var(--kemet-upload-file-border, 1px solid var(--kemet-color-primary));
        }

        :host([status='error']) {
          border: 1px solid var(--kemet-color-error);
        }

        :host([status='complete']) {
          border: 1px solid var(--kemet-color-success);
        }

        h3 {
          margin: 0;
        }

        .percentage {
          font-size: clamp(2rem, 3vw, 2.5rem);
          align-self: center;
          justify-self: center;
        }

        .indicator {
          transform: scale(0.8);
        }

        :host([status='complete']) .message,
        :host([status='complete']) .indicator {
          color: var(--kemet-color-success);
        }

        :host([status='error']) .message,
        :host([status='error']) .indicator {
          color: var(--kemet-color-error);
        }
      `,
      stylesLoaders,
    ];
  }

  static get properties() {
    return {
      /**
       * The name of the file
       */
      name: {
        type: String,
      },
      /**
       * The number of bytes loaded
       */
      loaded: {
        type: Number,
      },
      /**
       * The file size in bytes
       */
      size: {
        type: Number,
      },
      /**
       * The file type
       */
      type: {
        type: String,
      },
      /**
       * The status of the file. Values are complete | uploading | error.
       */
      status: {
        type: String,
        reflect: true,
      },
      /**
       * A percentage of file completion that's calculated by the loaded property
       */
      percent: {
        type: Number,
      },
      /**
       * An error message to give to users
       */
      message: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.loaded = 0;
    this.size = 0;
    this.percent = 0;
  }

  updated() {
    this.percent = this.calculatePercent();
  }

  render() {
    return html`
      <div class="percentage" part="percentage">
        <span>${this.percent}%</span>
      </div>
      <div>
        <h3 part="filename">${this.name}</h3>
        <span part="loaded">${formatBytes(this.loaded)} / ${formatBytes(this.size)}</span>
        ${this.message ? html`<div class="message" part="message">${this.message}</div>` : null}
      </div>
      <div class="indicator" part="indicator">
        ${this.getStatusIcon()}
      </div>
    `;
  }

  calculatePercent() {
    const percent = Math.round((this.loaded * 100.0) / this.size);
    return percent > 100 ? 100 : percent;
  }

  getStatusIcon() {
    if (this.status === 'uploading') {
      return html`<div class="lds-ripple"><div></div><div></div></div>`;
    }

    if (this.status === 'complete') {
      return html`<kemet-icon icon="check-circle" size="48"></kemet-icon>`;
    }

    if (this.status === 'error') {
      return html`<kemet-icon icon="exclamation-circle" size="48"></kemet-icon>`;
    }

    return null;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-upload-file') || customElements.define('kemet-upload-file', KemetUploadFile);
