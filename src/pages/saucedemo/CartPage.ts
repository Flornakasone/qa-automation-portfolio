import { type Page, type Locator } from '@playwright/test'

export class CartPage {
  private readonly page: Page

  get checkoutButton(): Locator { return this.page.getByTestId('checkout') }
  get itemPrice(): Locator { return this.page.getByTestId('inventory-item-price') }
  get subtotalLabel(): Locator { return this.page.getByTestId('subtotal-label') }

  constructor(page: Page) {
    this.page = page
  }

  async navigate(): Promise<void> {
     await this.page.goto('https://www.saucedemo.com/cart.html')
  }

  async removeItem(productName: string): Promise<void> {
    await this.page.getByTestId(`remove-${productName}`).click()
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click()
  }
  
  getItem(productName: string): Locator { 
    return this.page.getByTestId(`cart-item-${productName}`) 
  }
}