import { expect } from '@playwright/test';
import {test} from "../Helpers/fixtures/appFixtures";

test('Verify cell value in the table', async ({ ui,dashboardPage }) => {
    await ui.NavigateToURL('https://practicetestautomation.com/practice-test-table/');
    await ui.verifyCellValue(dashboardPage.row,'Advanced')
});