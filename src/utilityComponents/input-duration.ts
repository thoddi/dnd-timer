import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js'
import { unitsOfTime } from '../unitsOfTime';

@customElement('input-duration')
export class InputDuration extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ type: Number })
  value?: number;

  @state()
  unit = Object.entries(unitsOfTime).reverse().find(([, value]) => value.seconds <= 3600)?.[0] ?? 'seconds';

  render() {
    return html`
      <div>
        <sl-input type="number" label="Heiti" value=${this.value ? this.value / unitsOfTime[this.unit].seconds : ''} @sl-input=${this.onInput}></sl-input>
        <sl-dropdown>
          <sl-button slot="trigger" caret>Edit</sl-button>
          <sl-menu>
            <sl-menu-item value="cut">Cut</sl-menu-item>
            <sl-menu-item value="copy">Copy</sl-menu-item>
            <sl-menu-item value="paste">Paste</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </div>
    `;
  }

  onInput(e: any) {
    console.log(e.detail);
    const currentValue = Number(e.target?.value);
    this.value = currentValue * unitsOfTime[this.unit].seconds;
  }
}
