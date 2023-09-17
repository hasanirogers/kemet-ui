import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import '../../../components/kemet-button/kemet-button';
import '../../../components/kemet-field/kemet-field';
import '../../../components/kemet-input/kemet-input';
import '../../../components/kemet-toggle/kemet-toggle';
import '../../../components/kemet-select/kemet-select';
import '../../../components/kemet-select/kemet-option';
import '../../../components/kemet-radio/kemet-radio';
import '../../../components/kemet-radio/kemet-radios';
import '../../../components/kemet-badge/kemet-badge';

const meta: Meta = {
  title: 'Templates / Bootstrap',
};
export default meta;

type Story = StoryObj;

const handleFormSubmit = (event) => {
  const form = event.srcElement;
  const formData = new FormData(form) as any;

  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
};

const CheckoutTemplate = () => html`
  <main style="max-width:1280px;" kemet-margin="auto" kemet-padding="lg">
    <header kemet-type-align="center">
      <kemet-icon icon="cart3" size="128" kemet-color="white" kemet-border-radius="large" kemet-background-color="primary" kemet-padding="lg"></kemet-icon>
      <h1 kemet-margin="2xl">Checkout Form</h1>
      <p kemet-type-size="lg" kemet-padding-left="3xl" kemet-padding-right="3xl">This form is a recreation of Bootstrap's Checkout example. It's been recreated using Kemet UI Core API styles and components. It serves as an example of doing validation with web components using Kemet UI.</p>
    </header>
    <section kemet-layout="flexrow" kemet-autostack kemet-gutters="tiny:xl" kemet-margin-top="2xl">
      <form kemet-margin-top="tiny:2xl medium:none" @submit=${event => handleFormSubmit(event)}>
        <h2 kemet-margin="none">Billing address</h2>
        <div kemet-layout="flexrow" kemet-gutters kemet-margin-top="2xl">
          <kemet-field slug="first-name" label="First Name*" message="First name is required.">
            <kemet-input required slot="input" name="first-name" rounded></kemet-input>
          </kemet-field>
          <kemet-field slug="last-name" label="Last Name*" message="Last name is required.">
            <kemet-input required slot="input" name="last-name" rounded></kemet-input>
          </kemet-field>
        </div>
        <kemet-field slug="username" label="Username*" message="Username is required." kemet-margin-top="lg">
          <kemet-input required slot="input" name="username" icon-left="person-fill" rounded></kemet-input>
        </kemet-field>
        <kemet-field slug="email" label="Email*" message="Invalid email." kemet-margin-top="lg">
          <kemet-input required slot="input" type="email" name="email" icon-left="envelope-fill" rounded></kemet-input>
        </kemet-field>
        <kemet-field slug="address" label="Address*" message="Address is required." kemet-margin-top="lg">
          <kemet-input required slot="input" name="address" icon-left="geo-alt-fill" rounded></kemet-input>
        </kemet-field>
        <kemet-field slug="address2" label="Address 2" kemet-margin-top="lg">
          <kemet-input slot="input" name="address2" icon-left="geo-alt-fill" rounded></kemet-input>
        </kemet-field>
        <div kemet-layout="flexrow" kemet-gutters kemet-margin-top="lg">
          <kemet-field slug="country" label="Country*" message="Country is required.">
            <kemet-select required slot="input" name="country" rounded>
              <kemet-option></kemet-option>
              <kemet-option value="usa" label="United States"></kemet-option>
              <kemet-option value="canada" label="Canada"></kemet-option>
              <kemet-option value="mexico" label="Mexico"></kemet-option>
            </kemet-select>
          </kemet-field>
          <kemet-field slug="state" label="State*" message="State is required.">
            <kemet-select required slot="input" name="state" rounded>
              <kemet-option></kemet-option>
              <kemet-option value="MI" label="Michigan"></kemet-option>
              <kemet-option value="NY" label="New York"></kemet-option>
              <kemet-option value="CA" label="California"></kemet-option>
            </kemet-select>
          </kemet-field>
          <kemet-field slug="zipcode" label="ZipCode*" message="ZipCode is required.">
            <kemet-input required slot="input" name="zipcode" rounded></kemet-input>
          </kemet-field>
        </div>
        <br /><hr /><br />
        <kemet-toggle name="same-address" label="Shipping address is the same as my billing address" kemet-margin-bottom="xs"></kemet-toggle>
        <kemet-toggle name="save-information" label="Save this information for next time" kemet-margin-bottom="2xl"></kemet-toggle>
        <hr />
        <h2>Payment</h2>
        <kemet-radios required name="payment" message="You must select a payment type." kemet-margin-top="2xl">
          <kemet-radio value="credit-card" label="Credit Card"></kemet-radio>
          <kemet-radio value="debit-card" label="Debit Card"></kemet-radio>
          <kemet-radio value="pay-pay" label="PayPal"></kemet-radio>
        </kemet-radios>
        <div kemet-layout="flexgrid" kemet-gutters kemet-margin-top="lg">
          <kemet-field slug="name-on-card" label="Name on card*" message="Name is required." kemet-breakpoint="tiny:100 medium:50">
            <kemet-input required slot="input" name="name-on-card" icon-left="person-fill" rounded></kemet-input>
          </kemet-field>
          <kemet-field slug="credit-card-number" label="Credit card number*" message="Credit card is required." kemet-breakpoint="tiny:100 medium:50">
            <kemet-input required slot="input" name="credit-card-number" icon-left="credit-card" rounded></kemet-input>
          </kemet-field>
          <kemet-field slug="expiration" label="Expiration*" message="Expiration is not valid." kemet-breakpoint="tiny:100 medium:25">
            <kemet-input required slot="input" name="address" rounded></kemet-input>
          </kemet-field>
          <kemet-field slug="cvv" label="CVV*" message="CVV is not valid." kemet-breakpoint="tiny:100 medium:25">
            <kemet-input required slot="input" name="cvv" rounded></kemet-input>
          </kemet-field>
        </div>
        <kemet-checkbox required filled rounded name="terms" label="Do you agree to our terms of service?" message="You must agree to the terms." kemet-margin-top="tiny:small" kemet-margin-bottom="tiny:normal"></kemet-checkbox>
        <br /><hr /><br />
        <kemet-button kemet-layout="flexrow" type="rounded">CONTINUE TO CHECKOUT</kemet-button>
      </form>
      <aside kemet-breakpoint="tiny:100 medium:33" kemet-margin-top="tiny:2xl medium:none" kemet-order="tiny:minus-1 medium:none">
        <div kemet-layout="flexrow" kemet-align="middle" kemet-margin-bottom="2xl">
          <h2 kemet-margin="none" kemet-color="gray-500">Your cart</h2>
          <div kemet-breakpoint="tiny:content">
            <kemet-badge status="standard" circle>3</kemet-badge>
          </div>
        </div>
        <ul kemet-layout="flexcolumn" kemet-border-radius="medium" kemet-margin="tiny:none" kemet-padding="none" kemet-border="all-1 solid gray-300">
          <li>
            <div kemet-layout="flexrow" kemet-padding="lg" kemet-border="bottom-1 solid gray-300">
              <div>
                <h3 kemet-margin="none">Product Name</h3>
                <span kemet-color="gray-500">Brief description</span>
              </div>
              <span kemet-breakpoint="tiny:content" kemet-type-size="lg" kemet-color="gray-500">$12</span>
            </div>
          </li>
          <li>
            <div kemet-layout="flexrow" kemet-padding="lg" kemet-border="bottom-1 solid gray-300">
              <div>
                <h3 kemet-margin="none">Second product</h3>
                <span kemet-color="gray-500">Brief description</span>
              </div>
              <span kemet-breakpoint="tiny:content" kemet-type-size="lg" kemet-color="gray-500">$8</span>
            </div>
          </li>
          <li>
            <div kemet-layout="flexrow" kemet-padding="lg" kemet-border="bottom-1 solid gray-300">
              <div>
                <h3 kemet-margin="none">Third item</h3>
                <span kemet-color="gray-500">Brief description</span>
              </div>
              <span kemet-breakpoint="tiny:content" kemet-type-size="lg" kemet-color="gray-500">$8</span>
            </div>
          </li>
          <li>
            <div kemet-layout="flexrow" kemet-padding="lg" kemet-border="bottom-1 solid gray-300" kemet-color="success">
              <div>
                <h3 kemet-margin="none">Promo code</h3>
                <span>EXAMPLE CODE</span>
              </div>
              <span kemet-breakpoint="tiny:content" kemet-type-size="lg"> -$5</span>
            </div>
          </li>
          <li>
            <div kemet-layout="flexrow" kemet-padding="lg">
              <h3 kemet-margin="none">Total (USD)</h3>
              <strong kemet-breakpoint="tiny:content" kemet-type-size="lg">$20</strong>
            </div>
          </li>
        </ul>
      </aside>
    </section>
    <footer kemet-type-align="center">
      <p>&copy; 2022 Company Name</p>
      <ul kemet-layout="flexlist" kemet-gutters>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </footer>
  </main>
`;

export const Checkout: Story = {
  render: CheckoutTemplate,
}
