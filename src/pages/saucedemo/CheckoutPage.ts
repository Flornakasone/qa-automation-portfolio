import { type Page, type Locator } from '@playwright/test'

export class CheckoutPage {
  private readonly page: Page

  get nameField(): Locator { return this.page.getByTestId('firstName') }
  get lastNameField(): Locator { return this.page.getByTestId('lastName') }
  get postalCodeField(): Locator { return this.page.getByTestId('postalCode') }
  get cancelButton(): Locator { return this.page.getByTestId('cancel') }
  get continueButton(): Locator { return this.page.getByTestId('continue') }
  get finishButton(): Locator { return this.page.getByTestId('finish') }
  get finalMessage(): Locator { return this.page.getByTestId('checkout_complete_container') }
  get backHomeButton(): Locator { return this.page.getByTestId('back-to-products') }
  get generatePDFButton(): Locator { return this.page.getByTestId('generate-pdf') }

  constructor(page: Page) {
    this.page = page
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/checkout-step-one.html')
   }

     async fillInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.nameField.fill(firstName)
    await this.lastNameField.fill(lastName)
    await this.postalCodeField.fill(postalCode)
  }

  async cancelCheckout(): Promise<void> {
    await this.cancelButton.click()
  }

  async continueCheckout(): Promise<void> {
    await this.continueButton.click()
  }

  async finishCheckout(): Promise<void> {
    await this.finishButton.click()
  } 

  async backToHome(): Promise<void> {
    await this.backHomeButton.click()
  }

  async generatePDF(): Promise<void> {
    await this.generatePDFButton.click()
  }
}