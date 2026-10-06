import { test, expect } from '../../src/fixtures/index'

test.describe('Cart - SauceDemo', () => {
    test('All items have price > 0', async ({ sauceDemoCartPage }) => {
        await test.step('verify that all items have a price greater than 0', async () => {
            const itemPrices = await sauceDemoCartPage.itemPrice.allTextContents()
            const numberPrices = itemPrices.map(price => price.replace('$', '')).map(parseFloat)
            for (const price of numberPrices) {
                expect(price).toBeGreaterThan(0)
            }
        })
    })

    test('Cart total equals Sum of Item Prices', async ({ sauceDemoCheckoutPage }) => {
        await test.step('verify that the cart total equals the sum of item prices', async () => {
            const itemPrices = await sauceDemoCheckoutPage.itemPrice.allTextContents()
            const numberPrices = itemPrices.map(price => price.replace('$', '')).map(parseFloat)
            const subtotalLabel = await sauceDemoCheckoutPage.subtotalLabel.innerText()
            const numberCartTotal = parseFloat(subtotalLabel.replace('Item total: $', ''))
            const sumOfItemPrices = numberPrices.reduce((sum, price) => sum + price, 0)
            expect(numberCartTotal).toBeCloseTo(sumOfItemPrices, 2)
        })
    })
})