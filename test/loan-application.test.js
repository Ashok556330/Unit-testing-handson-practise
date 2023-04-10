import { html, fixture, expect } from '@open-wc/testing';
import Sinon  from 'sinon';

import '../loan-application.js';

describe('LoanApplication', () => {
  describe('Should get the title same as input', () => {
    it('should contain the text same', async () => {
      const el = await fixture(html `<loan-application></loan-application>`);
      expect(el.title).to.equal('Hey there');
    })
  })
  describe('Should match counter as increment', () => {
    it('should contain the text same', async () => {
      const el = await fixture(html `<loan-application></loan-application>`);
      expect(el.counter).to.equal(5);
    })
  })
  describe('Should call the icreament function', () => {
    it('LoanApplication Value should incrase one', async () => {
      const el = await fixture(html `<loan-application></loan-application>`);
      const myspy = Sinon.spy(el, '__increment');
      el.counter = 2;
      el.__increment();
      expect(myspy.calledOnce).to.be.true;
    })
  })
});





