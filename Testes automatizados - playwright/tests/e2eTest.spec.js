const { test, expect } = require('@playwright/test');
const Login = require('../pages/Login');
const AddCart = require('../pages/AddCart'); 
const Compra = require('../pages/Compra'); 
const BackHomeLogout = require('../pages/BackHomeLogout'); 

test('Teste E2E com screenshots - standard_user', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/standard_user/01-login.png' });

  const cart = new AddCart(page);
  await cart.addBackpack();
  await cart.addBikeLight();
  await cart.addTshirt();
  await cart.addJacket();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('4');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/standard_user/02-carrinho.png' });

  const compra = new Compra(page);
  await compra.goToCart();
  await compra.checkout();
  await compra.checkoutYourInf('Vanessa', 'Teste', '75450-000');
  await compra.continue();
  await compra.finish();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/standard_user/03-checkout.png' });

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/standard_user/04-confirmacao.png' });

  const logoutPage = new BackHomeLogout(page);
  await logoutPage.backHome();
  await logoutPage.menu();
  await logoutPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/standard_user/05-logout.png' });
});

// Usuário bloqueado
test('Teste E2E com screenshots - locked_out_user', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/locked_out_user/01-login.png' });

  await loginPage.login('locked_out_user', 'secret_sauce');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/locked_out_user/02-erro.png' });

  await expect(loginPage.errorMessage)
    .toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

// Usuário problem_user
test('Teste E2E com screenshots - problem_user', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('problem_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/problem_user/01-login.png' });

  const cart = new AddCart(page);
  await cart.addBackpack();
  await cart.addBikeLight();
  await cart.addTshirt();
  await cart.addJacket();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/problem_user/02-carrinho.png' });

  const compra = new Compra(page);
  await compra.goToCart();
  await compra.checkout();
  await compra.checkoutYourInf('Vanessa', 'Teste', '75450-000');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/problem_user/03-checkout.png' });

});

// Usuário performance_glitch_user
test('Teste E2E com screenshots - performance_glitch_user', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('performance_glitch_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/performance_glitch_user/01-login.png' });

  const cart = new AddCart(page);
  await cart.addBackpack();
  await cart.addBikeLight();
  await cart.addTshirt();
  await cart.addJacket();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/performance_glitch_user/02-carrinho.png' });

  const compra = new Compra(page);
  await compra.goToCart();
  await compra.checkout();
  await compra.checkoutYourInf('Vanessa', 'Teste', '75450-000');
  await compra.continue();
  await compra.finish();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/performance_glitch_user/03-checkout.png' });

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/performance_glitch_user/04-confirmacao.png' });

  const logoutPage = new BackHomeLogout(page);
  await logoutPage.backHome();
  await logoutPage.menu();
  await logoutPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/performance_glitch_user/05-logout.png' });
});

// Usuário error_user
test('Teste E2E com screenshots - error_user', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('error_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/error_user/01-login.png' });

  const cart = new AddCart(page);
  await cart.addBackpack();
  await cart.addBikeLight();
  await cart.addTshirt();
  await cart.addJacket();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/error_user/02-carrinho.png' });

  const compra = new Compra(page);
  await compra.goToCart();
  await compra.checkout();
  await compra.checkoutYourInf('Vanessa', 'Teste', '75450-000');
  await compra.continue();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/error_user/03-checkout.png' });
});

// Usuário visual_user
test('Teste E2E com screenshots - visual_user', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('visual_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/visual_user/01-login.png' });

  const cart = new AddCart(page);
  await cart.addBackpack();
  await cart.addBikeLight();
  await cart.addTshirt();
  await cart.addJacket();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/visual_user/02-carrinho.png' });

  const compra = new Compra(page);
  await compra.goToCart();
  await compra.checkout();
  await compra.checkoutYourInf('Vanessa', 'Teste', '75450-000');
  await compra.continue();
  await compra.finish();
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/visual_user/03-checkout.png' });

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/visual_user/04-confirmacao.png' });

  const logoutPage = new BackHomeLogout(page);
  await logoutPage.backHome();
  await logoutPage.menu();
  await logoutPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/visual_user/05-logout.png' });
});