describe('Logging In - HTML Web Form', () => {
  context('HTML form submission', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('displays errors on login', () => {
      cy.get('input[name=login]').type('jane.lae')
      cy.get('input[name=password]').click()

      cy.get('span')
        .should('contain', 'Entrez une adresse email en @ nantes js .fr')
    })
  })
})
