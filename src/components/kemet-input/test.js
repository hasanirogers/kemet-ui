import { html, fixture, expect } from '@open-wc/testing';
import './kemet-input.ts';

const templates = {
  input: () => html`<kemet-input name="input" value="input" validate-on-blur></kemet-input>`,
  link: () => html`<kemet-button link="https://google.com">Google</kemet-button>`,
  password: () => html`<kemet-input type="password" name="password"></kemet-input>`,
  search: () => html`<kemet-input type="search" name="search" value="search"></kemet-input>`,
  form: () => html`
    <form>
      <kemet-field label="Input">
        <kemet-input slot="input" type="email" name="input" value="input" icon-left="check" icon-right="check"></kemet-input>
        <kemet-count slot="component" message="characters remaining." limit="8" validate-immediately></kemet-count>
      </kemet-field>
      <kemet-button>Button</kemet-button>
    </form>
  `,
};

describe('KemetInput', async () => {
  const input = await fixture(templates.input());
  const form = await fixture(templates.form());
  const password = await fixture(templates.password());
  const search = await fixture(templates.search());

  it('has the correct default props', async () => {
    expect(input.name).to.equal('input');
    expect(input.type).to.equal('text');
    expect(input.status).to.equal('standard');
    expect(input.iconSize).to.equal(20);
    expect(input.isPasswordVisible).to.equal(false);
  });

  it('cover the forms reactive controller', async () => {
    // eslint-disable-next-line no-undef
    const submitEvent = new SubmitEvent('submit');
    const formInput = form.querySelector('kemet-input');

    formInput.formSubmitController.handleFormSubmit(submitEvent);
    formInput.formSubmitController.handleFormData(submitEvent);
    formInput.formSubmitController.submit(submitEvent);
  });

  it('contains the right icons', async () => {
    const passwordIcon = password.shadowRoot.querySelector('kemet-icon');
    const searchIcon = search.shadowRoot.querySelector('kemet-icon');

    expect(passwordIcon.classList.contains('eye')).to.equal(true);
    expect(searchIcon.classList.contains('search')).to.equal(true);
  });

  it('handles methods', async () => {
    const shadowInput = input.shadowRoot.querySelector('input');

    input.handleFocus();
    expect(input.focused).to.equal(true);

    input.handleBlur();
    expect(input.focused).to.equal(false);

    shadowInput.value = 'test';
    input.handleChange();
    input.handleInput();
    expect(input.value).to.equal('test');

    input.handleInvalid();
    expect(input.status).to.equal('error');

    input.handleClear();
    expect(input.value).to.equal('');
  });
});
