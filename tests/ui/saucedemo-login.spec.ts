import { test, expect } from '../../src/fixtures/index'

test.describe('Login - sauceDemo', () => {
  test('successful login with valid credentials', async ({ sauceDemoLoginPage }) => {
    await sauceDemoLoginPage.login('standard_user', 'secret_sauce')
    await sauceDemoLoginPage.expectSuccessfulLogin()
  })

  test('failed login with wrong credentials', async ({ sauceDemoLoginPage }) => {
    await sauceDemoLoginPage.login('wronguser', 'wrongpassword')
    await sauceDemoLoginPage.expectFailedLogin()
  })

  test('failed login with empty credentials', async ({ sauceDemoLoginPage }) => {
    await sauceDemoLoginPage.login('', '')
    await sauceDemoLoginPage.expectFailedLoginEmpty()
  })

    test('failed login with blocked user', async ({ sauceDemoLoginPage }) => {
    await sauceDemoLoginPage.login('locked_out_user', 'secret_sauce')
    await sauceDemoLoginPage.expectLockedOutUser()
  })
})