Cypress.Commands.add("setUsers", () => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: {
            id: 10,
            username: "david",
            firstName: "fer",
            lastName: "nandez",
            email: "dasdsad@fas.es",
            password: "1dsada",
            phone: "15456515",
            userStatus: 0
        }
      })
})

Cypress.Commands.add("getUserInfo", (userName) => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/'+userName
      })
})

Cypress.Commands.add("getPets", (status) => {
    console.log("entro")
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/findByStatus?status='+status
    })
})
