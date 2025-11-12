"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Read the .env file solution', async ({ page }) => {
    await page.goto(`${process.env.practice_qa}`);
    await page.locator('(//a[normalize-space()="Practice"])[1]').click();
    await (0, test_1.expect)(page).toHaveURL('https://practicetestautomation.com/practice/');
    await (0, test_1.expect)(page.locator('//em[contains(text(),"Page to reproduce the most common Selenium Excepti")]')).toHaveText('Page to reproduce the most common Selenium Exceptions.');
});
