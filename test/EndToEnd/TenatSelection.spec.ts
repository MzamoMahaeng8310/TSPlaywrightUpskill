import {test, expect} from '../../Helpers/fixtures/appFixtures'

test.describe('The tenant selection test cases', () => {
test('Land on the tenant page', async ({ ui,loginPage }) => {

    await ui.NavigateToURL(`${process.env.qa_mps_tenant_page}`)
    await ui.waitForNetworkIdle()
    await ui.waitForElement(loginPage.selectTenantTitle)
    await expect(loginPage.selectTenantTitle).toBeVisible()

    });

test('Land on the tenant second', async ({ ui,loginPage }) => {

    await ui.NavigateToURL(`${process.env.qa_mps_tenant_page}`)
    await ui.waitForNetworkIdle()
    await ui.waitForElement(loginPage.selectTenantTitle)
    await expect(loginPage.selectTenantTitle).toBeVisible()

    });


});