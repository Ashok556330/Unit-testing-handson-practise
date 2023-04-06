import { html, fixture, expect } from '@open-wc/testing';
import Sinon  from 'sinon';

import '../loan-application.js';

describe('LoanApplication', () => {
  describe('LoanApplication testing the title', () => {
    it('should contain the text same', async () => {
      const el = await fixture(html `<loan-application></loan-application>`);
      expect(el.title).to.equal('Hey there');
    })
  })
  describe('LoanApplication counter adding one', () => {
    it('should contain the text same', async () => {
      const el = await fixture(html `<loan-application></loan-application>`);
      expect(el.counter).to.equal(5);
    })
  })
  describe('LoanApplication increament function execution', () => {
    it('LoanApplication Value should incrase one', async () => {
      const el = await fixture(html `<loan-application></loan-application>`);
      const myspy = Sinon.spy(el, '__increment');
      // myspy();
      el.__increment();
      expect(myspy.calledOnce).to.be.true;
    })
  })
});





