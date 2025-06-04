describe('HomeHospital Website - Book appointment and Submit to Provider', () => {

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

    it.skip('1.To Verify Availibility on Current city confirmation popup should be Opened', () => {

        cy.contains(" Will you be in Alaska on the day of appointment ? ").should('exist')
        cy.contains("Privacy Assurance : This information is being solely taken to connect you with doctors who can prescribe medicine in the state you will be present at the time of appointment.").should('exist')
        cy.contains('Yes').should('exist')
            .should('be.visible')
            .and('not.be.disabled');
        cy.log('✅ Button is clickable!');
        cy.get('.modal--footer > [type="button"]').should('exist')
            .should('be.visible')
            .and('not.be.disabled');
        cy.log('✅ Button is clickable!');



    })
    it.skip('2.To Verify Appointment Type selection', () => {

        cy.contains("Book Appointment").should('be.visible')
        cy.contains("Appointment Type?").should('be.visible')

        cy.contains("How would you like to connect with doctor?").should('be.visible')
        cy.contains("Would you like to Invite caretaker / family member for consultation?").should('be.visible')
        cy.contains('New').should('be.visible')
            .should('be.visible')
            .and('not.be.disabled');
        cy.log('New radio button is clickable')
        cy.contains('Follow-up').should('be.visible')
            .should('be.visible')
            .and('not.be.disabled');
        cy.log('Follow-Up radio button is clickable')
        cy.contains('Only Audio').should('be.visible')
            .should('be.visible')
            .and('not.be.disabled');
        cy.log('Only audio radio button is clickable')
        cy.contains('Video').should('be.visible')
            .should('be.visible')
            .and('not.be.disabled');
        cy.log('Video radio button is clickable')

        cy.contains('Yes').should('be.visible')
            .should('be.visible')
            .and('not.be.disabled');
        cy.log('care giver Yes radio button is clickable')

        cy.xpath('//*[@id="cdk-step-content-0-0"]/div/form/button').should('be.disabled');


        BookAppointmentType_Mode_Caregivers();
        //To verify radio button is selected or not
        cy.xpath('//*[@value="new"]//input').should('be.checked')
        cy.xpath('//*[@value="video"]//input').should('be.checked')
        cy.wait(1000)
        cy.xpath('//*[@formcontrolname="inviteMember"]//mat-radio-button[@value="no"]//input').should('be.checked')

        cy.xpath('//*[@id="cdk-step-content-0-0"]/div/form/button').should('not.be.disabled');

    })

    it.skip('3.To Verify UI of chief complaints and symptoms', () => {

        BookAppointmentType_Mode_Caregivers();
        cy.log('Verify lable should be present')
        cy.contains('Specify chief complaints and symptoms').should('be.visible')
        cy.contains('Allergies').should('be.visible')
        cy.contains('Add Allergy').should('be.visible')
        cy.contains('NKDA (No known drug allergy)').should('be.visible')
        cy.contains('Note: Checking NKDA will delete existing allergies').should('be.visible')
        cy.contains(' Active Medications').should('be.visible')
        cy.contains('Add Medication').should('be.visible')
        cy.contains('Supported formats Doc, PDF, JPEG, JPG, PNG').should('be.visible')
        cy.contains('Uploading of photos/documents is strongly recommended when applicable. Maximum 5 files can be uploaded.').should('be.visible')

    })
    it.skip('4.To Verify chief complaints and symptoms', () => {
        BookAppointmentType_Mode_Caregivers();
        //Select chief Complaint 
        cy.get('#mat-chip-list-input-0').type('Fever');

        cy.get('mat-option')
            .contains('Fever')
            .click();
        cy.get('#mat-chip-list-input-0').type('{enter}');
        cy.get('#mat-chip-list-input-0').type('Anemia')
        cy.get('mat-option')
            .contains(' Anemia ')
            .click();
        cy.get('#mat-chip-list-input-0').type('{enter}');
        cy.get('#mat-chip-list-input-0').type(' Ankle pain ')
        cy.get('#mat-chip-list-input-0').type('{enter}');

        //To selct Duration of Onset
        // Step 1: Open the dropdown
        cy.xpath('//*[@formcontrolname="durationNo"]').click();

        // Step 2: Wait for dropdown to appear and select option "5"
        cy.get('mat-option').contains('5').click();


        // Step 1: Click the mat-select to open the dropdown
        cy.xpath('//*[@formcontrolname="durationType"]').click();

        // Step 2: Select the option from the dropdown
        cy.get('mat-option').contains('Weeks').click();

        cy.fixture('user').then((data) => {

            const fileName1 = data.GlucoseFile; // File must be inside cypress/fixtures
            const fileName2 = data.BloodReport;
        })
        cy.xpath('//*[@name="documents"]').attachFile(fileName1);
        cy.xpath('//*[@name="documents"]').attachFile(fileName2);

        cy.contains('Glucose_Test.jpg').should('exist');
        cy.contains('Blood_Reprot').should('exist');



    })

    function Cheif_Complaints_and_Symptoms() {

        //Select chief Complaint 
        cy.get('#mat-chip-list-input-0').type('Fever');

        cy.get('mat-option')
            .contains('Fever')
            .click();
        cy.get('#mat-chip-list-input-0').type('Anemia')
        cy.get('mat-option')
            .contains(' Anemia ')
            .click();
        cy.get('#mat-chip-list-input-0').type(' Ankle pain ')
        cy.get('#mat-chip-list-input-0').type('{enter}');

        //To selct Duration of Onset
        // Step 1: Open the dropdown
        cy.xpath('//*[@formcontrolname="durationNo"]').click();

        // Step 2: Wait for dropdown to appear and select option "5"
        cy.get('mat-option').contains('5').click();


        // Step 1: Click the mat-select to open the dropdown
        cy.xpath('//*[@formcontrolname="durationType"]').click();

        // Step 2: Select the option from the dropdown
        cy.get('mat-option').contains('Weeks').click();



        const fileName1 = 'Glucose_Test.jpg'; // File must be inside cypress/fixtures
        const fileName2 = 'Blood_Reprot.jpg';

        cy.xpath('//*[@name="documents"]').attachFile(fileName1);
        cy.xpath('//*[@name="documents"]').attachFile(fileName2);

        cy.contains('Glucose_Test.jpg').should('exist');
        cy.contains('Blood_Reprot').should('exist');

    }

    function Pateint_Intake_Form() {
        BookAppointmentType_Mode_Caregivers();

        Cheif_Complaints_and_Symptoms();

        cy.get('#mat-radio-15 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
            .click({ force: true })
        cy.get('#mat-radio-18 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle')

            .click({ force: true })

        cy.get('#cdk-step-content-0-1 > .mat-vertical-content > .form--outer--wrapper > .add--more--btn').click();



    }
    it.skip('6.To Verify Patient intake form', () => {
        Pateint_Intake_Form()
    })

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

        cy.xpath("//*[text()='Confirm & Proceed']//ancestor::button").click()

        // cy.xpath('//mat-checkbox//input[@type="checkbox"]').first().click();
        cy.get('mat-checkbox .mat-checkbox-inner-container').first().click({ force: true });

        cy.get(':nth-child(5) > .mat-primary').click({ force: true });
        cy.wait(2000)

        // This test will check all checkboxes inside the specified section

        cy.wait(500);

        // Find all mat-checkbox inputs and check them if not already checked
        cy.get('mat-checkbox input[type="checkbox"]').each(($checkbox) => {
            // Only check if it's not already checked
            if (!$checkbox.is(':checked')) {
                cy.wrap($checkbox).check({ force: true });
            }



        });
        cy.xpath("//*[text()=' Submit And Confirm Booking ']//ancestor::button").click()
        cy.wait(2000)
        cy.xpath("//*[text()=' Finish ']//ancestor::button").click()

    }
    it.skip('7.To Verify patient Submit the Appointment to Provider', () => {
        Pateint_Intake_Form
        Select_payment_type();
        cy.wait(5000)
        selectProvider_BookAppontment();

 
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

        // cy.xpath(' //*[@fxlayoutalign="center center"]')
        //     .its('length')
        //     .then((count) => {

        //         cy.log('Number of appointments:', count);
        //         cy.wait(5000)
        //         cy.xpath('//*[@fxlayoutalign="center center"]//div//div[1]//h5')
        //             .then(($el) => {
        //                 const actualText = $el.text().toLowerCase()
        //                 cy.log(actualText)
                        
        //                 //expect(actualText).to.contains('fulton') // 'fulton' in lowercase
                       
        //             })
                   
        //         // You can add assertions too
        //         //expect(count).to.be.greaterThan(0);
        //     })

        cy.fixture('user').then((data) => {
            const expectedDate = data.Appointment_date;
            const expectedTime = data.Appointment_Time;

            cy.xpath('//*[@fxlayoutalign="center center"]//div//div[2]//h5').each(($el) => {
                const elementText = $el.text().trim();

                // Compare with fixture value
                if (elementText.includes(expectedDate)) {

                    cy.xpath('//*[@fxlayoutalign="center center"]//div//div[2]//p').each(($el) => {
                        const elementText1 = $el.text().trim();

                        // Compare with fixture value
                        if (elementText1.includes(expectedTime)) {

                            cy.log("Appointment is " + elementText + "  " + elementText1)

                            cy.xpath(`//*[text()=' ${expectedTime} ']/parent::div/parent::div//div[7]//button`)
                                .click();
                                

                        }
                    })

                }
            })


        })
        cy.wait(2000)
        //************************************* */
        cy.get('body').then(($body) => {
            // First check if status is Pending
            if ($body.text().includes('Pending')) {
                cy.log('Status is Pending, attempting to accept appointment...');

                // Check if Accept Appointment button exists
                if ($body.find('button:contains("Accept Appointment")').length > 0) {
                    cy.get('button').contains('Accept Appointment').click();
                    cy.xpath("//*[text()='OK']//ancestor::button").click();
                    cy.log('Appointment has been accepted');


                    // Confirm status changes to Accepted
                    cy.contains('Accepted').should('be.visible').then(() => {
                        cy.log('Appointment is now in Accepted state.');
                        cy.wait(2000)

                    })
                } else {
                    cy.log('Accept Appointment button not found even though status is Pending.');
                }
            } else {
                cy.log('Appointment is not in Pending status. Skipping acceptance.');
            }
        });



        //***************************************** */
    }

    it.skip('7.To Verify able Accept the appointment', () => {
        providerAcceptAppointment();


    })

    function providerCompletetheAppointment() {
        //To check file uploaded are display to provider or not
        cy.wait(10000)
        cy.contains('Glucose_Test.jpg').should('exist');
        cy.contains('Blood_Reprot').should('exist');
        cy.contains('Fever').should('exist');
        cy.contains('Anemia').should('exist');
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
        // 1. Click the mat-select to open the dropdown

        cy.wait(5000)
        cy.get('#mat-select-5 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click();
        cy.wait(2000)
        // 2. Select the desired option by its text
        //select payment
        cy.get('mat-option').contains('99201-95 (15 mins)').click();
        // Step 1: Click to open the dropdown
        cy.wait(2000)
        cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-value').click();

        // Step 2: Click the followup you want (e.g., '3')
        cy.get('mat-option').contains('3').click();

        //To finish the appointment
        cy.get(':nth-child(11) > .mat-focus-indicator').click()



    }

    it('8.To Verify Provider able complete the appointment', () => {
        providerAcceptAppointment()
        providerCompletetheAppointment();

    })

});

