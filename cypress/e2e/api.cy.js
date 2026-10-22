describe('Casos de prueba de APIs', () => {

    it('API | Comprar carrito exitosamente', () => {

        cy.request({
            method: 'POST',
            url: 'https://app.bookdb.online/api/CheckOut/2135',
            failOnStatusCode: false, // importante para que cypress no falle automaticamente ante un error 400 o 500
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYnJpYTEyMzQiLCJzdWIiOiJVc2VyIiwianRpIjoiMDBmMjMxNWMtOGE3Ny00NWI0LWFhYmItMmU1ODExNGE1MzcxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInVzZXJJZCI6IjIxMzUiLCJleHAiOjE3OTI3MTUwNDYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.Nmiz80hj6N8U0DTN2dKWvuuM-HReaQu97Wvy2J_ZcL8',
            },
            body:
            {
                "orderDetails": [
                    {
                        "book": {
                            "bookId": 2,
                            "title": "Harry Potter and the Chamber of Secrets",
                            "author": "JKR",
                            "category": "Mystery",
                            "price": 236,
                            "coverFileName": "c63ade52-3f90-41fa-980a-1136b6ad2128HP3.jpg"
                        },
                        "quantity": 1
                    }
                ],
                "cartTotal": 236
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
                            "bookId": 2,
                            "title": "Harry Potter and the Chamber of Secrets",
                            "author": "JKR",
                            "category": "Romance",
                            "price": 236,
                            "coverFileName": "9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg"
                        },
                        "quantity": 1
                    }
                ],
                "cartTotal": 236
            }
        }).then((response) => {
      expect(response.status).to.eq(401)})

    })

    it.skip('Titulo caso de prueba API 2 | Nombre Alumno', () => {
    })

    it.skip('Titulo caso de prueba API 3 | Nombre Alumno', () => {
    })


})