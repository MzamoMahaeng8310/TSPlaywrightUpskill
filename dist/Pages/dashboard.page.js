"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPage = void 0;
const test_1 = require("@playwright/test");
class DashboardPage {
    page;
    openMenuButton;
    logoutLink;
    swagLabsLogo;
    usernameText;
    passwordText;
    constructor(page) {
        this.page = page;
        this.openMenuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
        this.swagLabsLogo = page.getByText('Swag Labs');
        this.usernameText = page.getByRole('heading', { name: 'Accepted usernames are:' });
        this.passwordText = page.getByRole('heading', { name: 'Password for all users:' });
    }
    async logout() {
        await this.openMenuButton.click();
        await this.logoutLink.click();
    }
    async verifyLogoutPage() {
        await (0, test_1.expect)(this.swagLabsLogo).toHaveText('Swag Labs');
        await (0, test_1.expect)(this.usernameText).toHaveText('Accepted usernames are:');
        await (0, test_1.expect)(this.passwordText).toHaveText('Password for all users:');
    }
    async isLoaded() {
        return this.swagLabsLogo.isVisible();
    }
}
exports.DashboardPage = DashboardPage;
