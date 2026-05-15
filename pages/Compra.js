class Compra {
constructor(page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.locator('#checkout');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.zipPostalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
}

 async goToCart() {
     await this.cartLink.click(); 
    }
 async checkout() {
    await this.checkoutButton.click();
  }

 async checkoutYourInf(first, last, zipcode) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.zipPostalCodeInput.fill(zipcode);
  }
 async continue() {
    await this.continueButton.click();
  }
  async finish() {
     await this.finishButton.click(); 
    }
}
module.exports = Compra;
   
