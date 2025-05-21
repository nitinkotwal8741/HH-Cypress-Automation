// Base URL
describe('HomeHospital Website Provider Login Test Suite', () => {

  // Base URL
  const baseUrl = 'https://dev.homehosp.com/'; // here we have to set the project URL

  // ================================
  // ✅ Positive Test Cases
  // ================================
  it('1.To Check Provider Should visit the homepage', () => {
    cy.visit(baseUrl);
    cy.contains('Consult a Doctor Anytime, Anywhere by Video Call'); // To check istext is visible or not on the screen
    cy.title().should('include', 'HomeHosp');//page title should be Homehosp so user can check page is opened
  });

  it('2.To Check Provider  Should navigate to the Sign in ', () => {
    cy.visit(baseUrl);
    cy.contains('Get Started');// if started then asssertion passed ow failed
    cy.contains('Login').click();
  });

  it('3.should sign in successfully with valid credentials', () => {
    cy.visit('https://dev.homehosp.com/signin');
    cy.fixture('User').then((data) => {
      cy.wait(2000)
      cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

      cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)
      cy.wait(2000)
      cy.get('input[type="checkbox"]').check;
      cy.xpath("//*[text()='Sign in']").click();
    });

    cy.wait(15000)
    cy.url().should('include', 'https://dev.homehosp.com/provider/day2')
  })

  it('4.should mask password input field', () => {
    cy.visit('https://dev.homehosp.com/signin');

    cy.get('#mat-input-1').should('have.attr', 'type', 'password')
  })



  // ================================
  // ❌ Negative Test Cases
  // ================================

  it('5.To check should show error for invalid username and password', () => {
    cy.visit('https://dev.homehosp.com/signin');
    cy.get('#mat-input-0').type('nitin')
    cy.get('#mat-input-1').type('Kotwal')
    cy.xpath("//*[text()='Sign in']").click();

    cy.contains('Oops! The email address seems to be incorrect.').should('be.visible')
  })

  it('6.To check should show error for valid username and invalid password', () => {
    cy.visit('https://dev.homehosp.com/signin');
    cy.get('#mat-input-0').type('nitin@arkenea.com')
    cy.get('#mat-input-1').type('Kotwal')
    cy.xpath("//*[text()='Sign in']").click();

    cy.contains('Hmm...it looks like either the email Address or password is incorrect. Please try again!').should('be.visible')
  })

  it('7.To check should show error for non registered email', () => {
    cy.visit('https://dev.homehosp.com/signin');
    cy.get('#mat-input-0').type('nitinkotwal@arkenea.com')
    cy.get('#mat-input-1').type('Kotwal')
    cy.xpath("//*[text()='Sign in']").click();

    cy.contains('Looks like your account does not exist. Sign up to create an account.').should('be.visible')
  })

  it('8.should show validation error for empty username', () => {
    cy.visit('https://dev.homehosp.com/signin');
    cy.get('#mat-input-1').type('somePassword')
    cy.get('button[disabled="true"]').should('be.disabled')


  })

  it('9.should show validation error for empty password', () => {
    cy.visit('https://dev.homehosp.com/signin');
    cy.get('#mat-input-0').type('someUser')
    cy.get('button[disabled="true"]').should('be.disabled')
  })

  it('10.should show validation errors for both fields empty', () => {
    cy.visit('https://dev.homehosp.com/signin');

    cy.get('#mat-input-0').should('exist')
    cy.get('#mat-input-1').should('exist')
    cy.get('button[disabled="true"]').should('be.disabled')
  })

  it('11.should disable login button if fields are empty', () => {
    cy.visit('https://dev.homehosp.com/signin');

    cy.get('button[disabled="true"]').should('be.disabled')
  })

  it('12.Should be uncheck the Remember this computer checkbox at first visit', () => {

    cy.visit('https://dev.homehosp.com/signin');

    cy.get('.mat-checkbox-inner-container').should('not.be.checked')


  });

  it('13.Should be able to check the Remember this computer checkbox ', () => {

    cy.visit('https://dev.homehosp.com/signin');

    cy.get('input[type="checkbox"]').check;
    cy.wait(5000)
    cy.get('input[type="checkbox"]').should('be.checked')


  });

  it('14.Username and password should be Remember for this computer to next visit ', () => {

    cy.visit('https://dev.homehosp.com/signin');

    cy.fixture('User').then((data) => {

      cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

      cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)
      cy.get('input[type="checkbox"]').check;
      cy.xpath("//*[text()='Sign in']").click();
      cy.get('img#displayImage').click();
      cy.contains('Log out').click();
      cy.reload()
      cy.wait(5000)
      cy.get('#mat-input-0').should('have.value', 'nitin+1001@arkenea.com')
      cy.get('#mat-input-1').should('have.value', 'Arkenea@123')

    })




  });



});

