import { test, expect } from "@tests/support/fixtures.js";

test("exceptions in production build", async ({ page }) => {
  await page.goto("/");
  // Wait for scripts to finish executing, there might be exceptions that
  // happen after the page has been painted.
  await page.waitForTimeout(2000);
  await expect(page.getByText("Explore", { exact: true })).toBeVisible();
});
