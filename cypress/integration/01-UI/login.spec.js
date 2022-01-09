// Test Scenario - What to test || Test Case - How to test
// describe() SYNTAX: describe('Test Scenario Name',()=>{'Test Case'})

describe('Verify the Login functionality', () =>{
    it('login with Valid credentials 1', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/') //open URL
        cy.get('input[name="txtUsername"]').type('Admin') // Selecting the element and entering the username
        cy.get('input[name="txtPassword"]').type('admin123')// Selecting the element and entering the password
        cy.get('#btnLogin').click() //// Selecting the element and clicking on lodin button
        //Below code is to Validate if login is successful
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    })
    it('login with Invalid credentials 1', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/') //open URL
        cy.get('input[name="txtUsername"]').type('Test') // Selecting the element and entering the username
        cy.get('input[name="txtPassword"]').type('tset456')// Selecting the element and entering the password
        cy.get('#btnLogin').click() //// Selecting the element and clicking on lodin button
        //Below code is to Validate if login is unsuccessful with invalid credentials
        cy.get('span[id="spanMessage"]').should('be.visible')
    })
    it('login with Valid credentials 2', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/') //open URL
        cy.get('input[name="txtUsername"]').type('Admin') // Selecting the element and entering the username
        cy.get('input[name="txtPassword"]').type('admin123')// Selecting the element and entering the password
        cy.get('#btnLogin').click() //// Selecting the element and clicking on lodin button
        //Below code is to Validate if login is unsuccessful with invalid credentials
        cy.get('#welcome').should('be.visible')
    })
})