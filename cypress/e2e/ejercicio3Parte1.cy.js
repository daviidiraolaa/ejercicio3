// Ejemplo de prueba Cypress para crear un usuario y recuperar sus datos
it('Crea un usuario y recupera sus datos', () => {
  cy.setUsers().then((response) => {
    const { body } = response
    
    expect(response.status).to.eq(200);

    //const userId = response.body.id;
    //cy.log(response.body.id)
    const responseBody =  JSON.parse(response.requestBody);
    console.log("USER CREATED::")
    console.log(responseBody)
    //console.log('ID del usuario creado:',responseBody.id);


    /*cy.request(`https://petstore.swagger.io/v2/user/${userId}`)
      .then((getUserResponse) => {
        expect(getUserResponse.status).to.eq(200);
        expect(getUserResponse.body.username).to.eq('tu_usuario');
      });*/
  })

  cy.getUserInfo("david").then((response) => {
    const { body } = response
    
    expect(response.status).to.eq(200);

    //const userId = response.body.id;
    //cy.log(response.body.id)
    const responseBody =  response.body;
    console.log("USER INFO::")
    console.log(responseBody)
    //console.log('ID del usuario creado:',responseBody.id);
  })
//prueba esto

});
