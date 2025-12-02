"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appFixtures_1 = require("../../Helpers/fixtures/appFixtures");
(0, appFixtures_1.test)('dashboard loads after login', async ({ dashboardPage }) => {
    await dashboardPage.logout();
    await dashboardPage.verifyLogoutPage();
    (0, appFixtures_1.expect)(await dashboardPage.isLoaded()).toBeTruthy();
});
