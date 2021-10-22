import {config} from 'dotenv';
import { test, expect } from '@playwright/test';

config({ path: '.env.local' });

test('expect to find a log in button', async ({ page }) => {
  await page.goto('http://localhost:3009/');
  const title = page.locator('text=Log In');
  await expect(title).toBeVisible();
});

test('expect to be able to log in', async ({ page }) => {
  await page.goto('http://localhost:3009/login');
  await page.fill('[label="Username"]', process.env.LOGIN_NAME);
  await page.fill('[label="Password"]', process.env.LOGIN_PASSWORD);

  // TODO: Not good assumption but works
  await page.click('[type="button"]');

  // TODO: This would be better but doesn't work
  // await page.click('text=Log In');

  await page.waitForSelector('text=History');

  const history = page.locator('text=History');
  await expect(history).toBeVisible();
});
