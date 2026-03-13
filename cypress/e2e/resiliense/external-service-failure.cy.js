describe('TC-005 - External Service Failure Handling', () => {

  it('Application should handle inventory service failure gracefully', () => {

    cy.intercept('GET', '**/inventory-item.html*', {
      statusCode: 500
    }).as('itemFailure')

    cy.login()

    cy.get('.inventory_item_name').first().click()

    cy.wait('@itemFailure')

    cy.url().should('include', 'inventory-item')

  })

})