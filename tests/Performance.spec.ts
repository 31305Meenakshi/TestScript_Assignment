import { test, expect } from "@playwright/test";
import data from "../Data/data.json";
import { LoginPage } from "../Pages/login";
import { Perform } from "../Pages/Performance";
import { NavigationPage } from "../Pages/navigation";

test.describe("Orange Test", () => {
  let page;
  let context;
  let Login;
  let PerformPage;
  let navigate;

  test.beforeAll("OpenWeb", async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    Login = new LoginPage(page);
    navigate = new NavigationPage(page);

    PerformPage = new Perform(page);

    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  test("positivetest", async () => {
    await Login.login(data.username, data.password);
    await navigate.navigationActions("Performance");

    /*****     Performance     *****/
    await PerformPage.performPage();
    await PerformPage.configurePage();
    await PerformPage.reviewPage();
    await PerformPage.trackerPage();
  });
});
