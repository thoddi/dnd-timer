import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import changeLog from '../../changeLog.json';

@customElement('change-log-button')
export class ChangeLogButton extends LitElement {
  render () {
    return html`
      <sl-button variant="neutral" size="small" pill outline @click=${this.openDialog}>
        ${APP_VERSION}
      </sl-button>
      <sl-dialog label="Breytingasaga">
        ${changeLog.map((log) => html`
          <strong>${log.version}</strong>
          <ul>
            ${log.changes.map((change) => html`
              <li>${change}</li>
            `)}
          </ul>
        `)}
      </sl-dialog>
    `;
  }

  openDialog() {
    this.renderRoot?.querySelector<SlDialog>('sl-dialog')?.show();
  }
}