describe('TC-001 - Checkout Funnel Happy Path', () => {

  it('should allow a user to complete the checkout flow successfully', () => {

    // Visit application and login
    cy.login()

    // Add product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Open cart
    cy.get('.shopping_cart_link').click()

    // Proceed to checkout
    cy.get('[data-test="checkout"]').click()

    // Fill checkout information
    cy.get('[data-test="firstName"]').type('Test')
    cy.get('[data-test="lastName"]').type('User')
    cy.get('[data-test="postalCode"]').type('12345')

    // Continue checkout
    cy.get('[data-test="continue"]').click()

    // Finish purchase
    cy.get('[data-test="finish"]').click()

    // Validate success message
    cy.get('[data-test="complete-header"]')
      .should('be.visible')
      .and('contain.text', 'Thank you for your order')

  })

})