import { test, expect } from '@playwright/test'
import { LoginPage } from '../../src/pages/LoginPage'

test.describe('Login - the-internet', () => {
  test('successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto(page)
    await loginPage.login('tomsmith', 'SuperSecretPassword!')

    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Logout' })).toBeEnabled()
    await expect(page).toHaveTitle(/The Internet/)
  })

  test('failed login shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto(page)
    await loginPage.login('wronguser', 'wrongpassword')

    const error = await loginPage.getErrorMessage()
    await expect(error).toBeVisible()
  })
})