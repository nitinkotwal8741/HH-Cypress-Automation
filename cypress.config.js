const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "http://dev.homehosp.com", // optional, change to your app's URL
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }
});
