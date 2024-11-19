const inputTarea = document.getElementById("inputTarea");
const botonAgregar = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("listaTareas");

let tareas = [];

function agregarTarea() {
  const nuevaTarea = inputTarea.value.trim();
  if (nuevaTarea) {
    tareas.push(nuevaTarea);
    crearElementoTarea(nuevaTarea);
    inputTarea.value = "";
  }
}

function crearElementoTarea(tarea) {
  const elementoTarea = document.createElement("div");
  elementoTarea.classList.add(
    "tarea",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "mb-2",
    "p-2",
    "border"
  );

  const textoTarea = document.createElement("span");
  textoTarea.textContent = tarea;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn", "btn-danger", "btn-sm");
  botonEliminar.addEventListener("click", () =>
    eliminarTarea(elementoTarea, tarea)
  );

  elementoTarea.appendChild(textoTarea);
  elementoTarea.appendChild(botonEliminar);

  listaTareas.appendChild(elementoTarea);
}

function eliminarTarea(elementoTarea, tarea) {
  tareas = tareas.filter((t) => t !== tarea);

  listaTareas.removeChild(elementoTarea);
}

botonAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keypress", (evento) => {
  if (evento.key === "Enter") {
    agregarTarea();
  }
});
