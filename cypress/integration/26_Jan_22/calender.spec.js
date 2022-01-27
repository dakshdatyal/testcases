

describe('verfiy the calender functionality', () => {
    it('validate the calender', () => {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        let date = new Date();
        date.setDate(date.getDate()+400)
        let year = date.getFullYear()
        cy.log(year) // returns 2022 (current year) 
        let month = date.getMonth()
        cy.log(month) // returns 0 (index value) of current month
        let textMonth = date.toLocaleString('default',{month: "long"}) // to convert month's index value to String(month name)
        cy.log(textMonth) // returns January (month name) of current month
        let day = date.getDate()
        cy.log(day)

        function getMonYear() {
            cy.get('.datepicker-switch').eq(0).then(function(el) {
                if(!el.text().includes(year)){
                    cy.get('.next').eq(0).click()
                    getMonYear()
                }
            }).then(() => {
                cy.get('.datepicker-switch').eq(0).then(function(el){
                    if(!el.text().includes(textMonth)){
                        cy.get('.next').eq(0).click()
                        getMonYear()
                    }
                })
            })
        }
        function getDate() {
            cy.get('.day').contains(day).click()
        }
        getMonYear()
        getDate()
    })
})