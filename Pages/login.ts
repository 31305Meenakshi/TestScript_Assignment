import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username_textbox: Locator;
  readonly password_textbox: Locator;
  readonly login_button: Locator;
  // readonly pause: Locator;
  readonly logout1: Locator;
  readonly logoutbtn: Locator;
  readonly assertUsername: Locator;
  readonly assertPassword: Locator;

  constructor(page) {
    this.page = page;
    this.username_textbox = page.locator("input[placeholder='Username']");
    this.password_textbox = page.locator("input[placeholder='Password']");
    this.login_button = page.locator("button", { name: "Login" });
    this.assertUsername = page.locator(
      'div[class$="orangehrm-demo-credentials"]>p:nth-child(1)'
    );
    this.assertPassword = page.locator(
      'div[class$="orangehrm-demo-credentials"]>p:nth-child(2)'
    );

    this.pause = page.pause();
     this.logout1 = page.locator('li[class="oxd-userdropdown"]');
     this.logoutbtn = page.locator('a[href="/web/index.php/auth/logout"]');
    this.dashboard = page.locator("a[href='/web/index.php/dashboard/index']");
  }

  async login(username, password) {
     expect(this.assertUsername).toHaveText("Username : " + username);
    await this.username_textbox.fill(username);
     expect(this.assertPassword).toHaveText("Password : " + password);
    await this.password_textbox.fill(password);
      expect(this.login_button).toHaveText(" Login ");
    await this.login_button.click();
    //  await this.pause;
    //await this.dashboard.click();
  }

    async logout() {
      await this.logout1.click();
      await this.logoutbtn.click();
    }
}
