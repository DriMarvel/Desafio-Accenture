const BTN_EMAIL = '#email'
const BTN_USERNAME = '#username'
const BTN_PASSWORD = '#password'
const BTN_CONFIRPASS = '#confirmpassword'
const BTN_SEND = '#sendemail'

Cypress.Commands.add('preencherselect', () => { 
    cy.get('#email').type('gojosatoru.20@gmail.com', { force: true });
    cy.get(BTN_USERNAME).type('GojoSatoru')
    cy.get(BTN_PASSWORD).type('Gojo@2025#')
    cy.get(BTN_CONFIRPASS).type('Gojo@2025#')
    cy.get(BTN_SEND).click()
})