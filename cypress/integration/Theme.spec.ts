describe('The theme switcher button', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.setTheme('light');
  });

  it('toggles from light to dark appropriately', () => {
    cy.get('html').should('have.class', 'light');

    cy.get('button[name="themeSwitcher"]').click();

    cy.get('html').should('have.class', 'dark');
  });
});
