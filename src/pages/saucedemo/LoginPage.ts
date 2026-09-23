import { type Page, type Locator, expect } from '@playwright/test'

export class LoginPage {
  private readonly page: Page

  get usernameInput(): Locator { return this.page.getByLabel('Username') }
  get passwordInput(): Locator { return this.page.getByLabel('Password') }
  get loginButton(): Locator { return this.page.getByRole('button', { name: 'Login' }) }
  get errorMessage(): Locator { return this.page.locator('.error-message-container') }

  constructor(page: Page) {
    this.page = page
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://saucedemo.com')
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }

  async expectSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/\/inventory\.html$/)
  }

  async expectFailedLogin(): Promise<void> {
    await expect(this.errorMessage).toContainText('Username and password do not match any user in this service')
  }

  async expectFailedLoginEmpty(): Promise<void> {
    await expect(this.errorMessage).toContainText('Username is required')
  }

  async expectLockedOutUser(): Promise<void> {
   await expect(this.errorMessage).toContainText('Sorry, this user has been locked out.')
  }
}