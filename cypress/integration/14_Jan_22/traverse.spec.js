// Traversal method - traversing DOM elements in Cypress
// Ref: https://example.cypress.io/commands/traversal

describe('Traverse methods in cypress', () => {
    it('.children() command - To get children of DOM elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })

    it('.eq() command - To get a DOM element at a specific index', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('.traversal-drinks-list').children().eq(3).should('have.text', 'Espresso')
    })

    it('.first() command - To get the first DOM element within elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('.traversal-drinks-list').children().first().should('have.id', 'coffee')
    })

    it('.last() command - To get the last DOM element within elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('.traversal-drinks-list').children().last().should('have.text', 'Sugar')
    })

    it('.next() command - To get the next sibling DOM element within elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('li[id = milk]').next().should('have.attr', 'id', 'espresso')
    })

    it('.nextAll() command - To get all of the next sibling DOM elements within elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('li[id = tea]').nextAll().should('have.length', 3)
    })

    it('.nextUntil() command - To get all of the next sibling DOM elements within elements until another element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('#coffee').nextUntil('#espresso').should('have.length', 2)
    })

    it('.prev() command - To get the previous sibling DOM element within elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('#sugar').prev().should('have.id', 'espresso')
    })

    it('.prevUntil() command - To get all previous sibling DOM elements within elements until other element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('#sugar').prevUntil('#tea').should('have.length', 2)
    })

    it('.prevAll() command - To get all previous sibling DOM elements within elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('#espresso').prevAll().should('have.length', 3)
    })

    it('.siblings() command - To get all sibling DOM elements of elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('#milk').siblings().should('have.length', 4)
    })

    it('.find() command - To get descendant DOM elements of the selector', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('nav[aria-label="Page navigation example"]').find('ul').find('li').should('have.length', 7)
    })

    it('.filter() command - To get DOM elements that match a specific selector', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('.traversal-button-states').find('button').filter('.disabled').should('have.text', 'Warning')
    })

    it('.filter() command - To get DOM elements that match a specific selector', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('div[data-toggle="buttons"]').find('button').filter('.active').should('have.text', 'Button-1')
    })

    it('.closest() command - To get the closest ancestor DOM element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('#veggie').closest('ul').should('have.class', 'traversal-food-list')
    })

    it('.not() command - To remove DOM element(s) from the set of elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('div[class = "btn-group btn-group-toggle"]').children().not('.active').should('have.length', 3)
    })

    it('.parent() command - To get parent DOM element of elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('li[class="page-item"]').parent().should('have.class', 'pagination traversal-pagination')
    })

    it('.parents() command - To get parents DOM element of elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('.traversal-cite').parents().should('have.class', 'thumbnail')
        cy.get('.traversal-cite').parents().should('have.class', 'col-sm-12')
    })

    it('.parentsUntil() command - To get parents DOM element of elements until other element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //Validation
        cy.get('.traversal-cite').parentsUntil('.traversal-cite-text').should('have.length', 2)

    })

    it('To get children of DOM elements, use the .find() .children() .last() command', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/') //open URL
        cy.get('input[name="txtUsername"]').type('Admin') // Selecting the element and entering the username
        cy.get('input[name="txtPassword"]').type('admin123')// Selecting the element and entering the password
        cy.get('#btnLogin').click()
        //Validation
        //cy.get('#welcome').should('have.text','Welcome Paul')
        cy.get('#welcome-menu').find('li').children().last().should('have.text', 'Logout')

    })
})