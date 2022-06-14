import { expect, test } from '@playwright/test';

test('allegro', async ({ page }) => {
	const url = 'https://allegro.pl/';
	const searchPhrase = 'buty męskie adidas';

	await page.goto(url);
	await page.waitForSelector('[role="alertdialog"] button:nth-of-type(1)');
	await page.click('[role="alertdialog"] button:nth-of-type(1)');
	await page.fill('input[name="string"]', searchPhrase);
	await page.click('button[data-role="search-button"]');

	await page.waitForSelector('[data-box-name="Listing title"] h1');
	await expect(page.locator('[data-box-name="Listing title"] h1')).toHaveText(searchPhrase);
});

test('steam', async ({ page }) => {
	const url = 'https://store.steampowered.com/';

	await page.goto(url);

	async function clicku(page) {
		// await page.waitForSelector('img[alt="STEAM"]');
		await page.hover('[id="noteworthy_tab"]');
		await page.waitForSelector('[id="noteworthy_flyout"]');
		await page.click('[id="noteworthy_flyout"]');
		await page.waitForNavigation(url + 'search/?filter=topsellers');
		await expect(page).toHaveURL(url + 'search/?filter=topsellers');
	}

	await clicku(page);
});
