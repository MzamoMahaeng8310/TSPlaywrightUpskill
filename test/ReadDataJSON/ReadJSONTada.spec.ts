import { test, expect } from '@playwright/test';
import testData from  '../../test-data/qa/testdata.json'


test.describe("Data Driven Tests Template For framework",() => {

    for (const credentials of testData.Credentials_QA)
   {
        test(` Logins for test users: ${credentials.username}`, async ({page}) =>
       {  
    
            await page.goto(`${process.env.data_drive_link}`)
            await page.fill("#user-name",credentials.username)
            await page.fill("#password",credentials.password)
            await page.locator("#login-button").click()
            await expect(page).toHaveURL(/inventory/)  
    
       })

    }

})




//console.log(testData.Credentials_QA)

//type TestData = {
  //  TestData1: {
   //     Skill1: string,
    //    Skill2: string
    //},
    //TestData2: {
      //  Skill1: string,
       // Skill2: string
    //},
    //Credentials_QA: {
      //  username: string,
        //password: string
    //}

//}
//const typeTestData = testData as TestData
//for (const dataSetName in typeTestData) {

       // const skills = typeTestData[dataSetName as keyof TestData];
        //https://youtu.be/YfRazDhi9Fw?t=1250
        
//}

//test('Data Driven Test - Read Data From JSON', async ({ page }) => {

 //   await page.goto(`${process.env.practice_qa}`)
 //   await page.locator('(//a[normalize-space()="Practice"])[1]').click()
 ///   await expect(page).toHaveURL('https://practicetestautomation.com/practice/')
 //s   await expect(page.locator('//em[contains(text(),"Page to reproduce the most common Selenium Excepti")]')).toHaveText('Page to reproduce the most common Selenium Exceptions.')


//}); 