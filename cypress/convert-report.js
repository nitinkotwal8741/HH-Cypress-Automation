const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Use path.resolve for consistent cross-platform path building
  const reportPath = path.resolve(__dirname, "reports/index_001.html");

  if (!fs.existsSync(reportPath)) {
    console.error("❌ Report HTML file not found:", reportPath);
    process.exit(1);
  }

  // Use file:// protocol to load local file correctly
  await page.goto(`file://${reportPath}`, { waitUntil: "networkidle0" });

  // Save PDF with correct .pdf extension
  await page.pdf({
    path: path.resolve(__dirname, "reports/index_001.pdf"),
    format: "A4",
    printBackground: true
  });

  console.log("✅ PDF generated at cypress/reports/index_001.pdf");

  await browser.close();
})();
