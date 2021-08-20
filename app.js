const tareas = require("./tareas")                 //import tareas from "./tareas.json";      --Si lo pasara a ES6 module
//const { listarTareas, guardarTarea } = require('./tareas');              // Este es DESTRUCTURACION, de esta manera solamente importamos aquello que necesimatos del archivo en cuestion (se puede importar funciones)
//console.log(tareas);  //nose porq ya me lo imprime como JS y no como JSON... deberia haberle hecho JSON.PARSE para que eso pase

const accion = process.argv[2];  //En la consola se le pasan los argumentos node [0] , nombre del archivo [1],   y       [2] seria el argumento que entra al switch

switch (accion){
    case "Listar":
        tareas.listarTareas();
        break;
    case undefined: 
        console.log("Atención - Tienes que pasar una acción.");
        break;
    case "Crear":
         let nuevaTarea = {
            titulo: process.argv[3],
            estado: 'Pendiente'
         }
         tareas.guardarTarea(nuevaTarea)
         break;
    default :
        console.log("No entiendo que me estas pidiendo");
        console.log("Las acciones disponibles son: listar, crear y filtrar");
        break;
}  
