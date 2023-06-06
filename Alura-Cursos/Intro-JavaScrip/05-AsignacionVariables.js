//paracbra const es un 
// espacio en memoria que no cambia con el timepo

const valorPasaje = 1650;


console.log(valorPasaje);

const nombrePasajero = "Lenardo";
const apellidoPasajero = "Lacruz";


let nombrePasajero1 = "Lenardo";
let apellidoPasajero1 = "Lacruz";

//let tipo de variable que cambia a travez  del timpo
var nombreCompetloPasajero = nombrePasajero1 + " " + apellidoPasajero1;

//Bloque
{
    let nombreCompleto = nombrePasajero1 + " " + apellidoPasajero1;
    console.log("Con let"+nombreCompleto);
    console.log("Con var"+nombreCompetloPasajero);
}   


/**
 * La diferencia deentre let y var es el alcanze que 
 * conlleva cada unad de las dos mientras que el let solo 
 * funciona dentro del bloque en el que esta VAR tiene un alcanze 
 * mayor funcionando en ambois lugares
 * 
 */


// Con let ya no funciona fuera de su bloque
//console.log("Con let"+nombreCompleto);
console.log("Con var"+nombreCompetloPasajero);