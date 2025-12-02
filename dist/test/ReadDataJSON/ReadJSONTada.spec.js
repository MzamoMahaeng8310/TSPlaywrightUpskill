"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const testdata_json_1 = __importDefault(require("../../test-data/qa/testdata.json"));
test_1.test.describe("Data Driven Tests Template For framework", () => {
    for (const credentials of testdata_json_1.default.Credentials_QA) {
        (0, test_1.test)(` Logins for test users: ${credentials.username}`, async ({ page }) => {
            await page.goto(`${process.env.data_drive_link}`);
            await page.fill("#user-name", credentials.username);
            await page.fill("#password", credentials.password);
            await page.locator("#login-button").click();
            await (0, test_1.expect)(page).toHaveURL(/inventory/);
        });
    }
});
