const Sequelize = require('sequelize'),
db = new Sequelize('postgres://localhost:3001/db')

module.exports = db