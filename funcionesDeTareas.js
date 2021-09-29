const fs = require('fs');
const db = require('./tareas.json');

function leerJSON() {
    const db = require('./tareas.json');
    return db;
}

function escribirJSON(arrayTarea) {
    const arrayTareaJson = JSON.stringify(arrayTarea, null, 4);
    fs.writeFileSync('tareas.json', arrayTareaJson);
}

function guardarTarea(objetoTarea) {
    db.push(objetoTarea);
    escribirJSON(db);
}

function filtrarPorEstado(estado) {
    let tareasFiltradas = db.filter(tarea => tarea.estado == estado)
    return console.log(tareasFiltradas);
}

module.exports = { leerJSON, escribirJSON, guardarTarea, filtrarPorEstado };