import { test, expect } from '../../src/fixtures/index'

test.describe('Login - sauceDemo', () => {
  test('successful login with valid credentials', async ({ sauceDemoLoginPage }) => {
    await test.step('succesful login with valid credentials', async () => {
        await sauceDemoLoginPage.login('standard_user', 'secret_sauce')
    })
    await test.step(`verify that the user is redirected to the inventory page`, async () => {
        await sauceDemoLoginPage.expectSuccessfulLogin()
    })
  })

  test('failed login with wrong credentials', async ({ sauceDemoLoginPage }) => {
    await test.step('failed login with wrong credentials', async () => {
      await sauceDemoLoginPage.login('wronguser', 'wrongpassword')
    })     
    await test.step('verify that the error message is displayed', async () => {     
        await sauceDemoLoginPage.expectFailedLogin()
    })
  })

  test('failed login with empty credentials', async ({ sauceDemoLoginPage }) => {
    await test.step('failed login with empty credentials', async () => {
      await sauceDemoLoginPage.login('', '')
    })
    
    await test.step('verify that the error message is displayed', async () => {
        await sauceDemoLoginPage.expectFailedLoginEmpty()
    })
  })

    test('failed login with blocked user', async ({ sauceDemoLoginPage }) => {
    await test.step('failed login with blocked user', async () => {     
        await sauceDemoLoginPage.login('locked_out_user', 'secret_sauce')
    })  
    await test.step('verify that the error message is displayed', async () => {     
        await sauceDemoLoginPage.expectLockedOutUser()
    })
  })
})