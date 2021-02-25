/// <reference types="cypress" />

describe('Feedback', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/feedback.html')
    })

    it('Enviar Formulário com sucesso', () => {

        const formulario = {
        name :'Alexandre',
        email :'teste@teste.com',
        subject :'Cypress',
        comment :'Cypress é uma ferramenta robusta!'
    }
        // Antes do preenchimento do formulário, tiro um screenshot, onde o nome do arquivo é empty-form (formulário vazio.)
        cy.screenshot('empty-form')
        cy.fillMandatoryFields(formulario)
        // Após o preenchimento dos campos obrigatórios, mas antes de submter o formulário, tiro outra screenshots, chamada form-filled (formulário preenchido)
        cy.screenshot('form-filled')
        cy.get('.btn-signin').click()

        cy.get('#feedback-title')
        .should('contain', 'Feedback')
        // Após a verificação da mensagem de sucesso, tiro uma screenshot com o nome success-message
        cy.screenshot('success-message')

    })
})