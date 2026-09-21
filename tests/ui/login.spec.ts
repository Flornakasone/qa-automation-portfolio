import { test, expect } from '@playwright/test'
import { LoginPage } from '../../src/pages/LoginPage'

test.describe('Login - the-internet', () => {
  test('successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.navigate()
    await loginPage.login('tomsmith', 'SuperSecretPassword!')
    await loginPage.expectSuccessfulLogin()
  })

  test('failed login shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.navigate()
    await loginPage.login('wronguser', 'wrongpassword')
    await loginPage.expectFailedLogin()
  })
})