/**
 * Foama de crear arreglos
 */
//Array de forma trdicional
const ciudadesdisponibles = new Array("Bogota", "Lima", "Santiago");

console.log(ciudadesdisponibles);

//Array de forma abreviada
const paisesDispo = ["Colombia","Peru", "Chile" ,"Brasil"];

console.log(paisesDispo);

{
    //Agrega en la ultima pos
     paisesDispo.push('Uriguay');
     ciudadesdisponibles.push('Montevideo');

     //Agrega en la primera pos
     paisesDispo.unshift('Ecuador');
     ciudadesdisponibles.unshift('Quito');

     console.log(paisesDispo);
     console.log(ciudadesdisponibles); 
     
     console.log(paisesDispo[0]);

    //Con la funcion splice te permite eliminar elmentos y agregar 
    //otros en la misma posicion de donde eliminaste el otro
     paisesDispo.splice(1,2 ,"Venezuela");
     console.log(paisesDispo);
     
}

