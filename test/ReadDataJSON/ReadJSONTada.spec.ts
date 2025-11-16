import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json'


test.describe("Data Driven Tests Template For framework", () => {

  for (const credentials of testData.Credentials_QA) {
    test(` Logins for test users: ${credentials.username}`, async ({ page }) => {

      await page.goto(`${process.env.data_drive_link}`)
      await page.fill("#user-name", credentials.username)
      await page.fill("#password", credentials.password)
      await page.locator("#login-button").click()
      await expect(page).toHaveURL(/inventory/)

    })

  }

})
