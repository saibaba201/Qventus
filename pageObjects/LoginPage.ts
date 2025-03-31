import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailTextBox: Locator;
  readonly nextButton: Locator;
  readonly passwordTextBox: Locator;
  readonly signInButton: Locator;
  readonly alert: Locator;
  constructor(page: Page) {
    this.page = page;
    this.emailTextBox= page.getByRole('textbox', { name: 'Email address' })
    this.nextButton=page.getByRole("button",{name:"Next"});
    this.passwordTextBox=page.getByRole('textbox',{name:'Password'});
    this.signInButton= page.getByRole("button",{name:'Sign In'});
    this.alert= page.getByRole('alert');
   }
 


  
  async typeEmail(email: string) {
    await this.emailTextBox.pressSequentially(email,{delay:100});
  }

  async clickNext() {
    await this.nextButton.click();
  }
  async getAlertText() {
   return await this.alert.innerText();
  }
  async typePassword(password: string) {
    await this.passwordTextBox.pressSequentially(password,{delay:100});
  }

  async clickSignIn() {
    await this.signInButton.click();
  }
}
