 describe('HomeHospital Website E-Consultation Test Suite', () => {

 

  it('2.should sign in successfully with valid credentials', () => {
    
     cy.visit('https://homecareiq-qat.azurewebsites.net')
    cy.get('#Input_LoginId').type('jatin+751@arkenea.com')
    cy.get('#txtPassword').type('Homecare@123')
    cy.get('.btn').click()
    cy.wait(5000)
     cy.get('#btn-activity-continue')
  .should('be.visible')
  .and('not.be.disabled'); 
  cy.get('#btn-activity-continue').click()
  cy.wait(5000)

  })
 });
 




