const BTN_STARTDATE = '#startdate'
const SELECT_INSURANCE = '#insurancesum'
const SELECT_MERIT = '#meritrating'
const SELECT_DAMANGE = '#damageinsurance'
const BTN_OPTIONAL = '#EuroProtection'
const SELECT_COURT = '#courtesycar'
const BTN_CLICK = '#nextselectpriceoption'

Cypress.Commands.add('preencherinsurant', () => { 
    cy.get(BTN_STARTDATE).type('05/14/2025')
    cy.get(SELECT_INSURANCE).select('20.000.000,00').click
    cy.get(SELECT_MERIT).select('Bonus 5')
    cy.get(SELECT_DAMANGE).select('No Coverage')
    cy.get(BTN_OPTIONAL).check({force: true}).should("be.checked")
    cy.get(SELECT_COURT).select('Yes')
    cy.get(BTN_CLICK).click()
})