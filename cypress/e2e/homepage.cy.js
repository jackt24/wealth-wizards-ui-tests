// <reference types="cypress" />

describe('Basic UI Checks for Wealth Wizards', () => {
  beforeEach(() => {
  // Visit the website before each test
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://www.wealthwizards.com')
    cy.get('button[id="onetrust-accept-btn-handler"]').click()
  })

  it('should load the homepage', () => {
    // Check that the homepage loads
    cy.url().should('include', 'wealthwizards.com')
   
  })

  it('should have a visible header', () => {
    // Check that the header is visible
    cy.get('header').should('be.visible')
  })

  it('should have a visible navigation bar', () => {
    // Check that the navigation bar is visible
    cy.get('nav').should('be.visible')
  })

  it('should have a visible footer', () => {
    // Check that the footer is visible
    cy.get('footer').should('be.visible')
  })

  it('should have a main section', () => {
    // Check that the main section is present
    cy.get('main').should('be.visible')
  })

  it('should have a contact button in the header', () => {
    // Check that the contact button is in the header
    cy.get('header').within(() => {
      cy.get('a').contains('Contact').should('be.visible')
    })
  })

  it('should navigate to the Contact page when the contact button is clicked', () => {
    // Check navigation to the Contact page
    cy.get('header').within(() => {
      cy.get('a').contains('Contact').click()
    })
    cy.url().should('include', '/contact')
    cy.get('h1').should('contain', 'Contact')
  })
  
  it('should have a visible logo in the header', () => {
    // Check that the logo is visible in the header
    cy.get('header').within(() => {
      cy.get('img').should('have.attr', 'alt', 'Wealth Wizards Logo').should('be.visible')
    })
})

