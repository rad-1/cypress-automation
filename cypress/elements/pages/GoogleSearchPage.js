class GoogleSearchPage {

  visit() {
    cy.visit('https://www.google.com/');
  }

  getSearchField() {
    return cy.get(`.gLFyf`)
  }

  getSearchButton() {
    return cy.contains('Google Search');
  }

  getTitle() {
    return cy.title();
  }
}

export default GoogleSearchPage;
