describe('Currency Dropdown', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the selected currency', () => {
    cy.get('.currency-selected').should('contain.text', 'USD');
  });

  it('should open the dropdown when clicked', () => {
    cy.get('.currency-dropdown').click();
    cy.get('.currency-list').should('be.visible');
  });

  it('should select a new currency', () => {
    cy.get('.currency-dropdown').click();
    cy.contains('EUR').click();
    cy.get('.currency-selected').should('contain.text', 'EUR');
  });

  it('should close the dropdown when an option is selected', () => {
    cy.get('.currency-dropdown').click();
    cy.contains('EUR').click();
    cy.get('.currency-list li').should('have.length', 0);
  });
});
