const BTN_SELETOR = ':nth-child(4) > .ideal-radio'
const BTN_NEXT = '#nextsendquote'

Cypress.Commands.add('preencherproduc', () => { 
    cy.get(BTN_SELETOR).click()
    cy.get(BTN_NEXT).click()
})