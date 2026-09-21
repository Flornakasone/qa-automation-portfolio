import { Page, Locator } from '@playwright/test'

export class LoginPage {
  private readonly usernameInput: Locator
  private readonly passwordInput: Locator
  private readonly loginButton: Locator
  private readonly errorMessage: Locator

  constructor(page: Page) {
    this.usernameInput = page.getByRole('textbox', { name: 'Username' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.errorMessage = page.getByText('Your username is invalid!')
  }

  async goto(page: Page): Promise<void> {
    await page.goto('/login')
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }

  async getErrorMessage(): Promise<Locator> {
    return this.errorMessage
  }
}