// import { test } from '../Helpers/fixtures/appFixtures';
//
// test('Implement The Storage Stage', async ({ ui,loginPage }) => {
//
//     await ui.NavigateToURL(`${process.env.qa_mps_tenant_page}`)
//     await ui.waitForNetworkIdle()
//     await ui.waitForElement(loginPage.selectTenantTitle)
//     await ui.pauseExecution()
// });

import {test, expect} from '@playwright/test';


test('test', async ({page}) => {
    // await page.goto('https://pms-nonprod.auth.eu-west-1.amazoncognito.com/login?client_id=1tl3nq7m0quho0aaqegji1lett&response_type=code&scope=email+openid&redirect_uri=https://pm-nonprod.wbs-wealth.com&prompt=none');
    // await page.getByRole('textbox', { name: 'Username' }).click();
    // await page.getByRole('textbox', { name: 'Username' }).fill('mzamo.mahaeng@winterflood.com');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('Nnarepr@sper8310');
    // await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto(`${process.env.qa_mps_tenant_page}`)

    // this section of code work
    //     await page.waitForURL((`${process.env.qa_mps_tenant_page}`))
    //     const comboSelectionTenant = page.getByRole('combobox')
    //     console.log('This is the selector',comboSelectionTenant);
    //     await comboSelectionTenant.click();
    // this section of code work

    // now this is original
    await page.waitForURL((`${process.env.qa_mps_tenant_page}`))
    await page.getByRole('combobox').click();
    // now this is original

    await page.getByText('Wealth at Work - Segregated').click();
    await expect(page.getByRole('button', {name: 'MPS'})).toBeVisible();
    await page.getByRole('link', {name: 'Models'}).click();
    await page.getByRole('link', {name: 'Portfolios', exact: true}).click();
    await page.getByRole('link', {name: 'Activity'}).click();
    await expect(page.getByRole('button', {name: 'MPS'})).toBeVisible();
    await page.getByRole('list').getByRole('link', {name: 'Dashboard'}).click();
});