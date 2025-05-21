describe('HomeHospital Website schedular-management Test Suite', () => {
    // Base URL
    const baseUrl = 'https://dev.homehosp.com/signin'; // here we have to set the project URL

    beforeEach(() => {
        cy.visit(baseUrl);

        cy.fixture('user').then((data) => {

            cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

            cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)


            cy.xpath("//*[text()='Sign in']").click();
            cy.wait(5000)
            cy.xpath("//a[text()='Scheduler Management ']").click();

        })
    })
    it.skip('1. To check Date filter button is present on the page', () => {
        cy.contains("From Date").should('exist')
        cy.contains("to Date").should('exist')
        cy.log('Date  filter is added on the page')
    })

    it.skip('2. To check Clear filter button is present on the page', () => {
        cy.contains("Clear").should('exist')
        cy.log('Clear  filter is added on the page')
    })

    it.skip('3. To check Available slot table heading and columns should be exist', () => {
        cy.contains("Available Slots").should('exist')
        cy.contains('Date').should('exist')
           cy.contains('From Time').should('exist')
              cy.contains('To Time').should('exist')
                 cy.contains('Appointment Booked').should('exist')
        cy.log('Available Slots table header is added on the page')
    })

    it.skip('4. To check Available slot should be exist in the table', () => {
        cy.xpath('//tbody[@role="rowgroup"]//tr').should('be.exist')
         cy.contains('Date').should('exist')
           cy.contains('From Time').should('exist')
              cy.contains('To Time').should('exist')
                 cy.contains('Appointment Booked').should('exist')
                    
    })

    it.skip('5. To check Available slot by applying filter with start date', () => {
        // Open the datepicker
        cy.get('#mat-input-2').click();

        // Navigate to May 2025 (example)
        cy.get('.mat-calendar-period-button').click(); // switch to year view
        cy.contains('.mat-calendar-body-cell', '2025').click();
        cy.contains('.mat-calendar-body-cell', 'MAY').click();

        // Pick the 15th
        cy.contains('.mat-calendar-body-cell', '15').click();
        cy.xpath("//*[text()='Search']").click();
        cy.xpath('//tbody[@role="rowgroup"]//tr').should('have.length', 3); // 3 appointment rows

    })
    it.skip('6. To check Available slot by applying filter by applying Start and To date', () => {
        // Open the datepicker
        cy.xpath("//*[@placeholder='From Date']").click();
        // Navigate to May 2025 (example)
        cy.get('.mat-calendar-period-button').click(); // switch to year view
        cy.contains('.mat-calendar-body-cell', '2025').click();
        cy.contains('.mat-calendar-body-cell', 'MAY').click();

        // Pick the 15th
        cy.contains('.mat-calendar-body-cell', '15').click();

        cy.wait(2000)
        // Open the To Date picker
        cy.xpath('//*[@placeholder="To Date"]').click();

        // Switch to year view
        cy.get('.mat-calendar-period-button').click();

        // Select year 2025
        cy.contains('.mat-calendar-body-cell', '2025').click();

        // Select month MAY
        cy.contains('.mat-calendar-body-cell', 'MAY').click();

        // Select day 25
        cy.contains('.mat-calendar-body-cell', '20').click();

        cy.xpath("//*[text()='Search']").click();
       // cy.xpath('//tbody[@role="rowgroup"]//tr').should('have.length', 3); // 3 appointment rows
        cy.wait(8000)
        cy.xpath('//tbody[@role="rowgroup"]//tr')
            .its('length')
            .then((count) => {
                cy.log('Number of appointments:', count);
                // You can add assertions too
                expect(count).to.be.greaterThan(0);
            })
 
    })
    it.skip('7. To check No of Appointment details slot table heading should be exist', () => {

        cy.xpath('//tbody[@role="rowgroup"]//tr//td[4]').click();
        cy.wait(5000)
        cy.contains('Appointment Booked View').should('exist')
        cy.contains('S.No').should('exist')
           cy.contains('From Time').should('exist')
              cy.contains('To Time').should('exist')
                 cy.contains('Slot Duration').should('exist')
                    cy.contains('No. of Slots').should('exist')
                    cy.contains('View Details').should('exist')



 
    })
    
    it.skip('8. To check Last Appointment Booked and date should be visible', () => {

       cy.contains('Last Appointment Booked').should('exist');
            
    })
        

    it('9. To check Clear button should be clickable and filter should be reset with current date', () => {
        // Open the datepicker
        cy.xpath("//*[@placeholder='From Date']").click();

        // Navigate to May 2025 (example)
        cy.get('.mat-calendar-period-button').click(); // switch to year view
        cy.contains('.mat-calendar-body-cell', '2025').click();
        cy.contains('.mat-calendar-body-cell', 'MAY').click();

        // Pick the 15th
        cy.contains('.mat-calendar-body-cell', '15').click();
        cy.xpath("//*[text()='Search']").click();
        cy.wait(5000)

        cy.xpath("//*[text()='Clear']").click();
        cy.wait(1000)
        cy.xpath("//*[@placeholder='From Date']")
            .invoke('val')
            .then((selectedDate) => {
                cy.log('Selected date is:', selectedDate);

                // Optional: Assert or reuse the value
                expect(selectedDate).to.eq('5/20/2025'); // Or compare with expected date
            })


    })

    

});