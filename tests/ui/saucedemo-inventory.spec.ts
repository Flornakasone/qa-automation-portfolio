import { test, expect } from '../../src/fixtures/index'

test.describe('Inventory - SauceDemo', () => {
  test('should filter price low to high', async ({ sauceDemoInventoryPage }) => {
    await test.step('should filter price low to high', async () => {
      await sauceDemoInventoryPage.selectFilter('lohi')
    })
    await test.step('verify that the products are sorted by price low to high', async () => {
      const priceTexts = await sauceDemoInventoryPage.productPrice.allTextContents()
      const numberPrices = priceTexts.map(price => price.replace('$', '')).map(parseFloat)
      const sortedPrices = [...numberPrices].sort((a, b) => a - b)
      expect(numberPrices).toEqual(sortedPrices)
    })
  })

  test('should filter price high to low', async ({ sauceDemoInventoryPage }) => {
    await test.step('should filter price high to low', async () => {
      await sauceDemoInventoryPage.selectFilter('hilo')
    })
    await test.step('verify that the products are sorted by price high to low', async () => {
      const priceTexts = await sauceDemoInventoryPage.productPrice.allTextContents()
      const numberPrices = priceTexts.map(price => price.replace('$', '')).map(parseFloat)
      const sortedPrices = [...numberPrices].sort((a, b) => b - a)
      expect(numberPrices).toEqual(sortedPrices)
    })
  })

  test('add to cart shows the correct number of items in the cart', async ({ sauceDemoInventoryPage, page }) => {
    await test.step('add to cart shows the correct number of items in the cart', async () => {    
      await sauceDemoInventoryPage.addToCart('sauce-labs-backpack')
    })
    await test.step('verify that the cart badge shows the correct number of items', async () => { 
      const cartCount = await sauceDemoInventoryPage.cartBadge.textContent()
      expect(cartCount).toBe('1')
    })
  })

})
