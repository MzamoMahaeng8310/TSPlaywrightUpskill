// import { test, expect } from '@playwright/test';


// test('test', async ({ page }) => {
//   await page.goto('https://eos-qa.wbssolutions.cloud/#/login?returnUrl=%2Fhome');
//   await page.getByRole('textbox', { name: 'Username' }).fill('Kasturi Nanda');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('Winterflood34@');
//   await page.locator('input[name="pin0"]').click();
//   await page.locator('input[name="pin0"]').fill('1');
//   await page.locator('input[name="pin1"]').fill('1');
//   await page.locator('input[name="pin2"]').fill('1');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('a').filter({ hasText: 'Kasturi Nanda (Administrator)' }).click();
//   await page.getByRole('link', { name: 'Logout' }).click();
// });