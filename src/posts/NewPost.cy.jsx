import NewPost from './NewPost'

describe('NewPost', () => {
  it('should submit a new post', () => {
    cy.mount(<NewPost addPost={cy.stub().as('addPost')} />)

    const title = 'Hello World'
    const content = 'This is my first post'

    cy.getByCy('title').type(title, {delay: 0})
    cy.getByCy('content').type(content, {
      delay: 0,
    })

    cy.getByCy('submit').click()
    cy.get('@addPost').should('have.been.calledWith', {title, content})
  })
})
