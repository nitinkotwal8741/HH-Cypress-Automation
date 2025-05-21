// Base URL
describe('HomeHospital Website Subscription Test Suite', () => {

  // Base URL
  const baseUrl = 'https://dev.homehosp.com/'; // here we have to set the project URL

  beforeEach(() => {
    cy.visit('https://dev.homehosp.com/signin');

    cy.fixture('User').then((data) => {

      cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

      cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)


      cy.xpath("//*[text()='Sign in']").click();
      cy.wait(5000)
      cy.xpath("//a[text()='Subscriptions']").click();
      cy.wait(5000)

    });
  });

  it('1. UI-To check  subscription Module is Clickable', () => {

    cy.xpath("//a[text()='Subscriptions']").should('be.visible')


  })

  it('2. UI-User Should load the subscription page with Monthly and Yearly tabs', () => {

    cy.contains('Bill Monthly').should('be.visible')
    cy.contains('Bill Yearly').should('be.visible')
  })

  it('3. should selected Free Trial in Monthly tab', () => {

    //cy.xpath("//div[3]//mat-card[1]//mat-card-content[1]//button[1]").click();
    cy.xpath("//div[2]//mat-card[1]//mat-card-content[1]//button[1]").should('be.disabled');

  })


  it('4. should select Basic in Monthly tab', () => {

    cy.xpath("//div[3]//mat-card[1]//mat-card-content[1]//button[1]")
      .then(($btn) => {
        if ($btn.is(':disabled')) {
          cy.log('Button is disabled');
          console.log('Button is disabled');
          // You can add actions here if button is disabled
        } else {
          cy.log('Button is enabled, clicking...');
          cy.xpath("//div[3]//mat-card[1]//mat-card-content[1]//button[1]").click();
        }
      });

  })


  it('5. User should select Comprehensive in Monthly tab', () => {
    cy.xpath("//div[4]//mat-card[1]//mat-card-content[1]//button[1]")
      .then(($btn) => {
        if ($btn.is(':disabled')) {
          cy.log('Button is disabled');
          console.log('Button is disabled');
          // You can add actions here if button is disabled
        } else {
          cy.log('Button is enabled, clicking...');
          cy.xpath("//div[4]//mat-card[1]//mat-card-content[1]//button[1]").click();
          cy.wait(10000)
          cy.get('.card--wrapper').then(($input) => {
            if ($input.is(':visible')) {
              cy.wait(5000)
              cy.get('.ng-star-inserted > [style="flex-direction: row; box-sizing: border-box; display: flex;"] > .mat-radio-group').click();
              // cy.xpath("//*[text()='Make Payment']").click();

            }

            else {
              cy.xpath("//*[@placeholder='Name on card']").type('Nitin JOhn')
              cy.get('.__PrivateStripeElement > iframe').type('4111111111111111');
              cy.xpath("//*[@name='exp-date']").type('1229');
              cy.xpath("//*[@name='cvc']").type('454');
              cy.wait(2000);
              cy.xpath("//*[text()='Save']").click();


            }
          });
        }

      })


  })


})

