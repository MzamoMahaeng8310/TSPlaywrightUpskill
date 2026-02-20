import { Page, Locator, expect } from '@playwright/test'

export class DashboardPage {
    readonly page: Page
    readonly openMenuButton: Locator
    readonly logoutLink: Locator
    readonly swagLabsLogo: Locator
    readonly usernameText: Locator
    readonly passwordText: Locator


    constructor(page: Page) {
        this.page = page
        this.openMenuButton = page.getByRole('button', { name: 'Open Menu' })
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]')
        this.swagLabsLogo = page.getByText('Swag Labs')
        this.usernameText = page.getByRole('heading', { name: 'Accepted usernames are:' })
        this.passwordText = page.getByRole('heading', { name: 'Password for all users:' })
    }

    // async logout() {
    //     await this.openMenuButton.click()
    //     await this.logoutLink.click()
    // }

    // async verifyLogoutPage() {
    //     await expect(this.swagLabsLogo).toHaveText('Swag Labs')
    //     await expect(this.usernameText).toHaveText('Accepted usernames are:')
    //     await expect(this.passwordText).toHaveText('Password for all users:')
    // }

    // async isLoaded(): Promise<boolean> {
    //     return this.swagLabsLogo.isVisible()
    // }








}