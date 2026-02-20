import { Page, Locator, expect } from '@playwright/test';

export class UiHelper {
    constructor(private page: Page) { }

    // --------------------- LOGGING --------------------
    log(message: string) {
        console.log(`[UIHelper] $[message]`);
    }

    //----------------------- Basic UI Actions --------------------

    async NavigateToURL(url: string){
        await this.page.goto(url)

    }
    async clickElement(element: Locator) {
        await element.click();
    }

    async type(typeText: string, element: Locator) {
        await element.fill(typeText)
    }

    async hover(element: Locator) {
        await element.hover()
    }

    async rightClick(element: Locator) {
        await element.click({ button: 'right' })
    }

    async doubleClick(element: Locator) {
        await element.dblclick()
    }

    async pressKey(key: string) {
        await this.page.keyboard.press(key)
    }

    // -------------FILE UPLOAD ------- 

    async uploadFile(element: Locator, filePath: string) {
        await element.setInputFiles(filePath)
    }

    async clearUploadedFiles(element: Locator) {
        await element.setInputFiles([])
    }

    //--------- CHECKBOX & RADIO BUTTON -----

    async check(element: Locator) {
        await element.check()
    }

    async uncheck(element: Locator) {
        await element.uncheck()
    }

    async SelectRadioButton(element: Locator) {
        await element.check()
    }

    //-----------DROPDOWNS--------------------
    async SelectDropdownByValue(element: Locator, value: string) {
        await element.selectOption({ value })
    }

    async selectDropdownByText(element: Locator, label: string) {
        await element.selectOption({ label })
    }

    //----------------------DRAG AD DROP---------------
    async dragAndDrop(source: Locator, target: Locator) {

        const srcBox = await source.boundingBox()
        const tgtBox = await target.boundingBox()

        if (!srcBox || !tgtBox) throw new Error("Drap / drop elements not visible")
        await this.page.mouse.move(srcBox.x + srcBox.width / 2, srcBox.y + srcBox.height / 2)
        await this.page.mouse.down()
        await this.page.mouse.move(tgtBox.x + tgtBox.width / 2, tgtBox.y + tgtBox.height / 2, { steps: 10 })
        await this.page.mouse.up()
    }

    //---------------------------TABLE HELPERS ----------------------
    async getTableColumnIndex(table: Locator, columnName: string): Promise<number> {
        const headers = table.locator("thead th")
        const count = await headers.count()
        for (let i = 0; i < count; i++) {
            const text = await headers.nth(i).innerText()
            if (text.trim() === columnName.trim()) {
                return i
            }

        }
        throw new Error(`Column "${columnName}" was not found`)

    }

    async getTableRowByCellText(table: Locator, text: string): Promise<Locator | null> {

        const rows = table.locator("tbody tr")
        const count = await rows.count()
        for (let i = 0; i < count; i++) {
            const row = rows.nth(i)
            if (await row.locator("td", { hasText: text }).count() > 0) {
                return row
            }
        }
        return null
    }

    async getCellText(row: Locator, cellIndex: number) {
        return row.locator("td").nth(cellIndex).innerText()
    }

    //----------------PAGINATION HELPERS----------------
    async goToNextPage(nextButton: Locator) {
        if (await nextButton.isEnabled()) {
            await nextButton.click()
        }
    }

    async goToPreviousPage(prevButton: Locator) {
        if (await prevButton.isEnabled()) {
            await prevButton.click
        }

    }

    //-------------------TOAST MESSAGES----------------
    async waitForToastMEssage(text: string, timeout = 5000) {
        const toast = this.page.locator(`text=${text}`)
        await expect(toast).toBeVisible({ timeout })

    }

    //-------------------WAITS----------------------
    async waitForElement(element: Locator) {
        await element.waitFor({ state: "visible" })
    }

    async waitForPagaeLoad() {
        await this.page.waitForLoadState("load")

    }

    async waitForNetworkIdle() {
        await this.page.waitForLoadState("networkidle")
    }

      async isLoaded(element : Locator): Promise<boolean> {
        return element.isVisible()
    }   

    //------------------SCROLLING----------------------
    async scrollIntoView(element: Locator) {
        await element.scrollIntoViewIfNeeded()

    }

    //-----------------SCREENHOT----------------------
    async takeFullPageScreenshot(filename: string) {

        await this.page.screenshot({ path: `test-results/screenshots/${filename}`, fullPage: true })
    }

    async takeElementScreenshot(element: Locator, filename: string) {

        await element.screenshot({ path: `test-results/screenshots/${filename}` })
    }

     
}