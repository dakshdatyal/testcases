
describe('verify the functionality of File Uplaod', () => {
    it('validate the functionality of single file uplaod', () => {
        let path = '3ds max.png'
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('3ds max.png')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('contain','3ds max.png')
        cy.get('h3').contains('File Uploaded!')
    })

    it('validate the functionality of multiple file upload', () => {
        let path1 = '3ds max.png'
        let path2 = 'Gas Bill.jpg'
        let path3 = 'winver.png'
        let files = [path1, path2, path3]
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(files)
        cy.get('#fileList').children().should('have.length', files.length)
        cy.get('#fileList').children().first().should('have.text',files[0])
    })

    it.only('validate the option to change the file name during upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath: 'winver.png', fileName: 'One.png'})
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('contain', 'One.png')
        cy.screenshot()
        cy.screenshot('fileUpload')
    })

})