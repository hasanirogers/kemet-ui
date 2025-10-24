import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { emitEvent } from '../utilities/events';
import { stylesUpload } from '../styles/elements/upload';
import './icon-bootstrap';
import KemetUploadFile from './upload-file';

export interface InterfaceUploadChangeDetails {
  event: Event | DragEvent;
  files: FileList;
  fileElement: KemetUploadFile;
}

const preventDefaults = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
};

/**
 * @since 1.3.0
 * @status stable
 *
 * @tagname kemet-upload
 * @summary An interface for uploading files.
 *
 * @prop {string} slug - A unique identifier for the component
 * @prop {string} accept - Determines what file types are accepted
 * @prop {boolean} multiple - Allows for multiple files
 * @prop {boolean} over - Automatically is true when a file is being dragged over the upload area
 * @prop {string} heading - Descriptive text for the upload area
 * @prop {boolean} mobile - Displays the component in a mobile context
 * @prop {string} breakpoint - Controls the point at which the component is considered mobile
 * @prop {boolean} noDragDrop - Is true if drag and drop support is not detected
 * @prop {number} maxSize - The maximum file size for uploads
 * @prop {string} buttonLabel - The browse files button text
 *
 * @event kemet-upload-change - Fires when files have been added
 *
 * @csspart upload - The area where files are dropped.
 * @csspart heading - The description in the upload area.
 * @csspart button - The button in the upload area.
 * @csspart files - The area where uploaded files are listed.
 *
 * @cssproperty --kemet-upload-color - The default text color.
 * @cssproperty --kemet-upload-height - The height.
 * @cssproperty --kemet-upload-border - The border.
 * @cssproperty --kemet-upload-background-color - The background color.
 *
 */

@customElement('kemet-upload')
export default class KemetUpload extends LitElement {
  static styles = [stylesUpload];

  @property({ type: String })
  slug: string = 'upload';

  @property({ type: String })
  accept: string;

  @property({ type: Boolean })
  multiple: boolean;

  @property({ type: Boolean, reflect: true })
  over: boolean;

  @property({ type: String })
  heading: string = 'Drag & Drop Files';

  @property({ type: Boolean, reflect: true })
  mobile: boolean;

  @property({ type: String, reflect: true })
  breakpoint: string = '600px';

  @property({ type: Boolean, reflect: true, attribute: 'no-drag-drop' })
  noDragDrop: boolean;

  @property({ type: Number, attribute: 'max-size' })
  maxSize: number;

  @property({ type: String, attribute: 'button-label' })
  buttonLabel: string = 'Browse Files';

  @state()
  fileInputElement: HTMLInputElement;

  @state()
  upload: HTMLElement;

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
        <kemet-icon-bootstrap icon="cloud-arrow-up" size="128"></kemet-icon-bootstrap>
        <input
          type="file"
          id=${this.slug}
          ?multiple=${this.multiple}
          accept=${ifDefined(this.accept) ? this.accept : null}
          @change=${(event: Event) => this.handleChange(event)}
        />
        <h3 class="heading" part="heading">${this.heading}</h3>
        <label class="button" part="button" for=${this.slug}>${this.buttonLabel}</label>
      </div>
      <div class="files" part="files">
        <slot></slot>
      </div>
    `;
  }

  handleChange(event: Event) {
    emitEvent(this, 'kemet-change', {
      event,
      files: this.fileInputElement.files,
      fileElement: this.fileInputElement,
    });
  }

  handleDrop(event: DragEvent) {
    emitEvent(this, 'kemetchange', {
      event,
      files: event?.dataTransfer.files || [],
      fileElement: this.fileInputElement,
    });
  }

  isMobile() {
    const mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.mobile = mediaQuery.matches;
  }

  hasDragDrop() {
    this.noDragDrop = !('draggable' in document.createElement('span'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kemet-upload': KemetUpload
  }
}
