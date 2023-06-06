const ciudadesdisponibles = new Array("Bogota", "Lima", "Santiago", "MonteVideo");

const paisesDispo = ["Colombia","Peru", "Chile" ,"Brasil", "Uruguay"];

const cantidadDeCiudades = ciudadesdisponibles.length;

console.log(`En la lista de ciudades: ${cantidadDeCiudades}`);
console.log(`Cantidad de paises: ${paisesDispo.length}`);

//remover el primer elemento
paisesDispo.shift();
console.log(paisesDispo);

//remover el ultimo

paisesDispo.pop();
console.log(paisesDispo);


//filtro de elementos dentro de la lista

const paisesFiltrados = paisesDispo.filter(paisesM => paisesM.length > 5);
console.log(paisesFiltrados);


//Unir todo el array en un String elijiendo un separador
console.log(paisesDispo.join('-'));

//Ordenar la lista
console.log(paisesDispo.sort());
//Nota: No todas las funciones de orneamiento mdofican el arreglo sort lo modifica
//pero en cualquier otro caso habria que crear un variable para almacenar el array de forma ordenada



//Conociendo un apos
console.log(`Peru esta en la pos: ${paisesDispo.indexOf('Peru')+1}`);


//Unificando dos listas

const lsitaPaisesYciudades = paisesDispo.concat(ciudadesdisponibles);

console.log(lsitaPaisesYciudades);