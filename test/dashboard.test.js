import { html, fixture, expect } from '@open-wc/testing';
import Sinon  from 'sinon';
import '../src/dashboard/Dashboard.js'

describe('', ()=> {
  it('should contain the text same', async () => {
      const el = await fixture(html `<dash-board></dash-board>`);
      const textVar = (el.shadowRoot.getElementById('outlet').innerText);
      expect(textVar).to.equal('Ashok') 
   })
})