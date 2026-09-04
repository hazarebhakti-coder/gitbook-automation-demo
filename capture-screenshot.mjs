import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 800 } });
await page.goto('http://127.0.0.1:4173');
await page.locator('#proctoring-card').screenshot({
  path: 'docs/assets/webcam-proctoring.png'
});
await browser.close();

console.log('Screenshot saved to docs/assets/webcam-proctoring.png');
