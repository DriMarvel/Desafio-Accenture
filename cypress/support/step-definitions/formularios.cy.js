Given ('que acesso a tela Vehicle Insurance Application', () => {
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})

When ('preencho as informacoes obrigatorias' , () => {
    cy.preencherinfor()
})

And ('preencho as informacoes da aba Enter Vehicle Data' , () => {
    cy.prencherenter()
})

And ('preencho as informacoes da aba Enter Insurant Data' , () => {
    cy.preencherinsurant()
})

And ('preencho as informacoes da aba Product Data', () => {
    cy.preencherproduc()
})

Then ('recebo mensagem de concluido', () => {
    cy.preencherselect()
})