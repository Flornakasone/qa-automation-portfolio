import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/the-internet/LoginPage'
import { LoginPage as SauceDemoLoginPage } from '../pages/saucedemo/LoginPage'
import { InventoryPage as SauceDemoInventoryPage } from '../pages/saucedemo/InventoryPage'

type TestFixtures = {
  loginPage: LoginPage
  sauceDemoLoginPage: SauceDemoLoginPage
  sauceDemoInventoryPage: SauceDemoInventoryPage
}

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await loginPage.navigate()
    await use(loginPage)
  },

  sauceDemoLoginPage: async ({ page }, use) => {
    const sauceDemoLoginPage = new SauceDemoLoginPage(page)
    await sauceDemoLoginPage.navigate()
    await use(sauceDemoLoginPage)
  },

  sauceDemoInventoryPage: async ({ page }, use) => {
    const loginPage = new SauceDemoLoginPage(page)
    await loginPage.navigate()
    await loginPage.login('standard_user', 'secret_sauce')
    const sauceDemoInventoryPage = new SauceDemoInventoryPage(page)
    await use(sauceDemoInventoryPage)
  },
})

export { expect } from '@playwright/test'