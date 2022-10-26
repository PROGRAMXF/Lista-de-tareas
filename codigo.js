const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
  //funcion para setear la fecha
  const date = new Date();

  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

// evento agragr una nueva tarea:
const addNewTask = (event) => {
  event.preventDefault();// esto impide que el form haga un submit y nos quiera llevar a otra pagina
  const { value } = event.target.taskText; //tomamos el valor de taskText del input del formulario

  if(!value) return; //sino hay value, osea si el usuario no ingreso nada en la taskText y quiera agregar una no haga nada para impedir que se agregen tareas vacias
                    
  //el return hace que se corte la ejecucion de la funcion

  const task = document.createElement('div'); //creamos un elemento tipo div
  //con este elemento vamos a hacer tres cosas:
  //primero le vamos a agregar dos clases: task y roundBorder
  task.classList.add('task', 'roundBorder');

  //despues le agregamos un event listener para cuando se hace un click llamemos a la funcion changeTaskTaste
  task.addEventListener('click', changeTaskState);

  //y por ultimo dentro del textoContext vamos a colocar el texto que ingreso el usuario
  task.textContent = value;

  //agregamos al textContainer con un prepend que hace que la ultima tarea ingresada se vaya colocando al principio de la lista  
  tasksContainer.prepend(task);

  //reseteamos el form para que quede vacio el input
  event.taget.reset();
};

setDate();
