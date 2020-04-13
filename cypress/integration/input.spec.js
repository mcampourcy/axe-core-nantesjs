describe('Logging In - HTML Web Form', () => {
  context('HTML form submission', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('displays errors on login', () => {
      cy.get('input[name=email]').type('jane.doe')
      cy.get('input[name=password]').click()
      cy.get('button[type=submit]').click()

      cy.get('span')
        .should('contain', 'Veuillez entrer une adresse email valide. Exemple: exemple@exemple.fr')
    })
  })

  context('Axe core test', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.injectAxe()
    })

    it('Has no detectable a11y violations on load', () => {
      cy.checkA11y()
    })

    it('Has no a11y violations after button click', () => {
      cy.get('button').click()
      cy.checkA11y()
    })
  })
})
