import { test, expect } from '../../src/fixtures/index'

test.describe('Checkout - SauceDemo', () => {
    test('Succesfully complete checkout', async ({ sauceDemoCheckoutPage }) => {
        await test.step('Succesfully complete checkout', async () => {
            await sauceDemoCheckoutPage.finishCheckout()
        })
        await test.step('verify that the final message is displayed', async () => {
            await sauceDemoCheckoutPage.expectFinalMessage()
        })      
    })
    test('Cancel checkout in step 1', async ({sauceDemoCheckoutStepOnePage}) => {
        await test.step('Cancel checkout in step 1', async () => {
            await sauceDemoCheckoutStepOnePage.cancelCheckout()
        })
        await test.step('verify that the user is redirected to the cart page', async () => {
            await sauceDemoCheckoutStepOnePage.expectRedirectToCart()
        })  
    })
    test('Empty fields in step 1', async ({sauceDemoCheckoutStepOnePage}) => {
        await test.step('Empty fields in step 1', async () => {
            await sauceDemoCheckoutStepOnePage.continueCheckout()
        })
        await test.step('verify that the error message is displayed', async () => {
            await sauceDemoCheckoutStepOnePage.expectErrorMessage()
        })  
    })

})