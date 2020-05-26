/// <reference types="cypress" />

describe('Perform a Google Search without luck', () => {
  it('Visit the Google Search page', function() {
    cy.visit('https://www.google.com/');
  });

  it('Enter the search keyword', function() {
    cy.get('.gLFyf').type('Kittens').should('have.value', 'Kittens');
  });

  it('Click the Google Search button', function() {
    cy.contains('Google Search').click()
  });

  it('Verify the search title', function() {
    cy.title().should('eq', 'Kittens - Google Search');
  })
})
