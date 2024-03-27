const Tarea = require('../models/tareaModel');

async function crearTarea(becario, descripcion, fecha, foto, lugar) {
    try {
        if (!(fecha instanceof Date)) {
            fecha = new Date(fecha);
        }
        // Restar 4 horas a la fecha
        fecha.setHours(fecha.getHours() - 4);

        const nuevaTarea = await Tarea.create({
            becario,
            descripcion,
            fecha,
            foto,
            lugar
        });
        return nuevaTarea;
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        throw error;
    }
}

async function obtenerTodasLasTareas() {
    try {
        const tareas = await Tarea.findAll();
        const tareasConImagenes = tareas.map(tarea => {
            // Comprobar si la tarea tiene una foto
            if (tarea.foto) {
                // Concatenar la ruta base de las imágenes con el nombre de la foto
                tarea.fotoUrl = `/assets/images/${tarea.foto}`;
            }
            return tarea;
        });

        return tareasConImagenes;
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        throw error;
    }
}

module.exports = {
    crearTarea,
    obtenerTodasLasTareas,
};
