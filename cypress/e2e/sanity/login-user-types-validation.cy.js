describe('TC-015 - Login Validation for Multiple User Types', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Standard user should login successfully', () => {

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', 'inventory')

  })

  it('Locked user should see access error', () => {

    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'locked out')

  })

})