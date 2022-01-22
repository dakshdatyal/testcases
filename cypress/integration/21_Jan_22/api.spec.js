
describe('Validating four basic API', () => {
    it('validate the GET request', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                //cy.log(resposne)
                expect(response.status).to.eq(200)
            })
    })

    it('validate the POST request', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "daksh",
                "job": "lead IT"
            }
        })
            .then(function (response) {
                //cy.log(resposne)
                expect(response.status).to.eq(201)
            })
    })

    it('validate the PUT request', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "daksh datyal",
                "job": "QA"
            }
        })
            .then(function (response) {
                //cy.log(resposne)
                expect(response.status).to.eq(200)
            })
    })

    it('validate the DELETE request', () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"
        })
            .then(function (resposne) {
                //cy.log(resposne)
                expect(resposne.status).to.eq(204)
            })
    })
})