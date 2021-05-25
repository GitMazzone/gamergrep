describe('The main dashboard', () => {
  it('Forms the commands/actions URL when nav from home to type', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');
  });

  // Not sure if this will be how it's done.
  it('Loads build output from app/', () => {
    // cy.request('../../app/app.js');
  });
});
