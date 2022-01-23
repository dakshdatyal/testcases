
describe('Verify the Gorest API', () => {

    function genEmail() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for (var ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@test.com';
    }
    it('validate the create user API', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                Authorization: 'Bearer 8de961031069e831b1984997c3e94e94040d630238a6c635d942416d58eb40bc'
            },
            body: {
                "name": "Test User",
                "email": genEmail(),
                "gender": "male",
                "status": "active"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.body.data).to.have.property('id')
            return response.body.data['id']
        })
            .then(function (id) {
                cy.request({
                    method: 'GET',
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        Authorization: 'Bearer 8de961031069e831b1984997c3e94e94040d630238a6c635d942416d58eb40bc'
                    }
                }).then(function (response) {
                    //cy.log(response)
                    expect(response.status).to.eq(200)
                    return response.body.data['id']
                }).then(function (id) {
                    cy.request({
                        method: 'PUT',
                        url: `https://gorest.co.in//public/v1/users/${id}`,
                        headers: {
                            Authorization: 'Bearer 8de961031069e831b1984997c3e94e94040d630238a6c635d942416d58eb40bc'
                        },
                        body: {
                            "name": "Test User name",
                            "email": genEmail(),
                            "gender": "female",
                            "status": "active"
                        }
                    }).then(function(response) {
                        //cy.log(response)
                        expect(response.status).to.eq(200)
                        return response.body.data['id']
                    }).then(function(id) {
                        cy.request({
                            method: 'DELETE',
                            url: `https://gorest.co.in/public/v1/users/${id}`,
                            headers: {
                                Authorization: 'Bearer 8de961031069e831b1984997c3e94e94040d630238a6c635d942416d58eb40bc'
                            }
                        }).then(function(response) {
                            //cy.log(response)
                            expect(response.status).to.eq(204)
                            expect(response.statusText).to.eq('No Content')
                        })
                    })
                })
            })
    })
})