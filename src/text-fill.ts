/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('text-fill')
export class TextFill extends LitElement {
  static override styles = css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }
  `;

  /**
   * The text that should fill the container
   */
  @property()
  text = '';

  override render() {
    return html`
      <div id="resizedText">${this.text}</div>
    `;
  }

  override firstUpdated() {
    this._resizeText();
  }

  private _resizeText() {
    const height = this.offsetHeight;
    const width = this.offsetWidth;
    const area = height * width;
    if (height > 0 && width > 0) {
      const resizedText = this.shadowRoot?.getElementById('resizedText');
      if (resizedText) {
        resizedText.style.fontSize = '1px';
        let innerArea = resizedText.offsetWidth * resizedText.offsetHeight;
        let fontSize = 1;

        while(innerArea < area) {
          resizedText.style.fontSize = fontSize++ + 'px';
          innerArea = resizedText.offsetHeight * resizedText.offsetWidth;
        }

        while (resizedText.offsetHeight > height && fontSize > 1) {
          resizedText.style.fontSize = fontSize-- + 'px';
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'text-fill': TextFill;
  }
}
