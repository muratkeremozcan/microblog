import {faker} from '@faker-js/faker'
describe('Register & Login', () => {
  after(cy.resetData)
  it('passes', () => {
    const name = faker.name.firstName()
    const email = faker.internet.email()
    const password = faker.internet.password()

    cy.visit('/register')
    cy.intercept('POST', '**/register').as('register')

    cy.getByCy('name').type(name)
    cy.getByCy('email').type(email)
    cy.getByCy('password').type(password)
    cy.getByCy('register').click()

    cy.wait('@register')
      .its('response.statusCode')
      .should('be.oneOf', [200, 201])
    cy.location('pathname').should('eq', '/')
    cy.getByCy('timeline').should('be.visible')
  })
})
