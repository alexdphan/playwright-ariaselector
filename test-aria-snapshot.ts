import { chromium } from 'playwright';

async function testAriaSnapshot() {
  // Launch the browser
  const browser = await chromium.launch();
  
  // Create a new context and page
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Navigate to a webpage
  await page.goto('https://www.google.com');
  
  // Get the main frame
  const frame = page.mainFrame();
  
  // Take the ARIA snapshot
  try {
    const snapshotString = await (frame.locator('body') as any).ariaSnapshot({ 
      ref: true, 
      emitGeneric: true 
    });
    
    console.log('ARIA Snapshot:', snapshotString);
  } catch (error) {
    console.error('Error taking ARIA snapshot:', error);
  }
  
  // Close the browser
  await browser.close();
}

testAriaSnapshot().catch(console.error);