 describe('HomeHospital Website E-Consultation Test Suite', () => {
  
 it('1.To Check clinicina Should visit the homepage', () => {
   cy.visit('https://homecareiq-qat.azurewebsites.net')
    //cy.xpath("//*[@id='Input_LoginId']").visit('jatin+751@arkenea.com');
    cy.get('#Input_LoginId').type('jatin+751@arkenea.com')
    cy.get('#txtPassword').type('Homecare@123')
    cy.get('.btn').click()
    cy.wait(10000)
    cy.contains('Work Type vs Time (Values in hours)').should('exist');
    cy.contains('Skip').click()
    cy.get('#Note').type('Clinician Visit')
 

 })



});
