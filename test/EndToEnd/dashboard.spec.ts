import {test, expect} from '../../Helpers/fixtures/appFixtures'
import testData from "../../test-data/qa/testdata.json";

test.describe('navigation', () => {
test.use({storageState: 'storage/sourceDemo.json'})
test('dashboard loads after login', async ({ ui,dashboardPage }) => {

   await ui.NavigateToURL(`${process.env.data_link_inventorypage}`)
    await ui.waitForURLToLoad(`${process.env.data_link_inventorypage}`)
    await ui.clickElement(dashboardPage.openMenuButton)
    await ui.clickElement(dashboardPage.logoutLink)
    await expect(dashboardPage.swagLabsLogo).toBeVisible()
    await expect(dashboardPage.usernameText).toHaveText('Accepted usernames are:')
    await expect(dashboardPage.passwordText).toHaveText('Password for all users:')

});
 test('dashboard try again ', async ({ ui,dashboardPage }) => {
  await ui.NavigateToURL(`${process.env.data_link_inventorypage}`)
  await ui.waitForURLToLoad(`${process.env.data_link_inventorypage}`)
  await ui.clickElement(dashboardPage.openMenuButton)
  await ui.clickElement(dashboardPage.logoutLink)
  await expect(dashboardPage.swagLabsLogo).toBeVisible()
  await expect(dashboardPage.usernameText).toHaveText('Accepted usernames are:')
  await expect(dashboardPage.passwordText).toHaveText('Password for all users:')

 });

// test('storage state ', async ({ ui, loginPage }) => {
//  await ui.NavigateToURL((`${process.env.data_drive_link}`))
//  await ui.type(testData.Credentials_QA[0].username, loginPage.usernameFileld)
//  await ui.type(testData.Credentials_QA[0].password, loginPage.passwordField)
//  await ui.clickElement(loginPage.loginButtonSouceDemo)
//  await  ui.waitForNetworkIdle()
//  await ui.storageStageStore('../../storage/sourceDemo.json')


 // await ui.NavigateToURL(`${process.env.qa_mps_link}`)
 // await ui.type(`${process.env.qa_mps_username}`, loginPage.usernameFileld)
 // await ui.type(`${process.env.qa_mps_password}`, loginPage.passwordField)
 // await ui.clickElement(loginPage.loginButton)
 // await ui.waitForElement(loginPage.selectTenantTitle)
 // await ui.pauseExecution()
 // await ui.storageStageStore('../../storage/auth.json')
// })
});