import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js'
import { unitsOfTime } from '../unitsOfTime';
import { createComponent } from '@lit/react';
import React from 'react';
import { SlSelectEvent } from '@shoelace-style/shoelace';
import {ifDefined} from 'lit/directives/if-defined.js';

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

  @property({ type: String })
  label?: string;

  @state()
  unitName = Object.entries(unitsOfTime).reverse().find(([, value]) => value.seconds <= 3600)?.[0] ?? 'seconds';

  get #unit() {
    return unitsOfTime[this.unitName];
  }

  render() {
    return html`
      <div>
        <sl-input type="number" label=${ifDefined(this.label)} value=${this.value ? this.value / this.#unit.seconds : ''} @sl-input=${this.onInput}></sl-input>
        <sl-dropdown>
          <sl-button slot="trigger" caret>${this.#unit.name}</sl-button>
          <sl-menu @sl-select=${this.onSelect}>
            ${Object.entries(unitsOfTime).map(([key, value]) => html`
              <sl-menu-item value=${key} .checked=${this.unitName === key}>${value.name}</sl-menu-item>
            `)}
          </sl-menu>
        </sl-dropdown>
      </div>
    `;
  }

  onInput(e: any) {
    console.log(e.detail);
    const currentValue = Number(e.target?.value);
    this.value = currentValue * this.#unit.seconds;
  }

  onSelect(e: SlSelectEvent) {
    this.unitName = e.detail.item.value;
  }
}

export const ReactInputDuration = createComponent({
  tagName: 'input-duration',
  elementClass: InputDuration,
  react: React,
  events: {
    onInput: 'input',
  },
});
