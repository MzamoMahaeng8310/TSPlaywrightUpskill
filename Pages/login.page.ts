import { Page, Locator } from '@playwright/test'


export class LoginPage {
    readonly page: Page
    readonly usernameFileld: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly loginButtonSouceDemo: Locator
    readonly selectTenantTitle: Locator
    readonly comboSelectionTenant: Locator
    readonly tenantDropDownSelect: Locator


    constructor(page: Page) {
        this.page = page
        this.usernameFileld = page.getByRole('textbox', {name: 'Username'})
        this.passwordField = page.getByRole('textbox', {name: 'Password'})
        this.loginButton = page.getByRole('button', {name: 'Sign in'})
        this.loginButtonSouceDemo = page.locator('#login-button')
        this.selectTenantTitle = page.getByRole('heading', {name: 'Please select a tenant'})
        this.comboSelectionTenant = page.getByRole('combobox')
        this.tenantDropDownSelect = page.getByText('Wealth at Work - Segregated')


    }

}

