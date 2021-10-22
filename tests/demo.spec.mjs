import { test, expect } from '@playwright/test';

test('expect to find a log in button', async ({ page }) => {
  await page.goto('http://localhost:3009/');
  const title = page.locator('text=Log In');
  await expect(title).toBeVisible();
});