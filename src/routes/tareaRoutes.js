// routes/tareaRoutes.js
const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const upload = require('../config/ulterConfig');

// Ruta para crear una nueva tarea con imagen
router.post('/', upload.single('foto'), tareaController.crearTarea);

module.exports = router;


