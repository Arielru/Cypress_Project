
export class NavigationPage{

    todaysDealsPage(){

        cy.get('#nav-xshop').contains('Today\'s Deals').click()
        cy.url().should('eq', 'https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')
    }

    customerServicePageNotLogged(){

        cy.get('#nav-xshop').contains('Customer Service').click()
        cy.url().should('eq', 'https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')

    }

    customerServicePageLogged(){

        cy.get('#nav-xshop').contains('Customer Service').click()
        cy.url().should('eq', 'https://www.amazon.com/hz/contact-us/foresight/hubgateway')

    }


    registryPage(){

        cy.get('#nav-xshop').contains('Registry').click()
        cy.url().should('eq', 'https://www.amazon.com/registries?ref_=nav_cs_registry')

    }

    gistCardsPage() {

        cy.get('#nav-xshop').contains('Gift Cards').click()
        cy.url().should('eq', 'https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc')

    }

    sellPage(){

        cy.get('#nav-xshop').contains('Sell').click()
        cy.url().should('eq', 'https://www.amazon.com/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell')

    }  
        
    localDeliveryInIsraelPage(){

        cy.get('#nav-xshop').contains('Local Delivery in Israel').click()
        cy.url().should('eq', 'https://www.amazon.com/gp/browse.html?node=19244970011&ref_=nav_cs_local_delivery')
    }

    homePage(){
        cy.get('#nav-logo-sprites').parents('#nav-logo').click()
        cy.url().should('eq', 'https://www.amazon.com/ref=nav_logo')
    }

    cartPage(){
        cy.get('#nav-cart-count').click()
        cy.url().should('eq', 'https://www.amazon.com/gp/cart/view.html?ref_=nav_cart')
    }

    loginPage(){
        cy.get('#nav-link-accountList').click()
        cy.url().contains('eq', 'https://www.amazon.com/ap/signin?openid.pape.max_auth_age')
    }

    googleAssistPage(){
    cy.visit('https://www.amazon.com/Outlet-Holder-Space-Saving-Accessories-Assistant/dp/B07B8B1ZSF/')
    }

    scissorsPage(){
        cy.visit('https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z')
    }
}

export const navigateTo = new NavigationPage()

