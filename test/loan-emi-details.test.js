import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

describe('Loan EMI details', () => {
  it('Get loan emi details', async () => {
    const el = await fixture(html `<loanemi-details></loanemi-details>`);
    console.log(el.shadowRoot);
  })
});


