
describe('Verify the CHECKBOX and RADIO BUTTON', () => {

    //------------------------CHECKBOX---------------------------------------
    it('verify the functionality of check() and uncheck() for SIGNLE CHECKBOX', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //validation
        // check() - puts tick/s on CHECKBOX/s.or Checks the CHECKBOX
        cy.get('input[value ="option-1"]').check().should('be.checked')
        cy.get('input[value ="option-1"]').uncheck().should('not.be.checked')
    })

    it('verify the functionality of check() and uncheck() for MULTIPLE CHECKBOXES', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //validation
        cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"]).should('to.be.checked')
        cy.get('input[type="checkbox"]').uncheck(["option-1", "option-2", "option-3", "option-4"]).should('not.be.checked')
    })

    it('verify the functionality for SIGNLE CHECKBOX with click() function', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //validation
        cy.get('input[value="option-3"]').click().should('not.be.checked')
        cy.get('input[value="option-3"]').click().should('to.be.checked')
    })

    it('verify the functionality for MULTIPLE CHECKBOXES with click() functio', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //validation
        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).click()
        }).should('to.be.checked') //this should('to.be.checked') outside each() will check - if the last checkbox is checked after.
    })
    //------------------------RADIO BUTTON---------------------------------------
    it('verify the functionality of check()  for a RADIO BUTTON', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //validation
        cy.get('input[value="orange"]').check().should('to.be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
        cy.get('input[value="purple"]').check().should('to.be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')
    })

    it.only('verify the functionality of click() fucntion for multiple RADIO BUTTON', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //validation
        cy.get('input[type="radio"]').not('input[name="vegetable"]').each(function(el){
            cy.wrap(el).click().should('to.be.checked')
            cy.wait(2000)
        })
    })

    it.only('verify the functionality of click() fucntion for multiple RADIO BUTTON', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //validation
        cy.get('#radio-buttons').find('input').each(function(el){
            cy.wrap(el).click().should('to.be.checked')
            cy.wait(2000)
        })
    })
})