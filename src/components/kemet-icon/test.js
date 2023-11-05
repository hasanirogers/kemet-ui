// import { html, fixture, expect } from '@open-wc/testing';

// import './kemet-icon.ts';

// describe('KemetIcon', () => {
//   it('passes the a11y audit', async () => {
//     const el = await fixture(html`
//       <kemet-icon></kemet-icon>
//     `);

//     await expect(el).shadowDom.to.be.accessible();
//   });

//   it('has the correct default props', async () => {
//     const element = await fixture(html`
//       <kemet-icon></kemet-icon>
//     `);

//     expect(element.set).to.equal('bootstrap');
//     expect(element.size).to.equal(16);
//     expect(element.icon).to.equal('alarm');
//   });

//   it('correctly fetches an icon', async () => {
//     const element = await fixture(html`
//       <kemet-icon></kemet-icon>
//     `);

//     await element.getIcon();

//     expect(element.shadowRoot.querySelector('svg').getAttribute('id')).to.equal('alarm');
//   });

//   it('fails gracefully when an icon cannot be fetched', async () => {
//     const element = await fixture(html`
//       <kemet-icon icon="fail-me"></kemet-icon>
//     `);

//     await element.getIcon();

//     expect(element.shadowRoot.querySelector('svg').getAttribute('id')).to.equal('kemet-error');
//   });

//   it('gets the correct urls', async () => {
//     const element = await fixture(html`
//       <kemet-icon></kemet-icon>
//     `);

//     element.set = 'test-the-default';
//     expect(element.getUrl()).to.equal('https://unpkg.com/bootstrap-icons@latest/icons');

//     element.set = 'font-awesome-brands';
//     expect(element.getUrl()).to.equal('https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/brands');

//     element.set = 'font-awesome-regular';
//     expect(element.getUrl()).to.equal('https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/regular');

//     element.set = 'font-awesome-solid';
//     expect(element.getUrl()).to.equal('https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/solid');
//   });
// });
