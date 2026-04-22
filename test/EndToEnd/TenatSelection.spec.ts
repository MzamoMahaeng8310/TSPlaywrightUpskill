import {test, expect} from '../../Helpers/fixtures/appFixtures'

test.describe('The tenant selection test cases', () => {

    test('Land on the tenant page', async ({ui, loginPage}) => {

        await ui.NavigateToURL(`${process.env.qa_mps_tenant_page}`)
        await ui.waitForNetworkIdle()
        await ui.waitForElement(loginPage.selectTenantTitle)
        await expect(loginPage.selectTenantTitle).toBeVisible()

    });

    test('Land on the tenant second', async ({ui, loginPage}) => {

        await ui.NavigateToURL(`${process.env.qa_mps_tenant_page}`)
        await ui.waitForNetworkIdle()
        await ui.waitForElement(loginPage.selectTenantTitle)
        await expect(loginPage.selectTenantTitle).toBeVisible()

    });

    test('Land on the tenant third scenario', async ({ui, loginPage}) => {

        await ui.NavigateToURL(`${process.env.qa_mps_tenant_page}`)
        await ui.waitForNetworkIdle()
        await ui.waitForElement(loginPage.selectTenantTitle)
        await expect(loginPage.selectTenantTitle).toBeVisible()

    });


    test('Des is the greatest of all time ', async ({ui, loginPage}) => {

        await ui.NavigateToURL(`${process.env.qa_mps_tenant_page}`)
        await ui.waitForNetworkIdle()
        await ui.waitForElement(loginPage.selectTenantTitle)
        await expect(loginPage.selectTenantTitle).toBeVisible()

    });


    test('Des is  His excellency the descendant of greatness ', async ({ui, loginPage}) => {

        await ui.NavigateToURL(`${process.env.qa_mps_tenant_page}`)
        await ui.waitForNetworkIdle()
        await ui.waitForElement(loginPage.selectTenantTitle)
        await expect(loginPage.selectTenantTitle).toBeVisible()

    });


});