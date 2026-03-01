import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly pin0: Locator;
  readonly pin1: Locator;
  readonly pin2: Locator;
  readonly signInButton: Locator;
  readonly profileMenu: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.pin0 = page.locator('input[name="pin0"]');
    this.pin1 = page.locator('input[name="pin1"]');
    this.pin2 = page.locator('input[name="pin2"]');
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.profileMenu = page.locator('a').filter({ hasText: 'Kasturi Nanda (Administrator)' });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
  }

  async goto() {
    await this.page.goto('https://eos-qa.wbssolutions.cloud/#/login?returnUrl=%2Fhome');
  }

  async login(username: string, password: string, pin: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await this.pin0.fill(pin[0]);
    await this.pin1.fill(pin[1]);
    await this.pin2.fill(pin[2]);

    await this.signInButton.click();
  }

  async logout() {
    await this.profileMenu.click();
    await this.logoutLink.click();
  }
}