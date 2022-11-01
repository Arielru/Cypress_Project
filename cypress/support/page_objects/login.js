import { navigateTo, NavigationPage } from "./navigationMenu"

export class login{

    validateDefaultPage(){

        cy.visit('/')
        cy.url().should('eq', '/')
    }  

    verifyNotLogged(){

        cy.get('[class="nav-line-1 nav-progressive-content"]').then( helloUser => {
            expect(helloUser.text()).contains('Hello, sign in')
            })

    }
    
    loginToAccount(username, password){

        cy.get('#nav-link-accountList').click()
        cy.get('.a-spacing-small').then( signIn => {
            expect(signIn.text()).contains('Sign in')
            })
        
        cy.get('#ap_email').type(username)
        cy.get('[type="submit"]').click()
        cy.get('#ap_password').type(password)
        cy.get('[type="submit"]').click()
        cy.get('[class="nav-line-1 nav-progressive-content"]')
        .then( helloUser => {
            expect(helloUser.text()).contains('Hello, Testoviz')
            })

    

    

      }
    }
                 
        
    
    // logOut(){
    //     cy.get('[class="nav-line-1 nav-progressive-content"]').trigger('mouseover')
    //     cy.get('#nav-al-container').should('be.visible')
    //     cy.get('[.nav-text]').click()

    // }
  

export const loginActions = new login()

