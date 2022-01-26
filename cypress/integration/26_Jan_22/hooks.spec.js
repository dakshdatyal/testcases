
describe('verify the functionality of HOOKS', () => {
    before(() => {
        cy.log('I am running from before() hook')
    })

    beforeEach(() => {
        cy.log('I am running from beforeEach() hook')
    })

    afterEach(() => {
        cy.log('I am running from afterEach() hook')
    })
    after(() => {
        cy.log('I am running from after() hook')
    })

    it('first test case', () => {
        cy.log('test case one running')
    })

    it('second test case', () => {
        cy.log('test case two running')
    })
})