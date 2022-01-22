
describe('Verify the Read Write operations', () => {
    //READ WRITE Operations with .txt file
    it('Verify the writeFile() function with txt file', () => {
        // writeFile() will create a .txt file under Cypress folder
        cy.writeFile('textOne.txt', "I am learning Cypress")
        // To replace/overwrite the exiting text in the textOne.txt file
        cy.writeFile('textOne.txt', "Python")
        // To add new text(Append) - Append contents to the end of a file
        cy.writeFile('textOne.txt', '\nJavascript', { flag: 'a+' })
    })

    it('Verify the readFile() function with txt file', () => {
        // exist - it will check file in root folder
        cy.readFile('textOne.txt').should('exist')
        // contain - search and find the substring
        cy.readFile('textOne.txt').should('contain', 'Javascript')
        // and - it will only search the substring if file exists.
        cy.readFile('textOne.txt').should('exist').and('contain', 'Python')

    })

    //READ WRITE Operations with JSON file
    it('Verify the writeFile() function with JSON file', () => {
        cy.writeFile('cypress/fixtures/abc.json', {
            'fullName': 'daksh datyal',
            'age': '31',
            'rollNo': '22'
        })
    })
    it('Verify the fixture() function to read JSON file', () => {
        //fixture() is used to read a file saved in 'fixture' folder
        cy.fixture('abc').then((response) => {
            cy.log(response)
        })
    })
})
