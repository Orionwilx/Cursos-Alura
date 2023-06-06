
    import checkComplete from "./Components/checkComplete.js";
    import deleteIco from "./Components/deleteIco.js";

    const btn = document.querySelector('[data-form-btn]');
  
    const createTask = (evento) => {
      evento.preventDefault();
      const input = document.querySelector('[data-form-input]');
      const value = input.value;
      const list = document.querySelector('[data-list]');
      const task = document.createElement('li');
      task.classList.add('card');
      input.value = '';
      //backticks
      const taskContent = document.createElement('div');
  
      const titleTask = document.createElement('span');
      titleTask.classList.add('task');
      titleTask.innerText = value;
      taskContent.appendChild(checkComplete());
      taskContent.appendChild(titleTask);
      
  
      
      // task.innerHTML = content;
      task.appendChild(taskContent);
      task.appendChild(deleteIco());
      list.appendChild(task);
    };
  
    //Arrow functions o funciones anonimas
    btn.addEventListener('click', createTask);
  
    

    

  // Immediately invoked function expression IIFE 
  //Es crear una funcion anonima en todo el codigo ara 
  //que el scoope de las funciones que estan dentro se salgan 
  //del rango del usuario y no las puedan ver o cvisualizar y 
  //asi evitamos eso sin que el codigo deje de funcionar

  


