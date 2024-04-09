import { SlDialog, SlTextarea } from '@shoelace-style/shoelace';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './change-log-button.ts';

@customElement('top-panel')
export class TopPanel extends LitElement {
  static styles = css`
    .top-panel {
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid lightgray;
    }
    #import-text {
      margin-bottom: 0.5rem
    }
    .settings-dialog {
      --height: 22rem;
    }
  `;

  render () {
    return html`
      <div class="top-panel">
        <change-log-button></change-log-button>
        <strong>D&D Timer</strong>
        <sl-button variant="default" size="small" circle @click=${this.openDialog}>
          <sl-icon name="gear" label="Settings"></sl-icon>
        </sl-button>
      </div>
      <sl-dialog label="Stillingar" class="settings-dialog">
        <sl-tab-group>
          <sl-tab slot="nav" panel="import">Import</sl-tab>
          <sl-tab slot="nav" panel="export">Export</sl-tab>

          <sl-tab-panel name="import">
            <sl-textarea id="import-text"></sl-textarea>
            <sl-button variant="success" class="mt-1" @click=${this.importData}>
              Vista
            </sl-button>
          </sl-tab-panel>
          <sl-tab-panel name="export" >
            <sl-copy-button value="Copied from a custom button" from="export-text.value">
              <sl-icon slot="copy-icon" name="clipboard"></sl-icon>
              <sl-icon slot="success-icon" name="clipboard-check"></sl-icon>
              <sl-icon slot="error-icon" name="clipboard-x"></sl-icon>
            </sl-copy-button>
            <sl-textarea id="export-text" disabled>
            </sl-textarea>
          </sl-tab-panel>
        </sl-tab-group>
      </sl-dialog>
    `;
  }

  openDialog() {
    this.renderRoot?.querySelector<SlDialog>('.settings-dialog')?.show();
  }

  importData() {
    const jsonData = this.renderRoot?.querySelector<SlTextarea>('#import-text')?.value;
    localStorage.clear();
    if (jsonData) {
      Object.entries(JSON.parse(jsonData)).forEach(([key, value]) => {
        localStorage.setItem(key, JSON.stringify(value));
      });
    }
    window.location.reload();
  }

  firstUpdated() {
    const exportValue = {} as any;
    Object.keys(localStorage).forEach((key) => exportValue[key] = JSON.parse(localStorage.getItem(key) ?? '') || undefined);
    const textArea = this.renderRoot?.querySelector<SlTextarea>('#export-text');
    if (textArea) {
      textArea.value = JSON.stringify(exportValue, null, 2);
    }
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