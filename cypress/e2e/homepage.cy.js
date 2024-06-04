// <reference types="cypress" />
import Utils from "../pages/utils.js"

describe('Basic UI Checks for Wealth Wizards', () => {
  beforeEach(() => {
  // Visit the website before each test
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://www.wealthwizards.com')
    Utils.acceptCookies();
  })

  it('should load the homepage', () => {
    // Check that the homepage loads
    cy.url().should('include', 'wealthwizards.com')
  
  })

  it('Take a Percy Snapshot', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('www.wealthwizards.com');
    // Take a snapshot for visual diffing
    cy.percySnapshot('Homepage responsive test', { widths: [768, 992, 1200] });
  });

  // it('should have a visible header', () => {
  //   // Check that the header is visible
  //   cy.get('head', { timeout: 10000 }).should('exist')
  // })

  // it('should have a visible navigation bar', () => {
  //   // Check that the navigation bar is visible
  //   cy.get('nav', { timeout: 10000 }).should('exist')
  // })

  // it('should have a body section', () => {
  //   // Check that the main section is present
  //   cy.get('body', { timeout: 10000 }).should('exist')
  // })

  // it('should have a What we do drop down in the navigation', () => {
  //   // Check that the contact button is in the header
  //   cy.contains('nav', "What we do")
  // })

  // it('should have a About us drop down in the navigation', () => {
  //   // Check that the contact button is in the header
  //   cy.contains('nav', "About us")
  // })

  // it('should have a Resources drop down in the navigation', () => {
  //   // Check that the contact button is in the header
  //   cy.contains('nav', "Resources")
  // })

  // it('should navigate to the Contact page when the contact button on the about us drop down is clicked', () => {
  //   // Check navigation to the Contact page
  //   cy.contains('div', "About us").click()
  //   cy.get('nav').contains('Contact').click()
  //   // cy.contains('nav').find("Contact").should('exist').click()

  //   cy.url().should('include', 'wealthwizards.com/contact-us')
  // })
  
  // it('should have a visible logo in the header', () => {
  //   // Check that the logo is visible in the header
  //   cy.get('head').within(() => {
  //     cy.get('img').should('have.attr', 'alt', 'Wealth Wizards Logo').should('be.visible')
  //   })
  // })
})