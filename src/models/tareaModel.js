const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Tarea = sequelize.define('Tarea', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  becario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tareas',
  timestamps: true
});

module.exports = Tarea;

