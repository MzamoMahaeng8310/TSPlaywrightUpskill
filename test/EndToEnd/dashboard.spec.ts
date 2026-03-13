import {test, expect} from '../../Helpers/fixtures/appFixtures'


test('dashboard loads after login', async ({ ui,dashboardPage }) => {

    await ui.waitForNetworkIdle()
    await ui.clickElement(dashboardPage.openMenuButton)
    await ui.clickElement(dashboardPage.logoutLink)
    await expect(dashboardPage.swagLabsLogo).toBeVisible()
    await expect(dashboardPage.usernameText).toHaveText('Accepted usernames are:')
    await expect(dashboardPage.passwordText).toHaveText('Password for all users:')
 
});