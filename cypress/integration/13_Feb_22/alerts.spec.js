

describe('verify the functionality of alerts', () => {
    it('validate window:alert functionality', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (text) => {
            expect(text).to.eq('I am an alert box!')
        })
    })

    it('validate the functionality of popup', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
          cy.get('#button2').click()
          cy.get('.modal-title').should('contain', 'It’s that Easy!!')
          cy.contains('Close').click()
          cy.get('.modal-title').should('not.be.visible')
    })

    it('validate the functionality of window:confirm||Cancel', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
          cy.get('#button4').click()
          cy.on('window:confirm', (text) => {
              expect(text).to.eq('Press a button!')
              return false
          })
          cy.contains('You pressed Cancel!')
          
    })

    it('validate the functionality of window:confirm||OK', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
          cy.get('#button4').click()
          cy.on('window:confirm', (text) => {
              expect(text).to.eq('Press a button!')
              return true
          })
          cy.contains('You pressed OK!')
          
    })

    
     
})