import { test as base } from '@playwright/test'
import { LoginPage } from '../../Pages/login.page'
import { DashboardPage } from '../../Pages/dashboard.page'
import { ApiClient } from '../api/apiClient'
import testData from '../../test-data/qa/testdata.json'

type AppFixtures = {
    loginPage: LoginPage
    dashboardPage: DashboardPage
    api: ApiClient
};

export const test = base.extend<AppFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page)
        await use(dashboardPage)
    },

    api: async ({ request }, use) => {
        const api = new ApiClient(request,testData.endPoint.baseURL)
        await use(api)
    }
});

test.beforeEach(async ({ loginPage }) => {
   await loginPage.goto()
    await loginPage.login(testData.Credentials_QA[0].username, testData.Credentials_QA[0].password)
})

export { expect } from '@playwright/test'