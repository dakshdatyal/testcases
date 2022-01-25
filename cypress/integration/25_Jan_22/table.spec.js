

describe('verify the functionality of a TABLE', () => {
    it('validate the first table', () => {
        let ageSum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tbody').children().should('have.length', 4)

        cy.get('#t01').find('tbody').children().each(function (row, index) {
            if (index != 0) {
                ageSum = ageSum + Number(row.children().eq(2).text())
            }
        }).then(function() {
            expect(ageSum).to.eq(159)
        })
    })

    it('validate the second table', () => {
        let ageSum2 = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tbody').children().each(function(rowelement,index) {
            if(index != 0){
                ageSum2 = ageSum2 + Number(rowelement.children().eq(2).text())
            }
        }).then(function() {    
            expect(ageSum2).to.eq(163)
        })
    })
})


























// describe('verify table functionality', () => {
//     it('validate table row', () => {
//         cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/42806/cgc-vs-klt-6th-match-bangladesh-premier-league-2022')
//         //cy.get('.cb-mat-mnu').children().eq(1).click()
//         cy.get('.cb-nav-bar').children().eq(1).click()
//         cy.get('#innings_1').find('cb-col cb-col-100 cb-scrd-itms')
//     })
// })