import Timeline from './Timeline'
import posts from '../../cypress/fixtures/posts.json'

describe('Timeline', () => {
  it('should render the posts list', () => {
    cy.mount(<Timeline posts={posts} />)

    cy.getByCyLike('post-').should('have.length', posts.length)

    cy.wrap(posts).each(post => {
      cy.getByCy('avatar').contains(post.userName.charAt(0))
      cy.contains(post.title)
      cy.findByText(post.content)
      cy.getByCy('delete').should('be.visible')
    })
  })
})
