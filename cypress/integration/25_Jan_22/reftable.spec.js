

describe('verify the functionality of TABLE', () => {
    //Utility function to minimize the repetitive code
    function valdidateTable(id,expected) {
        let ageTotal = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get(`#${id}`).find('tbody').children().each(function(rowelement,index) {
            if(index != 0){
                ageTotal += Number(rowelement.children().eq(2).text())
            }
         }).then(function() {
                expect(ageTotal).to.eq(expected)
         })
    }
    it('validate the first Table', () => {
        valdidateTable('t01',159)
    })

    it('validate the second Table', () => {
        valdidateTable('t02',163)
    })
})