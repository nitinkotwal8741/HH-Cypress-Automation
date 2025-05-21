describe('HomeHospital Website E-Consultation Test Suite', () => {
    // Base URL
    const baseUrl = 'https://dev.homehosp.com/signin'; // here we have to set the project URL

    beforeEach(() => {
        cy.visit(baseUrl);

        cy.fixture('user').then((data) => {

            cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

            cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)


            cy.xpath("//*[text()='Sign in']").click();
            cy.wait(5000)
            cy.xpath("//a[text()='Instant Consultation']").click();
           
        })

        
    })

    it('1. To check Instant Consultation page should be open', () => {
        cy.contains("Waiting Room").should('exist')
        cy.log('Instant Consultation is added on the page')
    })
});