import BlogMenuList from './Menu'
import {BrowserRouter} from 'react-router-dom'

describe('BlogMenuList', () => {
  it('should click-nav the routes and logout', () => {
    cy.mount(
      <BrowserRouter>
        <BlogMenuList logout={cy.stub().as('logout')} />
      </BrowserRouter>,
    )

    const routes = ['/', '/people', '/profile', '/newpost']

    routes.forEach(route => {
      cy.get(`[href="${route}"]`).click()
      cy.location('pathname').should('eq', route)
    })

    cy.getByCy('logout').click()
    cy.get('@logout').should('have.been.called')
  })
})
