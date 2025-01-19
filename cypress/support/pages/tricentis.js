const SELECT_MAKE = '#make'
const BTN_MODEL = '#model'
const BTN_CAPACITY = '#cylindercapacity'
const BTN_ENGINE = '#engineperformance'
const BTN_DATE = '#dateofmanufacture'
const SELECT_NUMBE = '#numberofseats'
const SELECT_NUMBEROF = '#numberofseatsmotorcycle'
const SELECT_TYPE = '#fuel'
const BTN_PAY = '#payload'
const BTN_WEIGHT = '#totalweight'
const BTN_LISTPRICE ='#listprice'
const BTN_PLATE = '#licenseplatenumber'
const BTN_ANNUAL = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('preencherinfor', () => {
    cy.get(SELECT_MAKE).select('Honda')
    cy.get(BTN_MODEL).select('Moped')
    cy.get(BTN_CAPACITY).type('20').click
    cy.get(BTN_ENGINE).type('75').click
    cy.get(BTN_DATE).type('01/16/2025').click
    cy.get(SELECT_NUMBE).select('6')
    cy.get(SELECT_NUMBEROF).select('2')
    cy.get(SELECT_TYPE).select('Diesel')
    cy.get(BTN_PAY).type('80').click
    cy.get(BTN_WEIGHT).type('200').click
    cy.get(BTN_LISTPRICE).type('600').click
    cy.get(BTN_PLATE).type('ABC1D23')
    cy.get(BTN_ANNUAL).type('10000')
    cy.get(BTN_NEXT).click()
})
