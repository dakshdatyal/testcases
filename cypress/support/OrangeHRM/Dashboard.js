
export class Dashboard{
    elements={
        userName: '#txtUsername',
        password: '#txtPassword',
        loginButton: '#btnLogin',
        mainMenuUL: '#mainMenuFirstLevelUnorderedList',
        empLegend: '#div_legend_pim_employee_distribution_legend',
        logout: 'a[href="/index.php/auth/logout"]',
        loginpanelHeading: '#logInPanelHeading',
        welcomeMenu: '#welcome-menu',
        activatedWelcome: '#welcome'

        
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
        cy.get(this.elements.empLegend).find('tbody').children().should('have.length', 7)
        cy.get(this.elements.empLegend).find('tbody').children().eq(5).should('have.text', 'Human Resources')
    }

    validateLogout() {
        cy.get(this.elements.welcomeMenu).find('li').children().last().should('have.text', 'Logout')

        cy.get(this.elements.welcomeMenu).click({force: true})
        cy.contains('Logout').click({force: true})
        cy.url().should('contains', 'index.php/auth')
        
    }

    validateLogout2() {
        cy.get(this.elements.logout).click({force: true})
        cy.get(this.elements.loginpanelHeading).should('have.text','LOGIN Panel')
    }
    

}