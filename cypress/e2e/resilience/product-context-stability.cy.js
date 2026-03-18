describe('TC-005 - Product context stability during navigation', () => {

  it('User should keep product context when navigating between list and details', () => {

    cy.login()

    cy.contains('Sauce Labs Backpack').click()

    cy.url().should('include', 'inventory-item')

    cy.get('.inventory_details_name')
      .should('contain', 'Sauce Labs Backpack')

    cy.go('back')

    cy.contains('Sauce Labs Backpack')
      .should('be.visible')

  })

})