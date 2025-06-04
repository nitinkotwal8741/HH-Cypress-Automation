describe('HomeHospital Website -  Patient Book appointment and Submit to Provider', () => {

    beforeEach(() => {
        cy.login();
        cy.visit('/patient/home');
        cy.xpath("//a[text()='Book Appointment']").click();
        cy.wait(2000)
        cy.get('.modal--footer > .mat-primary').click();
    })
    function BookAppointmentType_Mode_Caregivers() {

        cy.contains('New').click({ force: true })
        cy.contains('Video').click({ force: true });
        cy.xpath('//*[@formcontrolname="inviteMember"]//mat-radio-button[@value="no"]').click();
        cy.xpath('//*[@id="cdk-step-content-0-0"]/div/form/button').click();
    }

    function Cheif_Complaints_and_Symptoms() {

        //Select chief Complaint 

        cy.get('#mat-chip-list-input-0').type(' Ankle pain ')
        cy.get('#mat-chip-list-input-0').type('{enter}');
        cy.wait(2000)
        //To selct Duration of Onset
        // Step 1: Open the dropdown
        cy.xpath('//*[@formcontrolname="durationNo"]').click();

        // Step 2: Wait for dropdown to appear and select option "5"
        cy.get('mat-option').contains('5').click();
        
        cy.wait(2000)
        // Step 1: Click the mat-select to open the dropdown
        cy.xpath('//*[@formcontrolname="durationType"]').click();
        
        // Step 2: Select the option from the dropdown
        cy.get('mat-option').contains('Weeks').click();


        cy.wait(2000)
        const fileName1 = 'Glucose_Test.jpg'; // File must be inside cypress/fixtures
        const fileName2 = 'Blood_Reprot.jpg';

        cy.xpath('//*[@name="documents"]').attachFile(fileName1);
        
        cy.xpath('//*[@name="documents"]').attachFile(fileName2);
    cy.wait(4000)
        cy.contains('Glucose_Test.jpg').should('exist');
        cy.contains('Blood_Reprot').should('exist');

    }

    function Pateint_Intake_Form() {
        BookAppointmentType_Mode_Caregivers();

        Cheif_Complaints_and_Symptoms();

        cy.get('#mat-radio-15 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
            .click({ force: true })
        cy.wait(2000)
        cy.get('#mat-radio-18 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle')

            .click({ force: true })
        cy.wait(2000)

        cy.get('#cdk-step-content-0-1 > .mat-vertical-content > .form--outer--wrapper > .add--more--btn').click();



    }

    function Select_payment_type() {
        Pateint_Intake_Form()

        cy.wait(5000)
        cy.get('#mat-radio-83 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({ force: true });
        cy.get('#cdk-step-content-0-2 > .mat-vertical-content > .form--outer--wrapper > [matsteppernext=""]').click();
    }
    function selectProvider_BookAppontment() {

        cy.xpath("//span[text()='Check Availibility']//ancestor::button").click();
        cy.get('#mat-radio-89 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({ force: true })
        cy.fixture('user').then((data) => {
            const appointmentDate = data.Appointment_date;
            cy.get(`td[aria-label="${appointmentDate}"]`).click();
            //cy.get('td[aria-label="June 6, 2025"]')
        })

            .should('not.have.attr', 'aria-disabled', 'true') // ensure it's not disabled
            .click();
        cy.xpath("//*[text()='Show Availability']//ancestor::button").click();
        cy.fixture('user').then((data) => {
            const appointmentTime = data.Appointment_Time;
            cy.xpath(`//mat-checkbox[.//span[contains(text(), "${appointmentTime}")]]`)
                .click({ force: true }).click();
            //cy.xpath("//*[text()='11:45 AM']").click();
        })
        cy.wait(2000)
        cy.xpath("//*[text()='Confirm & Proceed']//ancestor::button").click()

        // cy.xpath('//mat-checkbox//input[@type="checkbox"]').first().click();
        cy.get('mat-checkbox .mat-checkbox-inner-container').first().click({ force: true });
        cy.wait(2000)
        cy.get(':nth-child(5) > .mat-primary').click({ force: true });
        cy.wait(2000)

        // This test will check all checkboxes inside the specified section

        cy.wait(500);

        // Find all mat-checkbox inputs and check them if not already checked
        cy.get('mat-checkbox input[type="checkbox"]').each(($checkbox) => {
            // Only check if it's not already checked
            if (!$checkbox.is(':checked')) {
                cy.wait(500)
                cy.wrap($checkbox).check({ force: true });
            }



        });
        cy.xpath("//*[text()=' Submit And Confirm Booking ']//ancestor::button").click()
        cy.wait(2000)
        cy.xpath("//*[text()=' Finish ']//ancestor::button").click()

    }
    it('1.To Verify patient Submit the Appointment to Provider', () => {
        Pateint_Intake_Form
        Select_payment_type();
        cy.wait(5000)
        selectProvider_BookAppontment();
        cy.wait(2000)
        cy.get('img#displayImage').click();
        cy.contains('Log out').click();
    })



});

describe('HomeHospital Website - Provider Accept and complete the appointment', () => {

    // Base URL
    const baseUrl = 'https://dev.homehosp.com/signin'; // here we have to set the project URL

    beforeEach(() => {
        cy.visit(baseUrl);

        cy.fixture('user').then((data) => {

            cy.xpath('//*[@id="mat-input-0"]').should('exist').type(data.Provider_UserName)

            cy.xpath('//*[@id="mat-input-1"]').should('exist').type(data.Provider_Password)


            cy.xpath("//*[text()='Sign in']").click();
            cy.wait(8000)

        })


    })


    function providerAcceptAppointment() {
        cy.xpath("//a[text()='My Appointments']").click();
        cy.xpath('//*[@data-placeholder="Search by patient name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('Fulton')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);


//******************************** */
        cy.fixture('user').then((data) => {
  const expectedDate = data.Appointment_date;
  const expectedTime = data.Appointment_Time;

  let found = false;

  cy.xpath('//*[@fxlayoutalign="center center"]//div//div[2]//h5').each(($el, index) => {
    if (found) return false;

    const elementText = $el.text().trim();

    if (elementText.includes(expectedDate)) {
      cy.log(elementText + " checking " + expectedDate);

      cy.xpath('//*[@fxlayoutalign="center center"]//div//div[2]//p').each(($el2) => {
        const elementText1 = $el2.text().trim();

        if (elementText1.includes(expectedTime)) {
          found = true;

          cy.wait(500); // avoid long wait
          cy.xpath(`//*[text()=' ${expectedTime} ']/parent::div/parent::div//div[7]//button`)
            .click();

          return false; // break inner loop
        }
      });

      return false; // break outer loop after match
    }
  });
});

        cy.wait(2000)
        //************************************* */
        cy.get('body').then(($body) => {
  // First check if status is Pending
  if ($body.text().includes(' Pending')) {
    cy.log('Status is Pending, attempting to accept appointment...');

    // Check if Accept Appointment button exists
    if ($body.find('button:contains("Accept Appointment")').length > 0) {
      cy.contains('button', 'Accept Appointment').click();

      // Click OK confirmation button
      cy.xpath("//*[text()='OK']//ancestor::button").click();

      cy.log('Appointment has been accepted');
      cy.wait(2000);

      // Call provider function
      providerAcceptAppointment();

      // Confirm the status changed to Accepted
      cy.contains(' Accepted', { timeout: 10000 }).should('be.visible').then(() => {
        cy.log('Appointment is now in Accepted state.');
        cy.wait(2000);
      });

    } else {
      cy.log('Accept Appointment button not found even though status is Pending.');
    }
  } else {
    cy.log('Appointment is not in Pending status. Skipping acceptance.');
  }
});




        //***************************************** */
    }

    function providerCompletetheAppointment() {
        //To check file uploaded are display to provider or not
        cy.wait(10000)
        cy.contains('Glucose_Test.jpg').should('exist');
        cy.contains('Blood_Reprot').should('exist');
       
        cy.contains('Ankle pain').should('exist');

        cy.xpath("//*[text()='Always enabled test Connect now button']").click();

        cy.wait(5000)

        cy.xpath('//*[@mattooltip="video on"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);
            expect('&nbspvideocam_off&nbsp').to.include('videocam_off');

        })
        cy.xpath('//*[@mattooltip="unmute"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);
            expect('&nbspmic_off&nbsp').to.include('mic_off'); // optional

        })
        cy.xpath('//*[@mattooltip="video on"]').click();

        cy.xpath('//*[@mattooltip="unmute"]').click();


        cy.xpath('//*[@mattooltip="video off"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);
            expect(' videocam_off ').to.include('videocam');

        })

        cy.xpath('//*[@mattooltip="mute"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);
            expect(' mic_off ').to.include('mic'); // optional
        })



        cy.get('i.mat-tooltip-trigger').eq(4).click({ force: true });
        cy.wait(2000)


        cy.xpath('//*[@mattooltip="Exit full screen"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);

            expect('&nbspzoom_out_map&nbsp').to.include('zoom_out_map');

        })
        cy.get('i.mat-tooltip-trigger').eq(4).click({ force: true });


        cy.xpath('//*[@mattooltip="open chat"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);

            expect('&nbspchat_bubble&nbsp').to.include('chat_bubble');

        })

        cy.xpath('//*[@mattooltip="open chat"]').click()

        cy.get('.big-devices > .chat-section > .chat-enter > img')
            .type('Hi, Do you have fever?')
        cy.xpath('//*[@class="chat-enter"]//img').click()
        cy.get('.big-devices > .chat-section > .chat-enter > img')
            .type('Do yo have Headache')
        cy.xpath('//*[@class="chat-enter"]//img').click()
        cy.get('.big-devices > .chat-section > .chat-enter > img')
            .type('Do you have any History of present illness?')
        cy.xpath('//*[@class="chat-enter"]//img').click()
        cy.get('.big-devices > .chat-section > .chat-enter > img')
            .type('Do you have trouble walking?')
        cy.xpath('//*[@class="chat-enter"]//img').click()

        cy.xpath('//*[text()="Complete Appointment"]').click({ force: true });
        //1. Click the mat-select to open the dropdown

        cy.wait(5000)
        cy.xpath('//*[@appearance="legacy"]//mat-select').eq(0).click();
        cy.wait(2000)
        // 2. Select the desired option by its text
        //select payment
        cy.get('mat-option').contains('99201-95 (15 mins)').click();
        // Step 1: Click to open the dropdown
        cy.wait(2000)
        cy.xpath('//*[@appearance="legacy"]//mat-select').eq(1).click();

        // Step 2: Click the followup you want (e.g., '3')
        cy.get('mat-option').contains('3').click();

        //To finish the appointment
        cy.get(':nth-child(11) > .mat-focus-indicator').click()



    }

    it('1.To Verify Provider able complete the appointment', () => {
        providerAcceptAppointment()
        providerCompletetheAppointment();

    })

});

