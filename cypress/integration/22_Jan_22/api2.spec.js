
describe('Validate the post API', () => {
    it('validate the GET api request and count the number of users', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                cy.log(response)
                expect(response.body.per_page).to.equal(response.body.data.length) // using dot notation
                expect(response['body']['per_page']).to.equal(response['body']['data']['length']) //using bracket notation
            })
    })

    it('Validate the properties for multiple users', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        })
            .then(function (response) {
                //cy.log(response)
                response.body.data.forEach(function(element) {
                     //expect(element).to.have.property('id')
                    // expect(element).to.have.property('email')
                    // expect(element).to.have.property('first_name')
                    // expect(element).to.have.property('last_name')
                    // expect(element).to.have.property('avatar')
                    expect(element).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')
                })
            })
    })

    it('validate the properties of user', () => {
        cy.request({
            method:'GET',
            url: 'https://reqres.in/api/users?page=2'
        })
            .then(function(response){
                //cy.log(response)
                expect(response.body.data[4]['email']).to.eq('george.edwards@reqres.in')
                expect(response.body.data[1]['id']).to.eq(8)
            })
    })

    it.only('validate the response body of POST(create user) request', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        })
            .then(function(response){
               cy.log(response)
               expect(response.status).to.eq(201)
               expect(response.body).to.have.property('job')
               expect(response.body).to.have.property('name')

               expect(response.body).to.have.all.keys('name', 'job', 'id', 'createdAt')
               expect(response.duration).to.be.within(300,500)
            })
    })

})
