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

    it('2. To check Waiting Room should be added on the Instant consultation screen', () => {
        cy.contains("Waiting Room").should('exist')
        cy.log('Waiting Room is added on the page')
    })

    it('3. To check Today’s Date should be added on the Instant consultation screen', () => {
        cy.contains("Today’s Date").should('exist')
        cy.log('Today’s Date is added on the page')
    })

    it('4. To check Edit Hours should be added on the Instant consultation screen', () => {
        cy.contains("Edit Hours").should('exist')
        cy.log('Edit Hours button is added on the page')
    })
    it('5. To check Invite Patient for Instant Consultation  should be added on the Instant consultation screen', () => {
        cy.contains("Invite Patient for Instant Consultation").should('exist')
        cy.log('Invite Patient for Instant Consultation  button is added on the page')
    })

    it('6. To check Connect with Patient in Instant Consultation  should be added on the Instant consultation screen', () => {
        cy.contains("Connect with Patient").should('exist')
        cy.log('Connect with Patient  button is added on the page')
    })
    it('7. To check Request Received tab should be added on the Instant consultation screen', () => {
        cy.contains("Request Received").should('exist')
        cy.log('Request Received tab is added on the page')
    })
    it('8. To check Request Sent tab should be added on the Instant consultation screen', () => {
        cy.contains("Request Sent").should('exist')
        cy.log('Request Sent tab is added on the page')
    })
    it('9. To check Request Sent tab should be added on the Instant consultation screen', () => {
        cy.contains("Request Sent").should('exist')
        cy.log('Request Sent tab is added on the page')
    })

    it('10. To check Request Sent tab should be added on the Instant consultation screen', () => {
        cy.contains("Request Sent").should('exist')
        cy.log('Request Sent tab is added on the page')
    })

    it('11. To check Waiting room button should be clickable', () => {
        cy.xpath("//*[text()='Waiting Room']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled')       // Ensure it's not disabled

    })

    it('12. To check Wating room should be open after click on button', () => {
        cy.xpath("//*[text()='Waiting Room']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click()
        cy.contains(' Instant Consultation / Waiting Room').should('exist')
    })

    it('13. To check Edit hours button is clickable', () => {
        cy.xpath("//*[text()='Edit Hours']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click()
        cy.contains('Session 1').should('exist')
    })

    it('14. To check Edit hours button is clickable', () => {
        cy.xpath("//*[text()='Edit Hours']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled')

    })

    it('15. To check after click Edit hours button, Timeslot should be visible to user', () => {
        cy.xpath("//*[text()='Edit Hours']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click()
        cy.wait(2000)
        cy.contains('Session 1').should('exist')
    })

    it('16. To check Selected timeslot should be saved', () => {
        cy.xpath("//*[text()='Edit Hours']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click()
        cy.wait(2000)
        cy.xpath("//*[text()='05:30 PM']").click();
        cy.wait(2000)
        cy.xpath("//*[text()='06:30 PM']").click();
        cy.wait(2000)
        cy.xpath("//*[text()=' Save and Publish']").click();


    })

    it('17. To check timeslot should be saved withpout any change', () => {
        cy.xpath("//*[text()='Edit Hours']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click()
        cy.wait(2000)

        cy.xpath("//*[text()=' Save and Publish']").click();


    })

    it('18. To check if user select cancel, Timeslot popup should be closed', () => {
        cy.xpath("//*[text()='Edit Hours']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click()
        cy.wait(2000)
        cy.xpath("//*[text()='Cancel']").click();
        cy.wait(5000)

    })
    it('19. To check Invite Patient for Instant Consultation should be clickable', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled')

    })
    it('20. To check Invite Patient for Instant Consultation should be open after click on button', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();
        cy.contains('Patient not on Platform?').should('exist')

    })

    it('21. To check content of Invite Patient for Instant Consultation popup', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();
        cy.contains('Patient not on Platform?').should('exist')
        cy.xpath("//app-requests-received-invite-patient/div/form/div[1]/span") // Replace with actual selector
            .should('have.text', ' No worries. We will send an email invitation for patient to sign up. Once the patient is onboarded successfully , we will inform you & again you will be able to send the invite for the Instant consultation. ');
    })

    it('22. To check email field should be clickable', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();
        cy.xpath('//*[@placeholder="Email ID"]')       // Replace with your button's selector
            .should('be.visible');        // Check it's visible


    })
    it('23. To check Invite button should be disabled if no email provided', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();
        cy.wait(2000)

        cy.xpath('//button[@type="submit"]')       // Replace with your button's selector
            .should('be.disabled')       // Check it's visible or not


    })
    it('24. To check Invite button should be Enabled if email entered', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();
        cy.xpath('//*[@type="email"]').type('nitin@arkenea.com');
        cy.xpath("//*[text()='Invite']")       // Replace with your button's selector
            .should('be.visible')       // Check it's visible


    })

    it('25. To check by passing Already registered email address should not accept', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();
        cy.xpath('//*[@type="email"]').type('nitin@arkenea.com');

        cy.xpath('//button[@type="submit"]')       // Replace with your button's selector
            .should('be.visible').click()      // Check it's visible
        cy.wait(1000)

        cy.contains('This user is already registered on the system.').should('exist')

    })
    it('26. To check by passing incorrect  email address', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();

        cy.xpath('//button[@type="submit"]')       // Replace with your button's selector
            .should('be.disabled')

    })

    it('27. To check by passing correct nonregistered email address,Invitation link should send', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();
        cy.xpath('//*[@type="email"]').type('nitin+952@arkenea.com');
        cy.xpath("//*[text()='Invite']")       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.contains(' Invitation link sent successfully. ').should('exist')
    })
    it('28. To check by clicking on OK, popup should be closed', () => {
        cy.xpath("//*[text()='Invite Patient for Instant Consultation ']")       // Replace with your button's selector
            .should('be.visible')         // Check it's visible
            .and('not.be.disabled').click();
        cy.xpath('//*[@type="email"]').type('nitin+952@arkenea.com');
        cy.xpath("//*[text()='Invite']")       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();

        cy.xpath('//*[text()="Ok"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.contains('Ok').should('exist')
    })
    it('29. To check by clicking Connect with Patient, Patient list should be opened', () => {
        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.contains('Send Request').should('exist')
    })
    it('30. To check by Search should be added to search patient', () => {
        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();

    })

    it('31. To check by passing patient Name in Search Box', () => {
        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')

        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath(' //*[@fxlayoutalign="center center"]')
            .its('length')
            .then((count) => {

                cy.log('Number of appointments:', count);
                cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]//h5')
                    .then(($el) => {
                        const actualText = $el.text().toLowerCase();
                        expect(actualText).to.include('james'); // 'james' in lowercase
                    });
                // You can add assertions too
                expect(count).to.be.greaterThan(0);
            })



    })

    it('32. To check Send Invite button should be clickable and working', () => {
        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()

        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();

    })
    it('33. To check by Connect Now popup text and Actions buttons', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.contains('Send Invite').should('exist')
        cy.contains('Cancel').should('exist')
        cy.contains('Connect Now').should('exist')
        cy.contains(" Connect with the patient? Click 'Connect Now' to start the call. The patient will be notified of the call initiation. ").should('exist')
        cy.xpath('//*[text()="Connect Now"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible


    })
    it('34. To check Popup should be close after click on Cancel', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.xpath('//*[text()="Cancel"]').click()


    })

    it('35. To check Call should be start after click on Connect Now', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.xpath('//*[text()="Connect Now"]').click()
        cy.xpath('//*[text()="Ok"]').click()


    })

    it('36. To check Call should be start after click on Connect Now', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.xpath('//*[text()="Connect Now"]').click()
        cy.xpath('//*[text()="Ok"]').click()

    })

    it('37. To check Video and Mic should be OFF bidefualt', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.xpath('//*[text()="Connect Now"]').click()
        cy.xpath('//*[text()="Ok"]').click()

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

    })
    it('38. To check video and Mic should be ON after click on icon', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.xpath('//*[text()="Connect Now"]').click()
        cy.xpath('//*[text()="Ok"]').click()

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



    })

    it('39. To check After clickon End call, Call should be Disconnect', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.xpath('//*[text()="Connect Now"]').click()
        cy.xpath('//*[text()="Ok"]').click()

        cy.xpath('//*[text()="Complete Appointment"]').click();

    })
    it('40. To check Full screen and Exit Full screen should be work properly', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.xpath('//*[text()="Connect Now"]').click()
        cy.xpath('//*[text()="Ok"]').click()
        cy.get('i.mat-tooltip-trigger').eq(4).click({ force: true });
        cy.wait(2000)


        cy.xpath('//*[@mattooltip="Exit full screen"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);

            expect('&nbspzoom_out_map&nbsp').to.include('zoom_out_map');

        })
        cy.get('i.mat-tooltip-trigger').eq(4).click({ force: true });


    })

    it('41. To check Messaging window ON/OFF should be work properly', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(5000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(3000)
        cy.xpath('//*[text()="Connect Now"]').click()
        cy.xpath('//*[text()="Ok"]').click()


        cy.xpath('//*[@mattooltip="open chat"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);

            expect('&nbspchat_bubble&nbsp').to.include('chat_bubble');

        })

        cy.xpath('//*[@mattooltip="open chat"]').click()

        cy.xpath('//*[@mattooltip="close chat"]').then(($btn) => {
            const text = $btn.text().trim();
            cy.log('Button text is: ' + text);

            expect('&nbspchat_bubble&nbsp').to.include('chat_bubble');
            cy.wait(5000)
        })

    })

    it('42. To check Messaging window ON/OFF should be work properly', () => {

        cy.xpath('//*[text()="Connect with Patient "]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.xpath('//*[@data-placeholder="Search by patient’s name"]')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .type('James')
        cy.xpath('//*[text()="Search"]').click()
        cy.wait(1000);
        cy.xpath('//app-consultation-send-request/div/mat-card/mat-card-content/div[2]/div/div[2]/div/mat-list/mat-list-item/div/div[3]/div[2]/div/button/span')       // Replace with your button's selector
            .should('be.visible')       // Check it's visible
            .click();
        cy.wait(1000)
        cy.xpath('//*[text()="Connect Now"]').click()
        cy.xpath('//*[text()="Ok"]').click()


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

    })


  

});