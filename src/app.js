const express = require('express');
const cors = require('cors');
const tareaRoutes = require('./routes/tareaRoutes');
const path = require('path');

const app = express();
app.use('/assets', express.static(path.join(__dirname, 'src', 'assets')));
app.use(cors());
app.use(express.json());

app.use('/api/tarea', tareaRoutes);

module.exports = app;

