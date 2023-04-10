import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  it('Should show loan header', async () => {
    const el = await fixture(html `<loan-header></loan-header>`);
    expect(el.shadowRoot.querySelector('header').querySelectorAll('p')['0'].innerText).to.equal('Apply Loan');
  })

});
