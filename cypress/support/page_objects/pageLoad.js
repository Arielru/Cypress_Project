
export class pagesStatus{

    validateDefaultPage(){

        cy.visit('/')
        cy.url().should('eq', '/')
    }

    cartEmpty(){

        cy.get('#nav-cart-count').click()
        cy.get('[class="a-column a-span8 a-span-last"]').then( label => {
            expect(label.text()).contains('Your Amazon Cart is empty')
            })

    }
       
}

export const pagesCurrentStatus = new pagesStatus()

