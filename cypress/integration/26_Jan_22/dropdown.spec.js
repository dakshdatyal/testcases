

describe('verify the functionality of Dropdown list', () => {
    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it('validate the functionality of Dropdown list ', () => {
        cy.get('#dropdowm-menu-1').select('C#').should('have.value', 'c#')
        cy.get('#dropdowm-menu-1').select('SQL').should('have.value', 'sql')
    })

    it('selecting the values from multiple drop down list ', () => {
        let selectedValues = ['sql', 'testng', 'jquery']
            cy.get('.section-title').first().children().each(function (el, index) {
            cy.wrap(el).select(selectedValues[index]).should('have.value',selectedValues[index])
        })
    })

    it('verify the current URL ', () => {
        cy.url().should('contains', 'Dropdown')
        
    })

    it('verify the title', () => {
        cy.title().should('contains', 'WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
    })
    


})