// Problem without using intercept



describe('Verify the GET newtork request or XHR request', () => {
    it('validate the get request', () => {
        cy.request({
            method: 'GET',
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).then((response) => {
            //cy.log(response)
            //expect(response.body.body).contains('enim quasi')
            let text = response.body.body
            return text
        }).then((text) => {
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.wait(2000) 
            /* text will be dispalyed once xhr request(after click) completes and returns response.
            If we do not put wait for 2 seconds here, it will throw Assertion Error as it will not be able load text immidiadtey after click.
            Hence we will use INERCEPT which will allow us to wait for particular element to be loaded */
            cy.get('.network-comment').then((textElement) => {
                //cy.log(textElement.text())
                expect(textElement.text()).to.equal(text)
            })
        })
    })
})