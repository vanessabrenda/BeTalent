class BackHomeLogout {
constructor(page) {
    this.page = page;
    this.backHomeButton = page.locator('#back-to-products');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    }
    async backHome() {
    await this.backHomeButton.click();
  }
    async menu() {
    await this.menuButton.click();  

    }
    async logout() {
    await this.logoutLink.click(); 

    }
  
}
module.exports = BackHomeLogout;
