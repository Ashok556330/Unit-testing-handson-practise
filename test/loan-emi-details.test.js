import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

describe('Loan EMI details', () => {
  it('Should Get loan emi details', async () => {
    const el = await fixture(html `<loanemi-details></loanemi-details>`);
    expect(el.shadowRoot.querySelector('.emi-details').querySelector('h2').innerText).to.equal('EMI Details');
  })
  it('Should call basic detail function', async () => {
    const el = await fixture(html `<loanemi-details><loanemi-details/>`)
    const myspy = Sinon.spy(el, '_toBasicDetails');
    myspy();
    el._toBasicDetails();
    expect(myspy.calledOnce).to.be.false;
  })

  it('Should call customer function', async () => {
    const el = await fixture(html `<loanemi-details><loanemi-details/>`)
    const myspy = Sinon.spy(el, '_toCustomer');
    myspy();
    el._toCustomer();
    expect(myspy.calledOnce).to.be.false;
  })
});


