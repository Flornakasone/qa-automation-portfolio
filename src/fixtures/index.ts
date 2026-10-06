import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/the-internet/LoginPage'
import { LoginPage as SauceDemoLoginPage } from '../pages/saucedemo/LoginPage'
import { InventoryPage as SauceDemoInventoryPage } from '../pages/saucedemo/InventoryPage'
import { CartPage as SauceDemoCartPage } from '../pages/saucedemo/CartPage'
import { CheckoutPage as SauceDemoCheckoutPage } from '../pages/saucedemo/CheckoutPage' 

type TestFixtures = {
  loginPage: LoginPage
  sauceDemoLoginPage: SauceDemoLoginPage
  sauceDemoInventoryPage: SauceDemoInventoryPage
  sauceDemoCartPage: SauceDemoCartPage
  sauceDemoCheckoutPage: SauceDemoCheckoutPage
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

  sauceDemoCartPage: async ({ page }, use) => {
    const loginPage = new SauceDemoLoginPage(page)
    await loginPage.navigate()
    await loginPage.login('standard_user', 'secret_sauce')
    const sauceDemoCartPage = new SauceDemoCartPage(page)
    const inventoryPage = new SauceDemoInventoryPage(page)
    await inventoryPage.addToCart('sauce-labs-backpack')
    await page.goto('https://www.saucedemo.com/cart.html')
    await use(sauceDemoCartPage)

  },

    sauceDemoCheckoutPage: async ({ page }, use) => {
    const loginPage = new SauceDemoLoginPage(page)
    await loginPage.navigate()
    await loginPage.login('standard_user', 'secret_sauce')
    const inventoryPage = new SauceDemoInventoryPage(page)
    await inventoryPage.addToCart('sauce-labs-backpack')
    await page.goto('https://www.saucedemo.com/checkout-step-one.html')
    const fillInformation = new SauceDemoCheckoutPage(page)
    await fillInformation.fillInformation('John', 'Doe', '12345')
    await fillInformation.continueCheckout()
    await use(fillInformation)  

  }

})

export { expect } from '@playwright/test'