
import {HomePage} from '../../support/OrangeHRM/home'

describe('verify all the scenarios for a rest case', () => {
    let hmPage = new HomePage()

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    })

    it('validate the login with valid credentials', () => {
        hmPage.login('Admin','admin123')
        cy.url().should('include', 'dashboard')
    })

    it('validate the login with invalid credentials', () => {
        hmPage.login('Admin', 'admin234')
        cy.get('#spanMessage').should('have.text', 'Invalid credentials')
    })

    it('validate the logo on home page', () => {
        hmPage.validateLogo()
    })

    it('validate forgot password link', () => {
       hmPage.validateForgotPassword()
    })

    it('validate the social media icons length', () => {
      hmPage.validateSocialIcons()
    })

})