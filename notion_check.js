const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.notion.so/login');
  await page.waitForLoadState('networkidle');
  console.log('Title:', await page.title());
  console.log('URL:', page.url());
  await browser.close();
})();
