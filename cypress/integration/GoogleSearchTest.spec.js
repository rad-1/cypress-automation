import GoogleSearchPage from '../elements/pages/GoogleSearchPage';

describe('Google Search Page', () => {
  it('should should search Google for "Kittens"', () => {
    const googleSearchPage = new GoogleSearchPage();

    // Visit https://www.google.com
    googleSearchPage.visit();

    // Type 'Kittens' into the search field
    googleSearchPage
      .getSearchField()
      .clear()
      .type('Kittens')

    // Click the search button
    googleSearchPage
      .getSearchButton()
      .click();

    // Expect the title to equal: 'Kittens - Google Search'
    googleSearchPage
      .getTitle()
      .should('eq', 'Kittens - Google Search');
  });
});
