import { expect, test, describe } from 'vitest';
import { userEvent } from '@vitest/browser/context'
import { render } from 'vitest-browser-lit';
import { html } from 'lit';
import './kemet-button';

describe("kemet-button", () => {
  test('should be active when the button is clicked', async () => {
    const screen = render(html`<kemet-button>Button</kemet-button>`);
    const button = screen.getByText('Button');
    await button.click();
    await expect.element(button).toHaveAttribute('active');
  });

  test('should not be active when the disabled button is clicked', async () => {
    const screen = render(html`<kemet-button disabled>Button</kemet-button>`);
    const button = screen.getByText('Button');
    await button.click();
    await expect.element(button).not.toHaveAttribute('active');
  });

  test('should be focused when tabbed on', async () => {
    const screen = render(html`<kemet-button>Button</kemet-button>`);
    const button = screen.getByText('Button');
    await userEvent.tab();
    await expect.element(button).toHaveAttribute('focused');
  });

  test('should handle hover', async () => {
    const screen = render(html`<kemet-button>Button</kemet-button>`);
    const button = screen.getByText('Button');
    await userEvent.hover(button);
    await expect.element(button).toHaveAttribute('hover');
    await userEvent.unhover(button);
    await expect.element(button).not.toHaveAttribute('hover');
  });
});
