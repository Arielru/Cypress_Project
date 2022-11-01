
export class asserts{

    validateDefaultPage(){

        cy.visit('/')
        cy.url().should('eq', '/')
    }

    textExpectEquals(elem, expectedResult){

        cy.get(elem).invoke('text').then( text => {
            expect(text).to.equal(expectedResult)
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
     
    validateURLEquals(expectedURL){

        cy.url().should('eq', expectedURL)
    }
}

export const assert = new asserts()

