describe('Unauthenticated user checkout program', () => {

    it("Checkout VIX Program", () => {
  
      const email = Cypress.env('email2');
      const password = Cypress.env('password2');
      const phoneNumber = Cypress.env('phoneNumber');
      let url = Cypress.env('baseUrl');
      let checkoutUrl = Cypress.env('checkoutUrl');
      let paymentUrl = Cypress.env('thankyouUrl');
  
  
      // Define viewport for maintaining the website size and orientation to desktop screen resolution
      cy.viewport(1440, 1024)
  
      // Visit Rakamin staging website homepage
      cy.visit(url);
  
      // Click Explore VIX Program from Virtual Internship drop down
  
      cy.get(".submenu-header-bootcamp").eq(1).invoke("show").click();
      cy.get("[data-cy='explore-vix-navigation']").eq(1).click({force: true});
      
      // Select Card of Virtual Internship program that still available(Bank Muamalayt - SEO)
      cy.get("[data-cy='vix-card-1']", { timeout: 10000 }).click();
  
      // Click "daftar sekarang"
      cy.get("[data-cy='register-vix-button']").click();

      // Click login first button
      cy.get("[data-cy='login-first-button']").click();


      // Input email and password
      cy.get("[data-cy='login-email-text-field']").clear().type(email).should("have.value", email);
      cy.get("[data-cy='login-password-text-field']").clear().type(password).should("have.value", password);

      // Click "Masuk" button
      cy.get("[data-cy='login-submit-button']").click();

      // Click "daftar sekarang"
      cy.get("[data-cy='register-vix-button']").click();

      // Filling out VIX Form
      cy.get("[data-cy='phone-number-text-field']").clear().type(phoneNumber);
      cy.get("[data-cy='vix-info-source-option-1']").click();
      cy.get("[data-cy='agreement-checkbox']").click();

      // Click submit button to submit form
      cy.get("[data-cy='vix-form-submit-button']").click();
      cy.get("[data-cy='button-confirm']").click();

      // Check if after button confirmation clicked it will redirected to checkout page
      cy.url().should("be.equal", checkoutUrl);
      cy.contains("Checkout").should("be.visible");

      // Check if Get VIP Access card is selected
      cy.get("[data-cy='vip-access-checkbox']").should("have.attr", "src"). should("include", "checkbox-on");

      // Click continue payment button
      cy.get("[data-cy='continue-to-payment-button']").click();

      // Check if after payment button is clicked it will redirected to thankyou page
      cy.url().should("be.equal", paymentUrl);
      cy.contains("Terima kasih atas pembelian Virtual Internship Experience -").should("be.visible");
  })
})