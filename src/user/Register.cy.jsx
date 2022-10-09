import Register from './Register'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer'

describe('Register', () => {
  it('should', () => {
    // When in a component test using Redux we can make our custom store
    const store = configureStore({reducer})
    cy.mount(
      <Provider store={store}>
        <Register />
      </Provider>,
    )

    const name = 'John Doe'
    const email = 'email@example.com'
    const password = '#1Password'

    cy.nValidFormFields(3)
    cy.getByCy('register').click()
    cy.nInValidFormFields(3)

    cy.intercept('POST', '**/register', {status: 200}).as('register')
    Cypress.on('uncaught:exception', () => false)

    cy.getByCy('name').type(name)
    cy.getByCy('email').type(email)
    cy.getByCy('password').type(password)
    cy.getByCy('register').click()
    cy.wait('@register')

    cy.nValidFormFields(3)
  })
})
