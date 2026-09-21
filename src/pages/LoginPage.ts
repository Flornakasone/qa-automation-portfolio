import { type Page, type Locator, expect } from '@playwright/test'

export class LoginPage {
  private readonly page: Page

  get usernameInput(): Locator { return this.page.getByLabel('Username') }
  get passwordInput(): Locator { return this.page.getByLabel('Password') }
  get loginButton(): Locator { return this.page.getByRole('button', { name: 'Login' }) }
  get flashMessage(): Locator { return this.page.locator('#flash') }
  get logoutLink(): Locator { return this.page.getByRole('link', { name: 'Logout' }) }

  constructor(page: Page) {
    this.page = page
  }

  async navigate(): Promise<void> {
    await this.page.goto('/login')
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }

  async expectSuccessfulLogin(): Promise<void> {
    await expect(this.flashMessage).toContainText('You logged into a secure area!')
    await expect(this.logoutLink).toBeVisible()
  }

  async expectFailedLogin(): Promise<void> {
    await expect(this.flashMessage).toContainText('Your username is invalid!')
  }
}