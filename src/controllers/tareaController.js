// controllers/tareaController.js
const tareaService = require('../services/tareaService');
async function crearTarea(req, res) {
  const { becario, descripcion, fecha, lugar } = req.body;
  console.log(fecha+ "fechacontoller");
  let foto;
  if (req.file && req.file.filename) {
    foto = req.file.filename;
  }

  try {
    const nuevaTarea = await tareaService.crearTarea(becario, descripcion, fecha, foto, lugar);
    res.status(201).json({ message: 'Tarea creada exitosamente', tarea: nuevaTarea });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
}


module.exports = {
  crearTarea
};
