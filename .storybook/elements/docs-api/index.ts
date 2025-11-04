import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import CEM from '../../../custom-elements.json';


import '../../../src/elements/alert';
import '../../../src/elements/icon-bootstrap';
import '../../../src/elements/button';
import '../../../src/elements/accordion';
import '../../../src/elements/accordion-panel';
import KemetIconBootstrap from '../../../src/elements/icon-bootstrap';
import KemetAccordionPanel from '../../../src/elements/accordion-panel';

@customElement('docs-api')
export default class DocsAPI extends LitElement {
  static styles = css`
    hr {
      opacity: 0.25;
    }

    table {
      border-spacing: 0px;
      color: rgb(46, 52, 56);
      font-size: 13px;
      line-height: 20px;
      text-align: left;
      width: 100%;
      margin: 25px 1px 40px;
    }

    thead {
      background: #f6f9fc;
    }

    tbody {
      filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 3px);
    }

    tbody > tr:first-of-type > td:first-of-type {
      border-top-left-radius: 4px;
    }

    tbody > tr > :first-of-type {
      border-inline-start: 1px solid rgba(38, 85, 115, 0.15);
    }

    tbody > tr:first-of-type > * {
      border-block-start: 1px solid rgba(38, 85, 115, 0.15);
    }

    tbody > tr:first-of-type > td:last-of-type {
      border-top-right-radius: 4px;
    }

    td {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 20px;
    }

    td:first-of-type {
      width: 25%;
      font-weight: 700;
    }

    tbody > tr > * {
      background: rgb(255, 255, 255);
      border-top: 1px solid rgba(38, 85, 115, 0.15);
    }

    th {
      color: rgba(46, 52, 56, 0.75);
      padding: 10px 15px;
    }

    kemet-button {
      width: calc(100% - 20px);
      font-size: 0.9rem;
    }
  `;

  @property()
  tag: string;

  @state()
  hasInfo: boolean;

  @state()
  attributes: any;

  @state()
  cssParts: any;

  @state()
  cssProperties: any;

  @state()
  slots: any;

  @state()
  members: any;

  @state()
  events: any;

  @state()
  summary: string;

  firstUpdated() {
    this.getData();
  }

  render() {
    return this.hasInfo
     ? html`
      <br /><hr />
      <h2>API: &lt;${this.tag}&gt;</h2>
      ${this.makeDataTable(this.attributes, 'Attributes')}
      ${this.makeDataTable(this.slots, 'Slots')}
      ${this.makeDataTable(this.cssProperties, 'CSS Properties')}
      ${this.makeDataTable(this.cssParts, 'CSS Parts')}
      ${this.makeDataTable(this.events, 'Events')}
      ${this.makeDataTable(this.members, 'Methods')}
     `
     : html`
      <h3>&lt;${this.tag}&gt;</h3>
      <kemet-alert status="error" rounded="lg" opened>
        <kemet-icon-bootstrap icon="exclamation-circle"></kemet-icon-bootstrap>
        Could not find the ${this.tag} element.
      </kemet-alert>
    `;
  }

  getData() {
    CEM.modules.find((module) => {
      const info = module.declarations.find((declaration) => declaration.tagName === this.tag) as any;
      if (info) {
        this.attributes = info.attributes ?? null;
        this.cssParts = info.cssParts ?? null;
        this.cssProperties = info.cssProperties ?? null;
        this.slots = info.slots ?? null;
        this.members = info.members.filter((member) => member.privacy === 'public') ?? null;
        this.events = info.events ?? null;
        this.summary = info.summary ?? null;
        this.hasInfo = true;
      }
    });
  }

  makeDataTable(information: any, heading: string) {
    return information && information.length > 0 ? html`
      <kemet-accordion>
        <kemet-accordion-panel
          opened
          @kemet-opened=${(event: CustomEvent) => {
            const icon = (event.target as KemetAccordionPanel).querySelector('kemet-icon-bootstrap') as KemetIconBootstrap;
            icon.icon = icon.icon === 'chevron-up' ? 'chevron-down' : 'chevron-up';
          }}
          @kemet-closed=${(event: CustomEvent) => {
            const icon = (event.target as KemetAccordionPanel).querySelector('kemet-icon-bootstrap') as KemetIconBootstrap;
            icon.icon = icon.icon === 'chevron-up' ? 'chevron-down' : 'chevron-up';
          }}
        >
          <h3 slot="trigger">${heading}</h3>
          <kemet-icon-bootstrap slot="icon" icon="chevron-up" size="18"></kemet-icon-bootstrap>
          <div slot="body">
            <table data-heading=${heading}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                ${information.map((info: any) => html`<tr class="data"><td>${info.name}</td><td>${info.description}</td><td>${info.default}</td></tr>`)}
              </tbody>
            </table>
          </div>
        </kemet-accordion-panel>
      </kemet-accordion>

    ` : null;
  }
}

