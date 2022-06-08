import {expect, test} from '@playwright/test';

test('allegro', async ({page})=>{
const searchPhrase = 'buty męskie adidas'

    await page.goto('https://allegro.pl/');
    await page.waitForSelector('[role="alertdialog"] button:nth-of-type(1)');
    await page.click('[role="alertdialog"] button:nth-of-type(1)');
    await page.fill('input[name="string"]', searchPhrase);
    await page.click('button[data-role="search-button"]');

    await page.waitForSelector('[data-box-name="Listing title"] h1');
    await expect(page.locator('[data-box-name="Listing title"] h1')).toHaveText(searchPhrase);

})