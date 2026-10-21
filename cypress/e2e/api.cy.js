describe('Casos de prueba de APIs', () => {

    it('API | Comprar carrito exitosamente', () => {

        cy.request({
            method: 'POST',
            url: '	https://app.bookdb.online/api/CheckOut/2135',
            failOnStatusCode: false, // importante para que cypress no falle automaticamente ante un error 400 o 500
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYnJpYTEyMzQiLCJzdWIiOiJVc2VyIiwianRpIjoiZGI4ZGZjNTEtYzBlYy00MzdjLWE1NzgtZGQ3NTk5OThkNjFmIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInVzZXJJZCI6IjIxMzUiLCJleHAiOjE3OTIxMDc4MjYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.9jAnOkWPoFxQiXHV25pDQ0SUCpzQqJ5SbpBmtsUtCso',
            },
            body:
            {
                "orderDetails": [
                    {
                        "book": {
                            "bookId": 3,
                            "title": "Harry Potter and the Prisoner of Azkaban",
                            "author": "JKR",
                            "category": "Romance",
                            "price": 213,
                            "coverFileName": "c63ade52-3f90-41fa-980a-1136b6ad2128HP3.jpg"
                        },
                        "quantity": 1
                    }
                ],
                "cartTotal": 213
            }
        }).then((response) => {
      expect(response.status).to.eq(200)})
      
    })

    it('API | Error al comprar carrito sin token', () => {

        cy.request({
            method: 'POST',
            url: 'https://app.bookdb.online/api/CheckOut/2135',
            failOnStatusCode: false, // importante para que cypress no falle automaticamente ante un error 400 o 500
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: '',
            },
            body:
            {
                "orderDetails": [
                    {
                        "book": {
                            "bookId": 3,
                            "title": "Harry Potter and the Prisoner of Azkaban",
                            "author": "JKR",
                            "category": "Romance",
                            "price": 213,
                            "coverFileName": "c63ade52-3f90-41fa-980a-1136b6ad2128HP3.jpg"
                        },
                        "quantity": 1
                    }
                ],
                "cartTotal": 213
            }
        }).then((response) => {
      expect(response.status).to.eq(401)})

    })

    it.skip('Titulo caso de prueba API 2 | Nombre Alumno', () => {
    })

    it.skip('Titulo caso de prueba API 3 | Nombre Alumno', () => {
    })


})