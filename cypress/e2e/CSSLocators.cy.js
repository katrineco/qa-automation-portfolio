describe('CSS Locators', () => {

  it("csslocators", () => {

    cy.viewport(1920,1080)

    cy.visit("https://www.morana.com.br/")

    cy.get('body').should('be.visible')

    // Accept LGPD if present
    cy.get('body').then(($body) => {
      if ($body.find('button.e-btn-lgpd').length > 0) {
        cy.get('button.e-btn-lgpd').click()
      }
    })

    // Search
    cy.get('input[placeholder="Pesquisar"]')
      .should('be.visible')
      .type('colares{enter}')

    cy.contains("colares")

  })
})

