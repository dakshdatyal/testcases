/* INTERCEPT - using cy.intercept(), we can
    > Wait for something to happen . listening for an event to happen
    
    1. validate network layer for successful request and response.
           -- test response and request for XHR request
    2. wait for particuar element to be loaded
    3. Override actual response with Stubbed response.
 */

describe('verify all the examples with help of intercept', () => {

    it('Validating the comment on ui- NO Intercept', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).then((response) => {
            cy.log(response)
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.get('.network-comment').should('have.text', response.body.body)
            // front end --> useraction --> api call --> xhr --> response --> read -->ui element
            
        })
    })
    
    
    it('Validating the comment on ui - Using Intercept', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain','magnam voluptate')
    })

    it('Validating the intercept - GET', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(apiResponse){
            cy.log(apiResponse)
            expect(apiResponse.response.statusCode).to.eq(200)          

        })
    })
    it('Validating the intercept - POST', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function(apiResponse){
            //cy.log(apiResponse)
            expect(apiResponse.response.body).to.have.keys('name', 'email', 'body', 'id')   
        })
        cy.get('.network-post-comment').should('have.text', 'POST successful!')
    })

    it('Validating the intercept - PUT', () => {
        cy.intercept({
            method: 'PUT',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('putComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(function(apiResponse){
            cy.log(apiResponse)
            expect(apiResponse.response.statusCode).to.equal(200)
        })
        
    })

    it.only('Validating the intercept - DESTRUCTURING', () => {
        cy.intercept({
            method: 'PUT',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('putComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(function({request,response}){
            // cy.log(request)
            // cy.log(response)
           let {headers:headReq, url:urlReq} = request
           let {headers,statusCode} = response
           expect(statusCode).to.equal(200)
           expect(urlReq).contains('comments/1')
        })
        
    })


})



// {
//     "id": "interceptedRequest396",
//     "browserRequestId": "18172.2903",
//     "routeId": "1643929447825-407",
//     "request": {
//         "headers": {
//             "host": "jsonplaceholder.cypress.io",
//             "connection": "keep-alive",
//             "content-length": "159",
//             "accept": "*/*",
//             "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/9.2.0 Chrome/94.0.4606.81 Electron/15.2.0 Safari/537.36",
//             "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//             "origin": "https://example.cypress.io",
//             "sec-fetch-site": "same-site",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-dest": "empty",
//             "referer": "https://example.cypress.io/",
//             "accept-encoding": "gzip, deflate, br",
//             "accept-language": "en-US"
//         },
//         "url": "https://jsonplaceholder.cypress.io/comments/1",
//         "method": "PUT",
//         "httpVersion": "1.1",
//         "body": "name=Using+PUT+in+cy.intercept()&email=hello%40cypress.io&body=You+can+change+the+method+used+for+cy.intercept()+to+be+GET%2C+POST%2C+PUT%2C+PATCH%2C+or+DELETE",
//         "responseTimeout": 30000
//     },
//     "state": "Complete",
//     "requestWaited": true,
//     "responseWaited": true,
//     "subscriptions": [],
//     "response": {
//         "headers": {
//             "date": "Thu, 03 Feb 2022 23:04:09 GMT",
//             "content-type": "application/json; charset=utf-8",
//             "transfer-encoding": "chunked",
//             "connection": "keep-alive",
//             "x-powered-by": "Express",
//             "access-control-allow-origin": "https://example.cypress.io",
//             "vary": "Origin, Accept-Encoding",
//             "access-control-allow-credentials": "true",
//             "cache-control": "no-cache",
//             "pragma": "no-cache",
//             "expires": "-1",
//             "x-content-type-options": "nosniff",
//             "etag": "W/\"bb-W5jNNwg7rtakcpK+3rjVL56e8nU\"",
//             "via": "1.1 vegur",
//             "cf-cache-status": "DYNAMIC",
//             "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
//             "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hCZMMh%2BN1QsORZzLsIM2f9jLruhZKPBjfdCP08C9ZktqQcw%2BXpXl%2FNwMjKx4esLe1jVgQtoQplabLf%2FTd%2Fbf0It%2FPBhSQYYLRbHsv7BVmgnH9AwMeKUN%2FxIKmytvyx23KV6b8VKGNL1jwlyD\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
//             "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
//             "server": "cloudflare",
//             "cf-ray": "6d7f4bef58d331f9-BOM",
//             "content-encoding": "gzip"
//         },
//         "url": "https://jsonplaceholder.cypress.io/comments/1",
//         "method": null,
//         "httpVersion": "1.1",
//         "statusCode": 200,
//         "statusMessage": "OK",
//         "body": {
//             "name": "Using PUT in cy.intercept()",
//             "email": "hello@cypress.io",
//             "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
//             "id": 1
//         }
//     }
// }