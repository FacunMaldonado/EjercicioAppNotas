const fs = require('fs')

module.exports = {
    archivo: 'tareas.json',
    
    leerArchivo: function () {
		return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
	},

    /*
    leerArchivo: function(){
        return JSON.parse(fs.readFileSync(archivo, 'utf-8'));
    },
    */

    listarTareas: function(tareas){ //tareas: [] es un array
        if(tareas === undefined){
            tareas = this.leerArchivo();
        } 
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. Nombre de tarea: ${tarea.titulo}, estado: ${tarea.estado}`);
        });
    },

    escribirJSON: function (unArray){
        let JSONPuro = JSON.stringify(unArray,null, ' ')
        fs.writeFileSync (archivo, JSONPuro)
    },

    guardarTarea: function (unaTarea){
        let unArray = this.leerArchivo();
        unArray.push(unaTarea);
        this.escribirJSON(unArray);
    }

}