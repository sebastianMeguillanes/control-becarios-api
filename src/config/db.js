const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '181.188.156.195',
  port: 18009,
  username: 'cardUser',
  password: 'Card.2024',
  database: 'becarios-db',
  logging: false,
});

module.exports = sequelize;