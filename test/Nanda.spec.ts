import { test } from '@playwright/test';
import { LoginPage } from '../pages/NandaPage';

test('login and logout test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto()
  await loginPage.login('Kasturi Nanda', 'Winterflood34@', '111');
  await loginPage.logout();

});