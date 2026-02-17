const { ROOT_SELECTOR } = require("cypress/mount-utils")

describe('My First Test', () => {
  it('test1 - verify tittle-positive', () => {

    cy.visit('https://example.cypress.io')
    cy.title().should(
        'eq', 'Cypress.io: Kitchen Sink')
  })


  it('test2 - verify tittle-negative', () => {

    cy.visit('https://example.cypress.io')
    cy.title().should(
        'eq', 'Kitchen Sinking')
  })


})



