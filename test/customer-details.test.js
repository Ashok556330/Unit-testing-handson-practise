import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import { localize } from '@lion/localize';
import Sinon from 'sinon';

describe('customer details', () => {
  it('should contain the amount feild', async() => {
    const el = await fixture(html `<lion-input-amount label="${localize.msg('change-language:previousemi')}"></lion-input-amount>`)
    expect (el.label).to.equal('Previous EMIs Amount');
  })

  it('should contain first name', async() => {
    const el = await fixture(html `<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`)
    expect(el.label).to.equal('First Name')
  })

  it('should contain last name', async() => {
    const el = await fixture(html `<lion-input label="${localize.msg('change-language:lastname')}"></lion-input>`)
    expect(el.label).to.equal('Last Name')
  })

  it('Should get customer EMI detail', async() => {
    const el =  await fixture(html `<customer-details></customer-details>`)
    const myspy = Sinon.spy(el, '_toEmidetails');
    myspy();
    expect(myspy.calledOnce).to.be.true;
  })

  it('Should get customer Mobile Number', async() => {
    const el =  await fixture(html `<lion-input-email label="${localize.msg('change-language:mobilenumber')}"></lion-input-email>`)
    expect (el.label).to.equal('Mobile Number');
  })
});
