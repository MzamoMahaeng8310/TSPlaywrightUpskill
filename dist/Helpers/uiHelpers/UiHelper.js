"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiHelper = void 0;
const test_1 = require("@playwright/test");
class UiHelper {
    page;
    constructor(page) {
        this.page = page;
    }
    // --------------------- LOGGING --------------------
    log(message) {
        console.log(`[UIHelper] ${message}`);
    }
    //----------------------- Basic UI Actions --------------------
    async NavigateToURL(url) {
        await this.page.goto(url);
    }
    async clickElement(element) {
        await element.click();
    }
    async type(typeText, element) {
        await element.fill(typeText);
    }
    async hover(element) {
        await element.hover();
    }
    async rightClick(element) {
        await element.click({ button: 'right' });
    }
    async doubleClick(element) {
        await element.dblclick();
    }
    async pressKey(key) {
        await this.page.keyboard.press(key);
    }
    // -------------FILE UPLOAD ------- 
    async uploadFile(element, filePath) {
        await element.setInputFiles(filePath);
    }
    async clearUploadedFiles(element) {
        await element.setInputFiles([]);
    }
    //--------- CHECKBOX & RADIO BUTTON -----
    async check(element) {
        await element.check();
    }
    async uncheck(element) {
        await element.uncheck();
    }
    async SelectRadioButton(element) {
        await element.check();
    }
    //-----------DROPDOWNS--------------------
    async SelectDropdownByValue(element, value) {
        await element.selectOption({ value });
    }
    async selectDropdownByText(element, label) {
        await element.selectOption({ label });
    }
    //----------------------DRAG AD DROP---------------
    async dragAndDrop(source, target) {
        const srcBox = await source.boundingBox();
        const tgtBox = await target.boundingBox();
        if (!srcBox || !tgtBox)
            throw new Error("Drap / drop elements not visible");
        await this.page.mouse.move(srcBox.x + srcBox.width / 2, srcBox.y + srcBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(tgtBox.x + tgtBox.width / 2, tgtBox.y + tgtBox.height / 2, { steps: 10 });
        await this.page.mouse.up();
    }
    //---------------------------TABLE HELPERS ----------------------
    async getTableColumnIndex(table, columnName) {
        const headers = table.locator("thead th");
        const count = await headers.count();
        for (let i = 0; i < count; i++) {
            const text = await headers.nth(i).innerText();
            if (text.trim() === columnName.trim()) {
                return i;
            }
        }
        throw new Error(`Column "${columnName}" was not found`);
    }
    async getTableRowByCellText(table, text) {
        const rows = table.locator("tbody tr");
        const count = await rows.count();
        for (let i = 0; i < count; i++) {
            const row = rows.nth(i);
            if (await row.locator("td", { hasText: text }).count() > 0) {
                return row;
            }
        }
        return null;
    }
    async getCellText(row, cellIndex) {
        return row.locator("td").nth(cellIndex).innerText();
    }
    //----------------PAGINATION HELPERS----------------
    async goToNextPage(nextButton) {
        if (await nextButton.isEnabled()) {
            await nextButton.click();
        }
    }
    async goToPreviousPage(prevButton) {
        if (await prevButton.isEnabled()) {
            await prevButton.click();
        }
    }
    //-------------------TOAST MESSAGES----------------
    async waitForToastMEssage(text, timeout = 5000) {
        const toast = this.page.locator(`text=${text}`);
        await (0, test_1.expect)(toast).toBeVisible({ timeout });
    }
    //-------------------WAITS----------------------
    async waitForElement(element) {
        await element.waitFor({ state: "visible" });
    }
    async waitForPagaeLoad() {
        await this.page.waitForLoadState("load");
    }
    async waitForNetworkIdle() {
        await this.page.waitForLoadState("networkidle");
    }
    async isLoaded(element) {
        return element.isVisible();
    }
    //------------------SCROLLING----------------------
    async scrollIntoView(element) {
        await element.scrollIntoViewIfNeeded();
    }
    //-----------------SCREENHOT----------------------
    async takeFullPageScreenshot(filename) {
        await this.page.screenshot({ path: `test-results/screenshots/${filename}`, fullPage: true });
    }
    async takeElementScreenshot(element, filename) {
        await element.screenshot({ path: `test-results/screenshots/${filename}` });
    }
    async openPortfolioByName(name) {
        await this.page.locator(`text=${name}`).click();
    }
}
exports.UiHelper = UiHelper;
