var petsData = []
var soldPets = []
var pending = []
var available = []

class PetsHelper {
  constructor(petsList) {
    this.petsData = petsList;
  }

   getAllPets() {
    this.clearPets();

   var mascota = []
   var allValues = '';
    
   cy.getPets("sold").then(response =>  { 
    const { body } = response
    expect(response.status).to.eq(200)


    for (var i = 0; i < response.body.length; i++) {
      var obj = response.body[i];
      // Concatenate the values from each JSON object
      allValues += JSON.stringify(obj);
    }

    cy.getPets("pending").then(response1 => { 
      const { body } = response1
      expect(response1.status).to.eq(200)

      for (var i = 0; i < response1.body.length; i++) {
        var obj = response1.body[i];
        // Concatenate the values from each JSON object
        allValues += JSON.stringify(obj);
      }

  //  mascota.push(body)


    cy.getPets("available").then(response2 => { 
      const { body } = response2
      expect(response2.status).to.eq(200)
      for (var i = 0; i < response2.body.length; i++) {
        var obj = response2.body[i];
        // Concatenate the values from each JSON object
        allValues += JSON.stringify(obj);
      }

     // mascota.push(body)
     mascota = [allValues]
     console.log(mascota)
      return mascota;

    })
    })

   })
    

   return mascota;



  }

  /* getPetsByStatus(status) {
    var petsByStatus = []
    cy.getPets(status).then((response) => {
      for (const pet of response.body) {
      const mascota = { id: pet.id, nombre: pet.name };
      petsByStatus.push(mascota);
    }
    });
    console.log("fin consulta ")
    return petsByStatus;
  }*/

  setPets(petsList) {
    this.petsData = petsList;
  }

  clearPets() {
    console.log("CLEAR")
    this.petsData = Array();
  }
}

export default PetsHelper;
