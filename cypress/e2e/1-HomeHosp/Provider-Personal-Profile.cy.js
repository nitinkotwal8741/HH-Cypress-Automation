describe('HomeHospital Website E-Consultation Test Suite', () => {
    // Base URL
    const baseUrl = 'https://dev.homehosp.com/signin'; // here we have to set the project URL

    beforeEach(() => {
        cy.visit(baseUrl);

        cy.fixture('user').then((data) => {

            cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

            cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)


            cy.xpath("//*[text()='Sign in']").click();
            cy.wait(8000)
            cy.get('img#displayImage').click();
            cy.contains('My Profile').click();

        })


    })

    it.skip('1. To check Profile icon is clickable and personal details should be open', () => {

        cy.contains('About').should('exist')
    })

    it.skip('2. To check Profile details should be visible to user', () => {
        cy.get('#displayImage2').should('exist')
        cy.contains('About').should('exist')
        cy.contains('Personal Details').should('exist')
        cy.contains('Gender').should('exist')
        cy.contains('Date of Birth').should('exist')
        cy.contains('Specialities').should('exist')
        cy.contains('Contact Details').should('exist')
        cy.contains('Change Password').should('exist')
        cy.contains('NPI').should('exist')


    })
    it.skip('3. To check Moudles on Profile details page  ', () => {
        cy.contains('NPI').should('exist')
        cy.contains('Personal Information').should('exist')
        cy.contains('Online Billing').should('exist')
        cy.contains('Insurance Billing').should('exist')
        cy.contains('Payment Information').should('exist')
        cy.contains('Provider Onboard').should('exist')
        cy.contains('My Schedule').should('exist')
        cy.contains('Subscription Details').should('exist')


    })

    it.skip('4. To check All information should be updated on the screen  ', () => {
        // cy.get('.mt-0 > .mat-card-header > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
        // //Update provider bio
        // cy.xpath('//*[@placeholder="Add your Bio Here"]').type("I am a Medical Doctor with a specialization in Gynaecology. I have been providing medical care and treatment to patients for the past 7 years. I have a good track record in patient care")
        // cy.get('#//*[@placeholder="Add your Bio Here"]').should('have.value', 'I am a Medical Doctor with a specialization in Gynaecology. I have been providing medical care and treatment to patients for the past 7 years. I have a good track record in patient care');
        // //Update First Name

        // cy.xpath("//*[text()='First Name']").type('Frankk').should('have.value', 'Frankk');
        // // Update Last Name
        // cy.xpath("//*[text()='Last Name']").type('Donald').should('have.value', 'Donald');


        // // Click the calendar icon to open the date picker
        // const date = '4/23/1988'; // Use valid date format (YYYY-MM-DD)

        // cy.get('#mat-input-3')
        //     .clear()
        //     .type(date)
        //     .should('have.value', date);

        // // Step 1: Open the mat-select dropdown
        // cy.get('#mat-select-0').click();

        // // Step 2: Wait for the mat-options to be visible and click on one
        // cy.get('mat-option')
        //     .contains(' Chinese ')
        //     .click();

        // // Step 3 (optional): Verify that the selection is updated
        // cy.get('#mat-select-0 .mat-select-value-text').should('contain', ' Chinese ');
        cy.wait(8000)
        cy.xpath('//*[@fxlayout="column"]//mat-card//p').should('have.text', ' My name is Dr. Frank A Aron and I am a Medical Doctor with a specialization in Gynaecology. I have been providing medical care and treatment to patients for the past 7 years. I have a good track record in patient care ')
        cy.xpath("//*[text()=' Male ']").should('have.text', ' Male ')
        cy.xpath("//*[text()=' 04/23/1999 ']").should('have.text', ' 04/23/1999 ')
        cy.xpath("//*[text()='mail']").should('have.text', 'nitin+1001@arkenea.com')

    })

    it.skip('5. To check Online Billing details page content  ', () => {
        cy.xpath("//*[text()='Online Billing']").click()
        cy.wait(5000)
        cy.contains('Account Details').should('exist')
        cy.contains('Account Number').should('exist')
        cy.contains('Routing Number').should('exist')
        cy.contains('Billing Details').should('exist')
        cy.contains('New Appointment ').should('exist')
        cy.contains('Follow-up Appointment ').should('exist')
        cy.contains('Follow-up(Audio) Appointment ').should('exist')
        cy.contains('Billing Codes ').should('exist')
        cy.contains(' Time Duration ').should('exist')
        cy.contains(' Amount Charged ').should('exist')
        cy.contains(' Actions ').should('exist')


    })

    it.skip('6. To check Edit Online Billing Popup content  ', () => {
        cy.xpath("//*[text()='Online Billing']").click()
        cy.wait(5000)
        cy.xpath('//*[@role="rowgroup"]//td[4]//mat-icon').eq(0).click()

        cy.contains('Billing Code').should('exist')
        cy.contains('Amount Charged').should('exist')
        cy.contains('Time Duration').should('exist')
        cy.contains('Save').should('exist')
        cy.contains('Cancel').should('exist')


    })
    it.skip('7. To check Edit Billing amount functionality ', () => {
        cy.xpath("//*[text()='Online Billing']").click()
        cy.wait(5000)
        cy.xpath('//*[@role="rowgroup"]//td[4]//mat-icon').eq(0).click()

        cy.contains('Account Details').should('exist')

        cy.xpath('//*[@data-placeholder="Amount Charged"]').clear().type('12').should('have.value', '12')

        cy.xpath("//*[text()='Save']/ancestor::Button").click()
        cy.wait(5000)
        cy.contains('Billing codes been added successfully.').should('exist')

    })

    it.skip('8. To check Billing popup should be close after click on cancel  ', () => {
        cy.xpath("//*[text()='Online Billing']").click()
        cy.wait(5000)
        cy.xpath('//*[@role="rowgroup"]//td[4]//mat-icon').eq(0).click()

        cy.contains('Account Details').should('exist')

        cy.xpath('//*[@data-placeholder="Amount Charged"]').clear().type('12').should('have.value', '12')

        cy.xpath("//*[text()='Cancel']/ancestor::Button").click()


    })
    it.skip('9. To check Insurance Billing page content ', () => {
        cy.xpath("//*[text()='Insurance Billing']").click()
        cy.wait(5000)
        cy.contains(' Enable Insurance Billing ').should('exist')
        cy.contains('Billing Details').should('exist')
        cy.contains('New Appointment ').should('exist')
        cy.contains('Follow-up Appointment ').should('exist')
        cy.contains('Follow-up(Audio) Appointment ').should('exist')
        cy.contains('Billing Codes ').should('exist')
        cy.contains(' Time Duration ').should('exist')
        cy.contains(' Amount Charged ').should('exist')
        cy.contains(' Actions ').should('exist')



    })
    it.skip('10. To check Edit Insurance Billing popup content ', () => {
        cy.xpath("//*[text()='Online Billing']").click()
        cy.wait(5000)
        cy.xpath('//*[@role="rowgroup"]//td[4]//mat-icon').eq(0).click()

        cy.contains('Billing Code').should('exist')
        cy.contains('Amount Charged').should('exist')
        cy.contains('Time Duration').should('exist')
        cy.contains('Save').should('exist')
        cy.contains('Cancel').should('exist')

    })

    it.skip('11. To check Edit Insurance Billing amount functionality ', () => {
        cy.xpath("//*[text()='Insurance Billing']").click()
        cy.wait(5000)
        cy.xpath('//*[@role="rowgroup"]//td[4]//mat-icon').eq(0).click()

        cy.xpath('//*[@data-placeholder="Amount Charged"]').clear().type('12').should('have.value', '12')

        cy.xpath("//*[text()='Cancel']/ancestor::Button").click()


    })

    it('12. To check UI of Payment Information module ', () => {
        cy.xpath("//*[text()='Payment Information']").click()
        cy.wait(5000)

        cy.contains('Payment Information').should('exist')
        cy.contains('Status').should('exist')
        cy.contains('S/N').should('exist')
        cy.contains('App. Id ').should('exist')

        cy.contains('App. Date ').should('exist')
        cy.contains('Patient ').should('exist')
        cy.contains('Contact Number ').should('exist')
        cy.contains('Type ').should('exist')
        cy.contains('Duration ').should('exist')
        cy.contains('Price ').should('exist')
        cy.contains('Status ').should('exist')
        cy.contains('Add New Card ').should('exist')
        cy.contains('Remove ').should('exist')
        cy.contains('Set Default ').should('exist')

        cy.contains(' Items per page: ').should('exist')



    })

    it('13. To check UI of Provider Onboard module ', () => {
        cy.xpath("//*[text()='Provider Onboard']").click()
        cy.wait(5000)

        cy.contains('Invite Provider').should('exist')
        cy.contains('Send Invite').should('exist')


    })

    it('14. To check Provider Onboard via blank Email address ', () => {
        cy.xpath("//*[text()='Provider Onboard']").click()
        cy.wait(5000)
        cy.xpath('//*[@data-placeholder="Your Email"]').click()
        cy.xpath('//*[text()="Send Invite"]//ancestor::button').click();
        cy.wait(1000)
        cy.contain('Oops! Please enter an email address').should('exist')



    })
    it('15. To check Send Invite button should be disabled until user not provide email address ', () => {
        cy.xpath("//*[text()='Provider Onboard']").click()
        cy.wait(5000)

        cy.xpath('//*[text()="Send Invite"]//ancestor::button').should('be.disabled')

        cy.xpath('//*[@data-placeholder="Your Email"]').type('nitin.com');
        cy.xpath('//*[text()="Send Invite"]//ancestor::button').should('not.be.disabled')
        cy.xpath('//*[text()="Send Invite"]//ancestor::button').click()





    })
    it('16. To check Provider Onboard via invalid Email address ', () => {
        cy.xpath("//*[text()='Provider Onboard']").click()
        cy.wait(5000)
        cy.xpath('//*[@data-placeholder="Your Email"]').type('niti.com');
        cy.xpath('//*[text()="Send Invite"]//ancestor::button').click();
        cy.wait(1000)
        cy.contain('Oops! The email address seems to be incorrect').should('exist')



    })

    it('17. To check Provider Onboard via Own Email address ', () => {
        cy.xpath("//*[text()='Provider Onboard']").click()
        cy.wait(5000)
        cy.xpath('//*[@data-placeholder="Your Email"]').type('nitin+1001@arkenea.com');
        cy.xpath('//*[text()="Send Invite"]//ancestor::button').click();
        cy.wait(1000)
        cy.contain('You are not allowed to send invitation to your own email id').should('exist')

    })

    it('18. To check Provider Onboard via registered Email address ', () => {
        cy.xpath('//*[@data-placeholder="Your Email"]').type('nitin+7070@arkenea.com');
        cy.xpath('//*[text()="Send Invite"]//ancestor::button').click();
        cy.wait(1000)
        cy.contain('Email Id is already exist in the system, please try another email').should('exist')

    })
    it('19. To check Provider Onboard via Non-registered Email address ', () => {
        cy.xpath("//*[text()='Provider Onboard']").click()
        cy.wait(5000)
        cy.xpath('//*[@data-placeholder="Your Email"]').type('nitin+100001@arkenea.com');
        cy.xpath('//*[text()="Send Invite"]//ancestor::button').click();
        cy.wait(1000)
        cy.contain('Invitation link send successfully').should('exist')

    })
    it('20. To check Provider Subscription Details page ', () => {
        cy.xpath("//*[text()='Subscription Details']").click()
        cy.wait(5000)
        cy.contain('Active Package').should('exist')
        cy.contain('Subscription Type').should('exist')
        cy.contain('Package Includes').should('exist')
        cy.contain('Start Date').should('exist')
        cy.contain('Start Date').should('exist')
        cy.contain('End Date').should('exist')
        cy.contain('Subscription status').should('exist')
        cy.contain('Change Package').should('exist')


    })

it('20. To check Change Package button should be clickable and after click subscription page should be open ', () => {
        cy.xpath("//*[text()='Subscription Details']").click()
        cy.wait(5000)
        cy.contain('Change Package').should('be.visible')
        cy.contain('Change Package').should('exist').click()


    })
    




});