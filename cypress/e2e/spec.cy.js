describe('Routing', () => {
  it('should direct-nav to routes', () => {
    cy.visit('/')
    cy.getByCy('timeline').should('be.visible')

    cy.visit('/people')
    cy.location('pathname').should('eq', '/people')
    cy.getByCy('people-search').should('be.visible')
    cy.getByCy('people-list').should('be.visible')

    cy.visit('/profile')
    cy.location('pathname').should('eq', '/profile')
    cy.getByCy('profile').should('be.visible')

    cy.visit('/newpost')
    cy.location('pathname').should('eq', '/newpost')
    cy.getByCy('new-post').should('be.visible')

    cy.visit('/register')
    cy.location('pathname').should('eq', '/register')
    cy.getByCy('register').should('be.visible')

    cy.visit('/login')
    cy.location('pathname').should('eq', '/login')
    cy.getByCy('login').should('be.visible')
  })
})
