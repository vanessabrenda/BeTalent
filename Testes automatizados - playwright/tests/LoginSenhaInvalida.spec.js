// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../pages/Login');

test('Login usuário standard_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/standard_user/01-login.png' });
});

test('Login usuário locked_out_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/locked_out_user/02-erro.png' });
});

test('Login usuário problem_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('problem_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/problem_user/01-login.png' });
});

test('Login usuário performance_glitch_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('performance_glitch_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/performance_glitch_user/01-login.png' });
});

test('Login usuário error_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('error_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/error_user/01-login.png' });
});

test('Login usuário visual_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('visual_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
  await page.screenshot({ path: 'Testes automatizados - playwright/test-results/visual_user/01-login.png' });
});
