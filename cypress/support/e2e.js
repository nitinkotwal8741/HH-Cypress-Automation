// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath')
supportFile: 'cypress/support/e2e.js';
import 'cypress-mochawesome-reporter/register';
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore only known cross-origin script errors
  if (err.message.includes('Script error')) {
    return false;
  }
});
// cypress/support/commands.ts

 const baseUrl = 'https://dev.homehosp.com/signin'; // here we have to set the project URL
Cypress.Commands.add('login', () => {
  cy.session('user-session', () => {
    cy.visit(baseUrl);
    cy.fixture('user').then((data) => {

           cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Patient_UserName)

            cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Patient_Password)

            cy.xpath("//*[text()='Sign in']").click();
            
          cy.wait(5000)
          cy.url().should('include', '/patient/home');
           
        })
  })
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
