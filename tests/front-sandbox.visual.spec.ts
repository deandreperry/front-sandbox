import { expect, test } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "mobile", width: 390, height: 844 },
];

for (const viewport of viewports) {
  test(`Front Sandbox visual smoke - ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/");
    await expect(page.getByText("Front Sandbox").first()).toBeVisible();
    await expect(page.locator("#previewFrame")).toBeVisible();
    await expect(page.locator("#projectSidebar")).toBeVisible();
    await page.screenshot({
      path: `test-results/front-sandbox-${viewport.name}.png`,
      fullPage: true,
    });
  });
}
