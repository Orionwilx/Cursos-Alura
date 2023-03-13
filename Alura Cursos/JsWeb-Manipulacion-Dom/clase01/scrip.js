const btn = document.querySelector("[data-form-btn]"); //De esta forma se seleccionan los data-atributes


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";

    //backticks (``) Sirve para mezclar codigo html con js
    const content = `<div>
                        <i class="far fa-check-square icon "></i>
                        <span class="task">${value}</span>
                    </div>`
    console.log(content);
    //La funcion innerHTML sirve apra agregar contenido al html desde js
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content);
}

console.log(btn);
/*
De esta forma s eescuchan eventos hay distintos tipos de eventos 
pero en este caso usaremos el tipo clicker que es cuando el usuiao hace clic
*/
btn.addEventListener("click", createTask);