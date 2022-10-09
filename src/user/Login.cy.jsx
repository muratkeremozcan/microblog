import Login from './Login'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer'

describe('Login', () => {
  it('should notify form errors, fill fields and login', () => {
    // When in a component test using Redux we can make our custom store
    const store = configureStore({reducer})
    cy.mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    )
    const email = 'email@example.com'
    const password = '#1Password'

    cy.nValidFormFields(2)
    cy.getByCy('login').click()
    cy.nInValidFormFields(2)

    cy.intercept('POST', '**/login', {status: 200}).as('login')
    Cypress.on('uncaught:exception', () => false)

    cy.getByCy('email').type(email)
    cy.getByCy('password').type(password)
    cy.getByCy('login').click()
    cy.wait('@login')

    cy.get('[aria-invalid="false"]').should('have.length', 2)
    cy.nValidFormFields(2)
  })
})
