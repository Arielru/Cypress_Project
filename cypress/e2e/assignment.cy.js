import { loginActions } from "../support/page_objects/login"
import { navigateTo } from "../support/page_objects/navigationMenu"
import { pagesCurrentStatus } from "../support/page_objects/pageLoad"
import { uiActions } from "../support/page_objects/uiActions"
import { assert } from "../support/page_objects/asserts"

describe('Assignment - Ariel Rudin', () => {
  before('validate all menus are accessible', () => {
    
    cy.fixture('credentials').then((user)  => {
      var name = user.name
      var pass = user.password
  })
    
    cy.visit('/')    
    //Validate all menu buttons are present.
    navigateTo.homePage()
    navigateTo.todaysDealsPage()
    navigateTo.customerServicePage(false)
    navigateTo.registryPage()
    navigateTo.sellPage()
    navigateTo.localDeliveryInIsraelPage()
    pagesCurrentStatus.cartEmpty()
  })

  beforeEach('Open application', () => {

    cy.visit('/')  
    Cypress.config('defaultCommandTimeout', 10000);   
    loginActions.verifyNotLogged()
    loginActions.loginToAccount('testoviz.general@gmail.com', 'BlaBla')
    navigateTo.homePage()

  })

  it('Test 1 - wheres my stuff? ', () => {
    navigateTo.customerServicePage(true)
    cy.get('.help-search-bar').type('where is My Stuff{enter}')
    assert.textExpectEquals('.help-content', 'Where\'s My Stuff?')
  })
  

  it('Test 2 - check filter "Amazon Devices', () => {
    navigateTo.todaysDealsPage()
    uiActions.containsClick('Amazon Devices')
    uiActions.containsClick('Clear')

  })

  it.only('Test 3 - add prodcuts to cart', () => {
    navigateTo.googleAssistPage()
    uiActions.getClick('[alt="White"]')
    cy.get('[alt="White"]').click()
    cy.get('.selection').then( productColor => {
      expect(productColor.text()).contains('White')
    uiActions.getClick('#add-to-cart-button')
    assert.textExpectEquals('.a-alert-heading', 'Added to Cart')
    })

    navigateTo.scissorsPage
    cy.get('#color_name_1')
    .invoke('attr', 'title')
    .should('eq', 'Click to select Red, Black, Blue')
    uiActions.getClick('#add-to-cart-button')
    assert.textExpectEquals('.a-alert-heading', 'Added to Cart')
  
    navigateTo.cartPage()
  cy.get('#sc-subtotal-label-buybox')
  .invoke('attr', 'outerText')  
  .should('eq', 'Subtotal (2 items):')
  })
})