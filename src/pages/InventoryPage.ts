import { type Page, type Locator } from '@playwright/test'

export class InventoryPage {
  private readonly page: Page

  get productPrice(): Locator { return this.page.getByTestId('inventory-item-price') }
  get filterDropdown(): Locator { return this.page.getByTestId('product-sort-container') }

  constructor(page: Page) {
    this.page = page
  }

  async navigate(): Promise<void> {
     await this.page.goto('https://www.saucedemo.com/inventory.html')
  }

  async selectFilter(option: string): Promise<void> {
    await this.filterDropdown.selectOption(option)
  }

  async addToCart(productName: string): Promise<void> {
    await this.page.getByTestId(`add-to-cart-${productName}`).click()
  }
  
}