describe('TC-002 - Checkout Mandatory Fields Validation', () => {

  it('System should block checkout when required information is missing', () => {

    cy.visit('https://www.saucedemo.com')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Add product
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Go to cart
    cy.get('.shopping_cart_link').click()

    // Checkout
    cy.get('[data-test="checkout"]').click()

    // Try to continue WITHOUT filling form
    cy.get('[data-test="continue"]').click()

    // Validation
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error')

  })

})