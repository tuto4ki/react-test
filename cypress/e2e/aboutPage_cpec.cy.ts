import '@cypress/code-coverage/support';
describe('My First Test', () => {
  it('Visits About page', () => {
    cy.visit('/about');
    cy.contains('About page').should('have.length', 1);
  });
});
