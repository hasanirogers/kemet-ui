import { html, css, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const preventDefaults = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export default class KemetUpload extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          color: var(--kemet-upload-color, var(--kemet-color-white));
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: var(--kemet-upload-height, 364px);
          border: var(--kemet-upload-border, 1rem solid var(--kemet-color-white));
          background-color: var(--kemet-upload-background-color, var(--kemet-color-primary));
        }

        :host([mobile]) {
          display: block;
          height: auto;
        }

        input {
          display: none;
        }

        .button {
          cursor: pointer;
          font-size: 1rem;
          display: block;
          color: var(--kemet-color-white);
          padding: 0.5rem 1rem;
          border: 1px solid var(--kemet-color-white);
          background-color: transparent;
        }

        .upload {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1rem;
          flex-direction: column;
          border: 2px dashed var(--kemet-color-white);
        }

        :host([over]) .upload {
          background-color: green;
        }

        :host([mobile]) .upload {
          height: 280px;
        }

        .files {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          padding: 0 1rem;
          overflow: auto;
          background-color: var(--kemet-color-white);
        }

        :host([mobile]) .files {
          padding: 0;
          max-height: 280px;
        }

        .heading {
          font-size: 1.25rem;
          margin: 0 0 2rem 0;
        }

        :host([no-drag-drop]) .heading {
          display: none;
        }

        ::slotted(:first-child) {
          margin-top: 1rem;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * A unique identifier for the component
       */
      slug: {
        type: String,
      },
      /**
       * Determines what file types are accepted
       */
      accept: {
        type: String,
      },
      /**
       * Allows for multiple files
       */
      multiple: {
        type: Boolean,
      },
      /**
       * Automatically is true when a file is being dragged over the upload area
       */
      over: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Descriptive text for the upload area
       */
      heading: {
        type: String,
      },
      /**
       * Displays the component in a mobile context
       */
      mobile: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Controls the point at which the component is considered mobile
       */
      breakpoint: {
        type: String,
        reflect: true,
      },
      /**
       * If true if drag and drop support is not detected
       */
      noDragDrop: {
        type: Boolean,
        reflect: true,
        attribute: 'no-drag-drop',
      },
      /**
       * The maximum file size for uploads
       */
      maxSize: {
        type: Number,
        attribute: 'max-size',
      },
      /**
       * The browse files button text
       */
      buttonLabel: {
        type: String,
        attribute: 'button-label',
      },
    };
  }

  constructor() {
    super();
    this.slug = 'upload';
    this.breakpoint = '600px';
    this.buttonLabel = 'Browse Files';
    this.heading = 'Drag & Drop Files';
  }

  firstUpdated() {
    this.fileInputElement = this.shadowRoot.querySelector('[type="file"]');
    this.upload = this.shadowRoot.querySelector('.upload');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.upload.addEventListener(eventName, event => preventDefaults(event), false);
    });

    ['dragenter', 'dragover'].forEach((eventName) => {
      this.upload.addEventListener(eventName, () => { this.over = true; }, false);
    });

    ['dragleave', 'drop'].forEach((eventName) => {
      this.upload.addEventListener(eventName, () => { this.over = false; }, false);
    });

    this.isMobile();
    this.hasDragDrop();

    window.addEventListener('resize', () => { this.isMobile(); });
    this.upload.addEventListener('drop', event => this.handleDrop(event), false);
  }

  render() {
    return html`
      <div class="upload" part="upload">
        <kemet-icon icon="cloud-arrow-up" size="128"></kemet-icon>
        <input
          type="file"
          id=${this.slug}
          ?multiple=${this.multiple}
          accept=${ifDefined(this.accept) ? this.accept : null}
          @change=${event => this.handleChange(event)}
        />
        <h3 class="heading" part="heading">${this.heading}</h3>
        <label class="button" part="button" for=${this.slug}>${this.buttonLabel}</label>
      </div>
      <div class="files" part="files">
        <slot></slot>
      </div>
    `;
  }

  handleChange(event) {
    /**
     * Fires when files have been added
     */
    this.dispatchEvent(
      new CustomEvent('kemet-upload-change', {
        bubbles: true,
        composed: true,
        detail: {
          event,
          files: this.fileInputElement.files,
          fileElement: this.fileInputElement,
        },
      }),
    );
  }

  handleDrop(event) {
    /**
     * Fires when files have been added
     */
    this.dispatchEvent(
      new CustomEvent('kemet-upload-change', {
        bubbles: true,
        composed: true,
        detail: {
          event,
          files: event?.dataTransfer.files || [],
          fileElement: this.fileInputElement,
        },
      }),
    );
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.mobile = mediaQuery.matches;
  }

  hasDragDrop() {
    if ('draggable' in document.createElement('span')) {
      this.noDragDrop = false;
    } else {
      this.noDragDrop = true;
    }
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('kemet-upload') || customElements.define('kemet-upload', KemetUpload);
