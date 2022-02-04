

describe('verify the functionality of iframes', () => {
    it('validate the iframes using JQuery', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')

        // id ----- iframe
        // then() ====> iframe - contents() --- document 
        // find ---- body (no more cypress) ---- cypress and given alias name 
        // find(.sub-heading). first and validate the text

        cy.get('#frame').then(function(iframe) {
            //cy.log(iframe)
            let bodyy = iframe.contents().find('body') // contents() - Jquery method to get the content document of an iframe
            cy.wrap(bodyy).as('element')
            cy.get('@element').find('.sub-heading').first().should('have.text', 'Who Are We?')
        })
    })

    it('validate the iframe using Javasrcipt', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
           //cy.log(iframe) //--- we will get 0 property, using this we will get to the iframe
            // id ----- iframe
            // then() ====> iframe['0'] -- 0 property from cy.log(iframe) - contentDocument.body 
            // find ---- body (no more cypress) ---- cypress and given alias name 
            // find(.sub-heading). first and validate the text
        cy.get('#frame').then((iframe) => {
            let bodyy = iframe['0'].contentDocument.body
            cy.wrap(bodyy).as('element')
            cy.get('@element').find('.sub-heading').first().should('have.text', 'Who Are We?')
            
        })
    })
})