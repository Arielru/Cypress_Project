
export class asserts{

    validateDefaultPage(){

        cy.visit('/')
        cy.url().should('eq', '/')
    }

    textExpectEquals(elem, expectedResult){

        cy.get(elem).then( value => {
            expect(value.text()).equals(expectedResult)
              })

    }

    textExpectContins(elem, expectedResult){

        cy.get(elem).then( value => {
            expect(value.text()).contains(expectedResult)
              })
    }

    validateDefaultPage(){

        cy.visit('/')
        cy.url().should('eq', '/')
    }
       
}

export const assert = new asserts()

