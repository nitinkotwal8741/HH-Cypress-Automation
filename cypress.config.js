const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    baseUrl: "https://dev.homehosp.com/signin", // this is OK if you're directly visiting /signin
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  }
});
