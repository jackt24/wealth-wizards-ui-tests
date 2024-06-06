const { Given, Then, When, And } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the homepage', () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.visit('https://www.wealthwizards.com');
  cy.get('button[id="onetrust-accept-btn-handler"]').click()
});

Then('I see {string} in the title', (title) => {
  cy.title().should('include', title);
});

Then('the header should exist', () => {
  cy.get('head', { timeout: 10000 }).should('exist')
});


Then('the navigation bar should exist', () => {
  cy.get('nav', { timeout: 10000 }).should('exist')
});

Then('the body section should exist', () => {
  cy.get('body', { timeout: 10000 }).should('exist')
});

When('I expand the {string} dropdown', (dropdown) => {
  cy.contains('div', dropdown).click()
});

Then('I click on {string}', (subdrop) => {
  cy.get('nav').contains(subdrop).click()
});

Then('I should be taken to the contact page', () => {
  cy.url().should('include', 'wealthwizards.com/contact-us')
});