let funciones = require('./funcionesDeTareas');

let accion = process.argv[2];

switch (accion) {
    case 'listar':
        funciones.leerJSON().forEach(function(tarea) {
            console.log(tarea);
        });
        break;
    case 'crear':
        const nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente',
        }
        funciones.guardarTarea(nuevaTarea);
        break;
    case 'filtrar':
        const estado = process.argv[3];
        funciones.filtrarPorEstado(estado);
        break;
    case undefined:
        console.log('No entiendo qué quieres hacer');
        break;
    default:
        console.log('Atención - Tienes que pasar una acción');
}