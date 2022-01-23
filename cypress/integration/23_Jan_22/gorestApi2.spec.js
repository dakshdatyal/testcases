

describe('verify gorest API by passing Authorization Bearer token via env variable', () => {
    function generateEmail() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for (var ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@testorg.com'
    }
    it('validate CRUD operations', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                Authorization: Cypress.env('bearer_token')
            },
            body: {
                "name": "Test Member",
                "email": generateEmail(),
                "gender": "male",
                "status": "active"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.body.data).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
            expect(response.status).to.eq(201)
            expect(response.statusText).to.eq('Created')
            return response.body.data['id']
        }).then(function (id) {
            cy.request({
                method: "GET",
                url: `https://gorest.co.in//public/v1/users/${id}`,
                headers: {
                    Authorization: Cypress.env('bearer_token')
                }
            }).then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq('OK')
                return response.body.data['id']
            }).then(function (id) {
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in//public/v1/users/${id}`,
                    headers: {
                        Authorization: Cypress.env('bearer_token')
                    },
                    body: {
                        "name": "Test Member",
                        "email": generateEmail(),
                        "gender": "female",
                        "status": "inactive"
                    }
                }).then(function(response) {
                    //cy.log(response)
                    expect(response.body.data.status).to.eq('inactive')
                    expect(response.body.data['gender']).to.eq('female')
                    return response.body.data['id']
                }).then(function(id) {
                    cy.request({
                        method: "DELETE",
                        url: `https://gorest.co.in/public/v1/users/${id}`,
                        headers: {
                            Authorization: Cypress.env('bearer_token')
                        }
                    }).then(function(response) {
                        //cy.log(response)
                        expect(response.body).to.eq('')
                        expect(response.status).to.eq(204)
                        expect(response.statusText).to.eq('No Content')
                    })                
                })
            })
        })
    })
})