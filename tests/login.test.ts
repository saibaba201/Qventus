import test, { expect } from "@playwright/test";
import { LoginPage } from "../pageObjects/LoginPage";
const dataset=JSON.parse(JSON.stringify(require('../TestData/testData.json')));

test.beforeEach('Navigate to the QVENTUS application',async({page})=>{
    await page.goto(dataset.URL);

})
test("login with bad username",async({page})=>{
    
    const loginPage=new LoginPage(page);
    await loginPage.typeEmail(dataset.userEmail)
    await loginPage.clickNext();
    await loginPage.typePassword(dataset.password);
    await loginPage.clickSignIn();
    const alertText = await loginPage.getAlertText()
    expect(alertText).toContain('Unable to sign in');

})