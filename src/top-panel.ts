import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('top-panel')
export class TopPanel extends LitElement {
  static styles = css`
    .top-panel {
      padding: 0.5rem;
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px solid lightgray;
    }
  `;

  render () {
    return html`
      <div class="top-panel">
        <sl-button variant="default" size="small" circle @click=${this.onClick}>
          <sl-icon name="gear" label="Settings"></sl-icon>
        </sl-button>
      </div>
      <sl-dialog label="Dialog" class="settings-dialog">
        <sl-tab-group>
          <sl-tab slot="nav" panel="import">Import</sl-tab>
          <sl-tab slot="nav" panel="export">Export</sl-tab>

          <sl-tab-panel name="import">
            <sl-textarea class="import-textarea"></sl-textarea>
            <sl-button variant="success" @click=${this.onClick}>
              Vista
            </sl-button>
          </sl-tab-panel>
          <sl-tab-panel name="export">
            <sl-textarea class="import-textarea"></sl-textarea>
          </sl-tab-panel>
        </sl-tab-group>
      </sl-dialog>
    `;
  }

  onClick() {
    this.renderRoot?.querySelector('.settings-dialog')?.show();
  }

  connectedCallback() {
    
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'top-panel': TopPanelProperties;
    }
    interface TopPanelProperties {}
  }
}