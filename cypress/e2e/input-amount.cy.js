describe('Input Amount Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow numeric input', () => {
    cy.get('.input-amount-number').clear().type('12345');
    cy.get('.input-amount-number').should('have.value', '12,345');
  });

  it('should not allow non-numeric input', () => {
    cy.get('.input-amount-number').clear().type('abc123!@#');
    cy.get('.input-amount-number').should('have.value', '123');
  });

  it('should format number with commas', () => {
    cy.get('.input-amount-number').clear().type('1000000');
    cy.get('.input-amount-number').should('have.value', '1,000,000');
  });

  it('should not allow multiple decimal points', () => {
    cy.get('.input-amount-number').clear().type('12.34.56');
    cy.get('.input-amount-number').should('have.value', '12.34');
  });

  it('should allow decimal numbers with two decimal places', () => {
    cy.get('.input-amount-number').clear().type('1000.567');
    cy.get('.input-amount-number').should('have.value', '1,000.56');
  });

  it('should remove leading zeros', () => {
    cy.get('.input-amount-number').clear().type('000123');
    cy.get('.input-amount-number').should('have.value', '123');
  });

  it('should debounce input updates', () => {
    cy.get('.input-amount-number').clear().type('98765');
    cy.wait(400);
    cy.get('.input-amount-number').should('have.value', '98,765');
  });

  it('should display default placeholder', () => {
    cy.get('.input-amount-number').should('have.attr', 'placeholder', '0.00');
  });
});
