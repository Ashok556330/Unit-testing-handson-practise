import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  it('Should show loan header', async () => {
    const el = await fixture(html `<loan-header></loan-header>`);
    expect(el.shadowRoot.querySelector('header').querySelectorAll('p')['0'].innerText).to.equal('Apply Loan');
  })

  it('Should call localeChanged function', async () => {
    const el = await fixture(html `<loan-header></loan-header>`);
    const myspy = Sinon.spy(el, 'localeChanged');
    const dummyData = {target: { id: 'en-GB' }}
    el.localeChanged(dummyData);
    expect(myspy.calledOnce).to.be.true;
  })

  // it('Should call localeChanged function', async () => {
  //   const el = await fixture(html `<loan-header></loan-header>`);
  //   let localeFunction = (el.shadowRoot.querySelectorAll('button')['en-GB']);
  //   const func = Sinon.spy(el, "localeChanged");
  //   localeFunction.click();
  //   expect(func).to.be.called;
  // })

});
