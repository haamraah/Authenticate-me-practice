const config = require('./index');
require('dotenv').config();

module.exports = {
  development: {
    storage: config.dbFile,
    dialect: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  }
};
