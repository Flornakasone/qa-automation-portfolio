import { test, expect } from '@playwright/test'

test.describe('Login - the-internet', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login')
    })

    test('successful login with valid credentials', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith')
        await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!')
        await page.getByRole('button', { name: 'Login' }).click()
        await expect(page).toHaveTitle(/The Internet/)
        await expect(page.getByRole('link', { name: 'Logout' })).toBeEnabled()

        await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible()
    })

    test('failed login show error message', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Username' }).fill('wronguser')
        await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword')
        await page.getByRole('button', { name: 'Login' }).click()

        await expect(page.getByText('Your username is invalid!')).toBeVisible()
    })
})