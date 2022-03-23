/// <reference types="Cypress" />

describe('The app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders two recent courses', () => {
    cy.contains('Most recent courses');
    cy.contains('DevOps Master Class');

    cy.findAllByText('Instructor').should('have.length', 2);
  });

  it('navigates to new pages', () => {
    cy.findByText('DevOps Master Class').click();

    cy.url().should(
      'eq',
      'http://localhost:3000/courses/7e023cb6-2843-4fb4-a6c4-5032c7a34c10'
    );
  });

  it('redirects to the login page', () => {
    cy.findByText(/login/i).click();

    cy.url().should('eq', 'http://localhost:3000/login');
  });
});
