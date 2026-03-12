describe('TC-005 - External Service Failure Handling', () => {

  it('Application should handle inventory service failure gracefully', () => {

    // Intercept inventory loading request AFTER login
    cy.intercept('GET', '**/inventory.html', {
      statusCode: 500,
      body: 'Server error'
    }).as('inventoryFailure')

    // Visit login page
    cy.visit('https://www.saucedemo.com')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Wait for failure response
    cy.wait('@inventoryFailure')

    // Validate application still has UI structure
    cy.get('body').should('be.visible')

    // Validate user is not redirected to blank/crash page
    cy.url().should('include', 'inventory')

  })

})