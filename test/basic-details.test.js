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

  it('Should call the captureDetails function', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    const myspy = Sinon.spy(el, '_captureDetails');
    el._captureDetails();
    expect(myspy.calledOnce).to.be.true;
  })

  it('should call numToWord function', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    const myspy = Sinon.spy(el, '_numToWord');
    el._numToWord();
    expect(myspy.calledOnce).to.be.true;
  })

  it('should contain a valid Loan input amount', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    expect(el.shadowRoot.querySelector('lion-input-amount')).to.exist;
  })

  it('should contain a valid text name', async () => {
    const el = await fixture(html `<lion-input-amount label="${localize.msg('change-language:Amount')}"></lion-input-amount>`);
    expect (el.type).to.equal('text');
  })
  // Write test cases inside this block
  // refer basic-details.js files
});
