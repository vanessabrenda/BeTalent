class AddCart {
 constructor(page) {
    this.page = page;
    this.backpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.bikeLightButton = page.locator('#add-to-cart-sauce-labs-bike-light');
    this.tshirtButton = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    this.jacketButton = page.locator('#add-to-cart-sauce-labs-fleece-jacket')
  }

  async addBackpack() {
    await this.backpackButton.click();
  }

  async addBikeLight() {
    await this.bikeLightButton.click();
  }

  async addTshirt() {
    await this.tshirtButton.click();
  }

  async addJacket() {
    await this.jacketButton.click();
  }
}

module.exports = AddCart;
