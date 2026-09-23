import { test, expect } from '../../src/fixtures'

test.describe('Login - the-internet.herokuapp.com', () => {
  test('successful login with valid credentials', async ({ loginPage }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!')
    await loginPage.expectSuccessfulLogin()
  })

  test('failed login shows error message', async ({ loginPage }) => {
    await loginPage.login('wronguser', 'wrongpassword')
    await loginPage.expectFailedLogin()
  })
})