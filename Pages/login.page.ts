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
    async goto() {
        await this.page.goto(`${process.env.data_drive_link}`)
    }

    async login(username: string, password: string) {
        await this.usernameFileld.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
}

