import {test, expect} from '../../Helpers/fixtures/appFixtures'


test('dashboard loads after login', async ({ dashboardPage }) => {

    await dashboardPage.logout()
    await dashboardPage.verifyLogoutPage()
    expect (await dashboardPage.isLoaded()).toBeTruthy()
 
});