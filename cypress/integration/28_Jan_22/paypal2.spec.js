

describe('Verify Paypal OAuth 2.0', () => {
    let aToken = ""
    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers: {
                Authorization: 'Basic QWI3QXNFeVNjT0Yzd0U1NVhoOEFoZnQwZzVaNUI5UzF5SEdnRmJnRVFvNGFjQW9QOWZNZThzSFJWQVhncUpSLXRXeXB2OWRLNmtjUEcxU086RUJ6M2ZQMlBQeUE0UWdqNGxMMjdvRXRkVERvWnh2RExPeC1Cdjk4a0lISzk1OHlrYk9uTmlOXy1iMXU1ZS02cUM3Q19QWldHTEtkYWljdW0='
            },
            form: true,
            body: {
                grant_type: 'client_credentials'
            }
        }).then(function (response) {
            //cy.log(response)
            aToken = response.body.access_token
            cy.log(aToken)
        })
    })

    it('Verify the API to create orders', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
            headers: {
                Authorization: `Bearer ${aToken}`
            },
            body: {
                "intent": "CAPTURE",
                "purchase_units": [
                    {
                        "amount": {
                            "currency_code": "USD",
                            "value": "100.00"
                        }
                    }
                ]
            }
        }).then(function (response) {
            // cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.statusText).to.eq('Created')

        })
    })
})