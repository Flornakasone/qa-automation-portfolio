import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/the-internet/LoginPage'
import { LoginPage as SauceDemoLoginPage } from '../pages/sauceDemo/LoginPage'

type TestFixtures = {
  loginPage: LoginPage
  sauceDemoLoginPage: SauceDemoLoginPage
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
})

export { expect } from '@playwright/test'