const BTN_FIRST = '#firstname'
const BTN_LAST = '#lastname'
const BTN_BIRTHDATE = '#birthdate'
const SELECT_COUNTRY = '#country'
const BTN_ZIPCODE = '#zipcode'
const SELECT_OCCUPA = '#occupation'
const BTN_HOBBIES = 'section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1)'
const BTN_CLICK = '#nextenterproductdata'


Cypress.Commands.add('prencherenter', () => { 
    cy.get(BTN_FIRST).type('Gojo')
    cy.get(BTN_LAST).type('Satoru')
    cy.get(BTN_BIRTHDATE).type('01/15/2003')
    cy.get(SELECT_COUNTRY).select('Brazil')
    cy.get(BTN_ZIPCODE).type('5647')
    cy.get(SELECT_OCCUPA).select('Farmer')
    cy.get(BTN_HOBBIES).type('Speeding').click
    cy.get(BTN_CLICK).click()
})