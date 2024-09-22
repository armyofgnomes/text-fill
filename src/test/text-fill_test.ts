import {TextFill} from '../text-fill.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('text-fill', () => {
  test('is defined', () => {
    const el = document.createElement('text-fill');
    assert.instanceOf(el, TextFill);
  });

  test('resizing the text to fill its container', async function() {
    const parentNode = document.createElement('div');
    parentNode.setAttribute('style', 'font-family: Arial; height: 200px; width: 360px;');
    const el = await (fixture(html`<text-fill text="The quick brown fox jumps over the lazy dog"></text-fill>`, { parentNode })) as TextFill;
    await el.updateComplete;
    const resizedText = el.shadowRoot?.getElementById('resizedText');
    const computedStyle = getComputedStyle(resizedText!);

    assert.equal(computedStyle.fontSize, '49px');
  });

  test('resizing longer text to fill its container', async function() {
    const parentNode = document.createElement('div');
    parentNode.setAttribute('style', 'font-family: Arial; height: 100px; width: 200px;');
    const el = await (fixture(html`<text-fill text="Lorem ipsum dolor sit amet, oratio consectetuer est cu. Ponderum mandamus theophrastus mel ex, sit ex mutat ocurreret."></text-fill>`, { parentNode })) as TextFill;
    await el.updateComplete;
    const resizedText = el.shadowRoot?.getElementById('resizedText');
    const computedStyle = getComputedStyle(resizedText!);

    assert.equal(computedStyle.fontSize, '16px');
  });

});
