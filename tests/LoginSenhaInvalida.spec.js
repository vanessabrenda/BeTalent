// @ts-check
const { test, expect } = require('@playwright/test');
const Login = require('../pages/Login');

test('Login usuário standard_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login usuário locked_out_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login usuário problem_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('problem_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login usuário performance_glitch_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('performance_glitch_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login usuário error_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('error_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login usuário visual_user com senha inválida', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login('visual_user', 'teste123');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});
