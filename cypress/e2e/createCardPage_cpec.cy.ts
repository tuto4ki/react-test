describe('My First Test', () => {
  it('Visits Create card page', () => {
    cy.visit('/createCard');
    cy.contains('Create card page').should('have.length', 1);
  });
  it('Add card', () => {
    cy.visit('/createCard');
    cy.contains('Create card page').should('have.length', 1);
  });
});
