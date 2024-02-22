import { test, expect } from "@playwright/test";
import data from "../Data/data.json";
import { LoginPage } from "../Pages/login";
import { Claim } from "../Pages/Claim";
import { NavigationPage } from "../Pages/navigation";

test.describe("Orange Test", () => {
  let page;
  let context;
  let Login;
  let ClaimPage;
  let navigate;

  test.beforeAll("OpenWeb", async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    Login = new LoginPage(page);
    navigate = new NavigationPage(page);

    ClaimPage = new Claim(page);

    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  test("positivetest", async () => {
    await Login.login(data.username, data.password);

    await navigate.navigationActions("Claim");

    /*****           Claim           *****/
    await ClaimPage.claimPage();
    await ClaimPage.event(data.eventname);
    await ClaimPage.expensemethod(data.expensename);
  });
});
