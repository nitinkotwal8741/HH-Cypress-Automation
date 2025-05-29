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
            cy.xpath("//a[text()='E - Consultation']").click();

        })
    })

    it('1. To check E consutlation page should be open', () => {
        cy.contains("E - Consultation").should('exist')
        cy.log('Date  filter is added on the page')
    })

    it('2. To check E consutlation payment Note should be Visible', () => {
        cy.contains("Note: Payment of the E-Consultation must be carried out Offline*").should('exist')
        cy.log('Note: Payment of the E-Consultation must be carried out Offline*')
    })
    it('3. To check From and To Date filter should be added', () => {
        cy.contains("From Date").should('exist')
        cy.contains("To Date").should('exist')
        cy.log('Date  filter is added on the page')
    })
    it('4. To check From and To Date filter should be added', () => {
        cy.contains("Search").should('exist')
        cy.log('Search is added over the screen')
    })
    it('5. To check E - Requests abd Book appointment tab should be visible to user and should be clickable', () => {
        cy.contains("E - Requests").should('exist')
        cy.contains("Book Appointment").should('exist')

        cy.log('Both tab is displayed on the screen')
    })
    it('6. To check View appointment Details button should be visible to user and should be clickable', () => {
        cy.contains("View Details").should('exist')
        cy.log('View Details button is clickable')
    })

    it('7. To check start and end date filter', () => {

        cy.xpath("//*[@placeholder='From']").click();
        // Navigate to May 2025 (example)
        cy.get('.mat-calendar-period-button').click(); // switch to year view
        cy.contains('.mat-calendar-body-cell', '2025').click();
        cy.contains('.mat-calendar-body-cell', 'APR').click();

        // Pick the 1st
        cy.contains('.mat-calendar-body-cell', '1').click();


        cy.get('.sub--scroll > :nth-child(1)')
            .invoke('val')
            .then((value) => {
                if (value) {
                    cy.log('Date is selected:', value);
                } else {
                    cy.log('No date selected');
                }
            })

        cy.wait(5000)

    })

    it('8. To check appointmentlisted as per date filter applied', () => {


        cy.xpath("//*[@placeholder='From']").click();
        // Navigate to May 2025 (example)
        cy.get('.mat-calendar-period-button').click(); // switch to year view
        cy.contains('.mat-calendar-body-cell', '2025').click();
        cy.contains('.mat-calendar-body-cell', 'APR').click();

        // Pick the 1st
        cy.contains('.mat-calendar-body-cell', '1').click();

        cy.wait(5000)
        cy.xpath('//*[@fxlayoutalign="center center"]')
            .its('length')
            .then((Value) => {
                if (Value > 0) {
                    cy.log('No of searched appointments ' + Value);
                    // You can add assertions or further logic here
                } else {

                    cy.contains("0 Record Found").should('exist')
                    // Handle empty case if needed
                }
            })


    })

    it('9. To check Book appointment tab', () => {

        cy.contains("Book Appointment").click();
        cy.xpath('//*[@fxlayoutalign="center center"]')
            .its('length')
            .then((Value) => {
                if (Value > 0) {
                    cy.log('No of searched appointments ' + Value);
                    // You can add assertions or further logic here
                } else {

                    cy.contains("0 Record Found").should('exist')
                    // Handle empty case if needed
                }
            })
    })




});
