import {test, expect} from '../../Helpers/fixtures/appFixtures'
//import testData from "../../test-data/qa/testdata.json";

test.describe('navigation', () => {
    test.use({storageState: 'storage/sourceDemo.json'})
    test('dashboard loads after login', async ({ui, dashboardPage}) => {

        await ui.NavigateToURL(`${process.env.data_link_inventorypage}`)
        await ui.waitForURLToLoad(`${process.env.data_link_inventorypage}`)
        await ui.clickElement(dashboardPage.openMenuButton)
        await ui.clickElement(dashboardPage.logoutLink)
        await expect(dashboardPage.swagLabsLogo).toBeVisible()
        await expect(dashboardPage.usernameText).toHaveText('Accepted usernames are:')
        await expect(dashboardPage.passwordText).toHaveText('Password for all users:')

    });
    test('dashboard try again ', async ({ui, dashboardPage}) => {
        await ui.NavigateToURL(`${process.env.data_link_inventorypage}`)
        await ui.waitForURLToLoad(`${process.env.data_link_inventorypage}`)
        await ui.clickElement(dashboardPage.openMenuButton)
        await ui.clickElement(dashboardPage.logoutLink)
        await expect(dashboardPage.swagLabsLogo).toBeVisible()
        await expect(dashboardPage.usernameText).toHaveText('Accepted usernames are:')
        await expect(dashboardPage.passwordText).toHaveText('Password for all users:')

    });

});