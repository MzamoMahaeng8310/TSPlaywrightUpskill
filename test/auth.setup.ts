import {test} from "../Helpers/fixtures/appFixtures";

test('Set up all the storage states', async ({ui, loginPage}) => {
    await ui.NavigateToURL(`${process.env.qa_mps_link}`)
    await ui.type(`${process.env.qa_mps_username}`, loginPage.usernameFileld)
    await ui.type(`${process.env.qa_mps_password}`, loginPage.passwordField)
    await ui.clickElement(loginPage.loginButton)
    await ui.waitForElement(loginPage.selectTenantTitle)
    await ui.storageStageStore('../../storage/auth.json')
})
