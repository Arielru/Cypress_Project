
export class webUIActions{

    getClick(elem){

        cy.get(elem).click()

    }   
    
    containsClick(elem){

        cy.contains(elem).click()

    } 
}

export const uiActions = new webUIActions()