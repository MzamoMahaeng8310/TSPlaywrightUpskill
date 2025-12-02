"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    page;
    usernameFileld;
    passwordField;
    loginButton;
    constructor(page) {
        this.page = page;
        this.usernameFileld = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }
    async goto() {
        await this.page.goto(`${process.env.data_drive_link}`);
    }
    async login(username, password) {
        await this.usernameFileld.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
exports.LoginPage = LoginPage;
