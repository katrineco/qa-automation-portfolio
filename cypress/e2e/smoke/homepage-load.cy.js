describe('TC-007 - Smoke - Homepage Load', () => {

  it('Application should load inventory page after login', () => {

    cy.login()

    cy.url().should('include', 'inventory')

    cy.get('.inventory_list').should('be.visible')

  })

})