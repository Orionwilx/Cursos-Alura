const btn = document.querySelector("[data-form-btn]"); //De esta forma se seleccionan los data-atributes


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

console.log(btn);
/*
De esta forma s eescuchan eventos hay distintos tipos de eventos 
pero en este caso usaremos el tipo clicker que es cuando el usuiao hace clic
*/
btn.addEventListener("click", createTask);