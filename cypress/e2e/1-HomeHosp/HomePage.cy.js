describe('HomeHospital Website Homepage Test Suite', () => {
    // Base URL
    const baseUrl = 'https://dev.homehosp.com/signin'; // here we have to set the project URL

    beforeEach(() => {
        cy.visit(baseUrl);

        cy.fixture('user').then((data) => {

            cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

            cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)


            cy.xpath("//*[text()='Sign in']").click();
            cy.wait(5000)


        })
    })

    it('1. UI-To check  My Appointment Page', () => {

        cy.contains("Home").should('exist')
        cy.log('Home Page is Opened')



    })
    it('2. UI- To check Provider name should be display on the page', () => {

        cy.contains("Welcome").should('exist')
        cy.contains('Frank').should('exist')

    })

    it('3. To check Status should be display on the page', () => {

        cy.contains("Status").should('exist')
        cy.log('Status filter is added on the page')

    })

    it('4. To check Apppointment mode filter should be display on the page', () => {

        cy.contains("Appointment Mode").should('exist')
        cy.log('Appointment mode is added on the page')

    })

    it('5. Prescription notification dropdown should be display on the page', () => {

        cy.contains("Prescription Notifications").should('exist')
        cy.log('Prescription notifications dropdown is visible to user')

    })
    it('6.  Total appointment booked today count should be display on the page', () => {

        cy.contains("Total appointment booked today").should('exist')
        cy.log(' Total appointment booked today is visible to user')

        cy.xpath('//h3[@class="booking-count"]')
            .should('exist')
            .invoke('text')
            .then((text) => {
                console.log('Booking count:', text.trim()); // prints '04' in browser console
                cy.log('Booking count: ' + text.trim());    // shows in Cypress UI
            })
    })


    
});