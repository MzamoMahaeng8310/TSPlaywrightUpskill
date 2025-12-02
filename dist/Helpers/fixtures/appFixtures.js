"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const test_1 = require("@playwright/test");
const login_page_1 = require("../../Pages/login.page");
const dashboard_page_1 = require("../../Pages/dashboard.page");
const apiClient_1 = require("../api/apiClient");
const testdata_json_1 = __importDefault(require("../../test-data/qa/testdata.json"));
exports.test = test_1.test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new login_page_1.LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new dashboard_page_1.DashboardPage(page);
        await use(dashboardPage);
    },
    api: async ({ request }, use) => {
        const api = new apiClient_1.ApiClient(request, testdata_json_1.default.endPoint.baseURL);
        await use(api);
    }
});
//test.beforeEach(async ({ loginPage }) => {
//  await loginPage.goto()
//await loginPage.login(testData.Credentials_QA[0].username, testData.Credentials_QA[0].password)
//})
var test_2 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_2.expect; } });
