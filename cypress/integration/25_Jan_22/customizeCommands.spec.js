/* Custom Commands - https://docs.cypress.io/api/cypress-api/custom-commands#Syntax
     >   Cypress comes with its own API for creating custom commands and overwriting existing commands. 
        The built in Cypress commands use the very same API that's defined below.
     >   A great place to define or overwrite commands is in your cypress/support/commands.js file, 
                since it is loaded before any test files are evaluated via an import statement in your 
                supportFile (cypress/support/index.js by default).
     > Syntax-  Cypress.Commands.add(name, callbackFn)
                Cypress.Commands.add(name, options, callbackFn)
                Cypress.Commands.overwrite(name, callbackFn)
*/

describe('verify the login functionality', () => {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it('login with valid credentials', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        // cy.get('#txtUsername').type('Admin')
        // cy.get('#txtPassword').type('admin123')
        // cy.get('#btnLogin').click()
        cy.login('Admin', 'admin123')
        cy.get('#welcome').should('contains.text', 'Welcome' )
    })

    it('login with invalid credentials', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        // cy.get('#txtUsername').type('Admin')
        // cy.get('#txtPassword').type('admin')
        // cy.get('#btnLogin').click()
        cy.login('Admin', '123')
        cy.get('#spanMessage').should('have.text', 'Invalid credentials' )
    })
})