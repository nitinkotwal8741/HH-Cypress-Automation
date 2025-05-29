describe('HomeHospital Website My Appointment Test Suite', () => {

  // Base URL
  const baseUrl = 'https://dev.homehosp.com/'; // here we have to set the project URL

  beforeEach(() => {
    cy.visit('https://dev.homehosp.com/signin');

    cy.fixture('user').then((data) => {

      cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

      cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)


      cy.xpath("//*[text()='Sign in']").click();
      cy.wait(5000)
      cy.xpath("//a[text()='My Appointments']").click();


    });
  });

  it('1. UI-To check  My Appointment Page', () => {

    cy.contains("My Appointments").should('exist')
    cy.log('My Appointments page is Opened')

  })
  it('2. To check Search is present on the page', () => {
    cy.contains("Search").should('exist')
    cy.log('Search is added on the page')
    cy.xpath("//*[@placeholder='Search by patient name']").should('exist')
    cy.log('Search bar is added on the page')
  })

  it('3. To check Status filter is present on the page', () => {
    cy.contains("Status").should('exist')
    cy.log('Status filter is added on the page')
  })
  it('4. To check Appointment Mode filter is present on the page', () => {
    cy.contains("Appointment Mode").should('exist')
    cy.log('Appointment mode is added on the page')
  })
  it('5. To check Appointment Start and End date filter is present on the page', () => {
    cy.contains("From Date").should('exist')
    cy.log('From date  filter is added on the page')
    cy.contains("To Date").should('exist')
    cy.log('To date filter is added on the page')
  })
  it('6. To check Clear filter button is present on the page', () => {
    cy.contains("Clear Filter").should('exist')
    cy.log('Clear  filter is added on the page')
  })

  it('7. To check Incomplete Appointments button is present on the page', () => {
    cy.contains("Incomplete Appointments").should('exist')
  })

  it('8. To check Search is working properly', () => {


    cy.fixture('user').then((data) => {

      cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-value').click();
      cy.xpath("//*[@role='option'][1]").click();
      cy.wait(5000)
      cy.log(data.SearchText)
      cy.get('#mat-input-2').type(data.SearchText)
      cy.wait(1000)
      cy.xpath("//span[text()='Search']").click()
      cy.wait(5000)



      cy.xpath("//*[@class='full--width align-items-center']//div//div//h5")  // Replace with your class or element selector
        .its('length')
        .then((count) => {
          cy.log('Total elements found: ' + count)


          // You can add assertions too
          expect(count).to.be.greaterThan(0);
        })
      cy.xpath(' //*[@fxlayoutalign="center center"]')
        .its('length')
        .then((count) => {

          cy.log('Number of appointments:', count);
          cy.xpath('//*[@id="rightside-content-hold"]//app-my-appointments//div[4]//div[3]/div[1]//h5')
            .then(($el) => {
              const actualText = $el.text().toLowerCase();
              expect(actualText).to.include(data.SearchText); // 'james' in lowercase
            });


        })
    })



  })

});