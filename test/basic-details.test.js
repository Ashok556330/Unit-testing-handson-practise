import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { localize } from '@lion/localize';
import Sinon from 'sinon';

describe('Basic details', () => {
  it('Should call dashboard page', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    const myspy = Sinon.spy(el, '_toDashboard');
    myspy();
    expect(myspy.calledOnce).to.be.true;
  })

  it('Call the capture details page', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    const myspy = Sinon.spy(el, '_captureDetails');
    el._captureDetails();
    expect(myspy.calledOnce).to.be.true;
  })

  it('should call num to word function', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    const myspy = Sinon.spy(el, '_numToWord');
    el._numToWord();
    expect(myspy.calledOnce).to.be.true;
  })

  it('should contain a valid input', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    console.log(el.shadowRoot.querySelector('lion-input-amount').length);
    // expect(el.querySelector('lion-input-amount').length).to.equal(['1']);
  })

  it('should contain a valid input', async () => {
    const el = await fixture(html `<lion-input-amount label="${localize.msg('change-language:Amount')}"></lion-input-amount>`);
    expect (el.label).to.equal('');
  })

  // Write test cases inside this block
  // refer basic-details.js files
});
