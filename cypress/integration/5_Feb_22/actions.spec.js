//https://example.cypress.io/commands/actions
//https://api.jquery.com/removeattr/



describe('verify the functionality of scroll Into View', () => {
    it('validate scrollIntoView', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').scrollIntoView()
        cy.get('#datepicker').scrollIntoView()
        cy.get('a[href="https://www.udemy.com/course/selenium-webdriver-4-new-features-in-detail/?couponCode=19F2A1CAB5AB5BC6E164"]').scrollIntoView()
    })

    it('validate the functionality of DRAG and DROP', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        //https://api.jquery.com/removeattr/
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove')
            .trigger('mouseup', { force: true })
        cy.get('#droppable').find('p').should('have.text', 'Dropped!')
    })

    it('validate the functionality of DOUBLECLICK', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        //cy.get('#double-click').trigger('dblclick',{which:1}) //or
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.attr','class','div-double-click double')
    })

    it('validate the functionality of MOUSE OVER', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#div-hover').children().first().trigger('mouseover')
        //cy.get('.dropdown-content').should('be.visible')
    })

    
})