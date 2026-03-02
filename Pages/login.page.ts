import { Page, Locator } from '@playwright/test'


export class LoginPage {
    readonly page: Page
    readonly usernameFileld: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameFileld = page.locator('#user-name')
        this.passwordField = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }
   
}

