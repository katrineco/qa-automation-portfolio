describe('TC-006 - Checkout Single Field Validation', () => {

  it('System should block checkout when a required field is missing', () => {

    cy.visit('https://www.saucedemo.com')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Add product
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Go to cart
    cy.get('.shopping_cart_link').click()

    // Proceed to checkout
    cy.get('[data-test="checkout"]').click()

    // Fill only some fields
    cy.get('[data-test="firstName"]').type('Test')
    cy.get('[data-test="postalCode"]').type('12345')

    // Try to continue
    cy.get('[data-test="continue"]').click()

    // Improved validation assertion
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'required')

  })

})