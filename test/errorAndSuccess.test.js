import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import Sinon from 'sinon';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('works', async () => {
    const el = await fixture(html `<loan-success></loan-success>`);
    const myspy = Sinon.spy(el, '_toHome');
    myspy();
    expect(myspy).to.have.been.called;
  })
});

describe('error screen', () => {
  it('works', async () => {
    const el = await fixture(html `<loan-error></loan-error>`);
    const myspy = Sinon.spy(el, '_toHome');
    myspy();
    expect(myspy).to.have.been.called;
  })
});
