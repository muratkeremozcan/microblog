Cypress.Commands.add('getByCy', (selector, ...args) =>
  cy.get(`[data-cy="${selector}"]`, ...args),
)

Cypress.Commands.add('getByCyLike', (selector, ...args) =>
  cy.get(`[data-cy*=${selector}]`, ...args),
)

Cypress.Commands.add('getByClassLike', (selector, ...args) =>
  cy.get(`[class*=${selector}]`, ...args),
)

Cypress.Commands.add('nInValidFormFields', n =>
  cy.get('[aria-invalid="true"]').should('have.length', n),
)

Cypress.Commands.add('nValidFormFields', n =>
  cy.get('[aria-invalid="false"]').should('have.length', n),
)
