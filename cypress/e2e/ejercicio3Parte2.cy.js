
var petsList = Array()


it('obtener y listar las mascotas', () => {
  cy.getPets("sold").then((response) => {
    getPets(response.body)
    listPets(petsList)
  })
})


function getPets(petsData){
  for (const pets of petsData) {
    const mascota = {id: pets.id, nombre: pets.name};
    petsList.push(mascota)
  }
  return petsList
}

function listPets(petsList){
  for(const pet of petsList){ 
    console.log("Pet id "+pet.id)
    console.log("Name pet "+pet.nombre)
  }
}
