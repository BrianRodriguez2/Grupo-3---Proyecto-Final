describe('Casos de prueba de FRONT', () => {
          //Titulo de pruebas
  it('Comprar carrito exitosamente y visualizar orden de compra', () => {

    //Precondicion
    cy.request({
      method: 'DELETE',
      url: 'https://app.bookdb.online/api/shoppingcart/2135',
      headers: {
        accept: 'application/json', //Se usa accept
        'content-type': 'application/json', //Se usa básico content-type
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYnJpYTEyMzQiLCJzdWIiOiJVc2VyIiwianRpIjoiZGI4ZGZjNTEtYzBlYy00MzdjLWE1NzgtZGQ3NTk5OThkNjFmIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInVzZXJJZCI6IjIxMzUiLCJleHAiOjE3OTIxMDc4MjYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.9jAnOkWPoFxQiXHV25pDQ0SUCpzQqJ5SbpBmtsUtCso'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)})
    
    //Accion paso 1:
    cy.visit('https://app.bookdb.online/login')
    cy.get('input[formcontrolname="username"]').type('bria1234')
    cy.get('input[formcontrolname="password"]').type('Pantufla1234*')
    cy.get('app-login button').contains('Login').click()

    //Respuesta del sistema paso 1:
    cy.url().should('include', 'https://app.bookdb.online/')
    cy.get('app-book-card').contains('Harry Potter and the Chamber of Secrets').should('be.visible')
    cy.get('#mat-badge-content-0').contains('0').should('be.visible')

    //Accion paso 2:
    cy.get('button').contains('Add to Cart').click()

    //Respuesta del sistema paso 2:
    cy.contains('One Item added to cart').should('be.visible')
    cy.get('#mat-badge-content-0').contains('1').should('be.visible')

    //Accion paso 3:
    cy.get('.mdc-icon-button.mat-mdc-icon-button.mat-mdc-button-base.mat-unthemed').contains('shopping_cart').click()

  })

  it.skip('Titulo caso de prueba 2 | Brian Rodriguez', () => {
    cy.visit('https://app.bookdb.online/login') //Ingresa a la pagina de login
    cy.get('input[formcontrolname="username"]').type('bria1234')
    cy.get('input[formcontrolname="password"]').type('Pantufla1234*')
    cy.get('app-login button').contains('Login').click()
  })

  it.skip('Titulo caso de prueba 3 | Brian Rodriguez', () => {
  })

  it.skip('Titulo caso de prueba 4 | Brian Rodriguez', () => {
  })

  it.skip('Titulo caso de prueba 5 | Brian Rodriguez', () => {
  })

  //it.only ejecutar solo ese caso de prueba
  //it.skip no ejecuta ese caso de prueba
  
})