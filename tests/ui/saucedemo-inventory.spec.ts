import { test, expect } from '../../src/fixtures/index'

test.describe('Inventory - SauceDemo', () => {
  test('should filter price low to high', async ({ sauceDemoInventoryPage }) => {
    await sauceDemoInventoryPage.selectFilter('lohi')
    const priceTexts = await sauceDemoInventoryPage.productPrice.allTextContents()
    const numberPrices = priceTexts.map(price => price.replace('$', '')).map(parseFloat)
    const sortedPrices = [...numberPrices].sort((a, b) => a - b)
    expect(numberPrices).toEqual(sortedPrices)
  })

  test('should filter price high to low', async ({ sauceDemoInventoryPage }) => {
    await sauceDemoInventoryPage.selectFilter('hilo')
    const priceTexts = await sauceDemoInventoryPage.productPrice.allTextContents()
    const numberPrices = priceTexts.map(price => price.replace('$', '')).map(parseFloat)
    const sortedPrices = [...numberPrices].sort((a, b) => b - a)
    expect(numberPrices).toEqual(sortedPrices)
  })

  test('add to cart shows the correct number of items in the cart', async ({ sauceDemoInventoryPage, page }) => {
    await sauceDemoInventoryPage.addToCart('sauce-labs-backpack')
    const cartCount = await sauceDemoInventoryPage.cartBadge.textContent()
    expect(cartCount).toBe('1')
  })

})
