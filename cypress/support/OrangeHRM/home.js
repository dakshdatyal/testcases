
export class HomePage {
    elements= {
            userName: '#txtUsername',
            password: '#txtPassword',
            loginButton: '#btnLogin',
            forgotPass: '#forgotPasswordLink > a',
            logo: '#divLogo > img',
            socialMedia: '#social-icons'
    }

    login(userNa,pass){
        cy.get(this.elements.userName).type(userNa)
        cy.get(this.elements.password).type(pass)
        cy.get(this.elements.loginButton).click()
    }

    validateLogo(){
        cy.get(this.elements.logo).should('be.visible')
    }

    validateForgotPassword(){
        cy.get(this.elements.forgotPass).should('be.visible')
        cy.get(this.elements.forgotPass).click()
        cy.url().should('include','auth/requestPasswordResetCode')
    }

    validateSocialIcons(){
        cy.get(this.elements.socialMedia).children().should('have.length', 4)
    }
}
