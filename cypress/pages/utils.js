// cypress/pages/utils.js

class Utils {
  elements = {
    acceptCookies: () => cy.get('button[id="onetrust-accept-btn-handler"]')
  }

  acceptCookies() {
    this.elements.acceptCookies().click()
  }
}

export default new Utils()