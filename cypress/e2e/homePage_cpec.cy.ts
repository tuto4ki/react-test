describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Visits Home page', () => {
    cy.get('input[name=search]').type('phone');
    cy.get('form').submit();
    cy.get('[data-testid="item-card-product"]').should('have.length', 30);
  });
  it('Search data', () => {
    cy.get('input[name=search]').type('phone');
    cy.get('form').submit();
    cy.get('[data-testid="item-card-product"]').should('have.length', 4);
  });
  it('Show detailed page', () => {
    cy.contains('iPhone 9').click();
    cy.contains('An apple mobile which is nothing like apple');
    cy.get('[data-testid="detailed-card"]').should('have.length', 1);
  });
  it('Visits Links About', () => {
    cy.contains('About').click();
    cy.location('pathname').should('eq', '/about');
  });
  it('Visits Links Create card page', () => {
    cy.contains('Create card').click();
    cy.location('pathname').should('eq', '/createCard');
  });
});
