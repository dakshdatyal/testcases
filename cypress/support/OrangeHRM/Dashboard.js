
export class Dashboard{
    elements={
        userName: '#txtUsername',
        password: '#txtPassword',
        loginButton: '#btnLogin',
        mainMenuUL: '#mainMenuFirstLevelUnorderedList'
        
    }

    login(userNa, pass){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get(this.elements.userName).type(userNa)
        cy.get(this.elements.password).type(pass)
        cy.get(this.elements.loginButton).click()
    }

    validateMenu() {
        cy.get(this.elements.mainMenuUL).children().should('have.length', 11)
    }

    validateDashboardTab() {
        cy.get('#div_legend_pim_employee_distribution_legend').find('tbody').children().should('have.length', 7)
        cy.get('#div_legend_pim_employee_distribution_legend').find('tbody').children().eq(5).should('have.text', 'Human Resources')
    }

    validateLogout() {
        cy.get('#welcome-menu').find('li').children().last().should('have.text', 'Logout')

        cy.get('#welcome').click()
        cy.contains('Logout').click()
        cy.url().should('contains', 'index.php/auth')
        
    }
    

}