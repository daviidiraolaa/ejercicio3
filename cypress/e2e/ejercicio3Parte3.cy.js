import PetsHelper from '../e2e/PetsHelper.cy';

var petsList = []

it('obtener y listar las mascotas',   () => {
   var petsHelper = new PetsHelper(petsList);
   var pets =  petsHelper.getAllPets();
   listPets(pets)
});

async function listPets(pets) {

  console.log(pets)
  console.log('Esperando a que la lista esté llena...');
  const filledList = await waitForListToBeFilled(pets, 3);
  console.log('La lista está llena:', filledList);

  filledList.forEach(function(item, index) {
    item.forEach(function(itemAux, indexAux) {
      console.log(itemAux.id)
    });
  });
  



}


function waitForListToBeFilled(list, targetLength) {
  return new Promise(resolve => {
    if (list.length >= targetLength) {
      resolve(list);
    } else {
      const checkList = () => {
        if (list.length >= targetLength) {
          clearInterval(interval);
          resolve(list);
        }
      };
      const interval = setInterval(checkList, 100); // Comprueba cada 100 milisegundos
    }
  });
}