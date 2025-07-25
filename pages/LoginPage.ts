import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput;
  readonly passwordInput;
  readonly loginButton;
  readonly errorMessage;
  readonly userMenu;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.emailInput = page.locator('[name="email"]');
    this.passwordInput = page.locator('[name="password"]');
    this.userMenu = page.getByText('Open user menu');
    this.errorMessage = page.getByText('User Not Found ');
  }

  async goto() {
    await this.page.goto('https://xery-blog-mern.vercel.app/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginSuccess(email: string, password: string) {
    this.goto();
    this.login(email,password);

    await expect(this.page).toHaveURL('https://xery-blog-mern.vercel.app/authorpanel/dashboard');
    //await expect(this.userMenu).toBeVisible();
  }
}
