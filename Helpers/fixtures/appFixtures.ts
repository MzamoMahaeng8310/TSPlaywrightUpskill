import {test as base} from '@playwright/test'
import {LoginPage} from '../../Pages/login.page'
import {DashboardPage} from '../../Pages/dashboard.page'
import {ApiClient} from '../api/apiClient'
import testData from '../../test-data/qa/testdata.json'
import {UiHelper} from '../uiHelpers/UiHelper';

type AppFixtures = {
    loginPage: LoginPage
    dashboardPage: DashboardPage
    api: ApiClient
    ui: UiHelper
};

export const test = base.extend<AppFixtures>({

    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

    dashboardPage: async ({page}, use) => {
        const dashboardPage = new DashboardPage(page)
        await use(dashboardPage)
    },

    api: async ({request}, use) => {
        const api = new ApiClient(request, testData.endPoint.baseURL)
        await use(api)
    },

    ui: async ({page}, use) => {
        const ui = new UiHelper(page)
        await use(ui)
    },
});
test.beforeAll(async ({ ui, loginPage }) => {
    await ui.NavigateToURL((`${process.env.data_drive_link}`))
    await ui.type(testData.Credentials_QA[0].username, loginPage.usernameFileld)
    await ui.type(testData.Credentials_QA[0].password, loginPage.passwordField)
    await ui.clickElement(loginPage.loginButtonSouceDemo)
    await  ui.waitForNetworkIdle()
    await ui.storageStageStore('../../storage/sourceDemo.json')

//
//     // await ui.NavigateToURL(`${process.env.qa_mps_link}`)
//     // await ui.type(`${process.env.qa_mps_username}`, loginPage.usernameFileld)
//     // await ui.type(`${process.env.qa_mps_password}`, loginPage.passwordField)
//     // await ui.clickElement(loginPage.loginButton)
//     // await ui.waitForElement(loginPage.selectTenantTitle)
//     // await ui.pauseExecution()
//     // await ui.storageStageStore('../../storage/auth.json')
})


export {expect} from '@playwright/test'