import './commands'
import '@testing-library/cypress/add-commands'
import data from '../fixtures/db.json'

Cypress.Commands.add('crud', (method, route, body, allowedToFail = false) =>
  cy.request({
    method: method,
    url: `${Cypress.env('API_URL')}/${route}`,
    body: method === 'POST' || method === 'PUT' ? body : undefined,
    retryOnStatusCodeFailure: !allowedToFail,
    failOnStatusCode: !allowedToFail,
  }),
)

Cypress.Commands.add('resetData', () =>
  cy.crud('POST', 'reset', {
    posts: data.posts,
    users: data.users,
    followers: data.followers,
  }),
)
