describe('The login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('shows two ways to login', () => {
    cy.contains(/github/i);
    cy.contains(/discord/i);
  });
});
