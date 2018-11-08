'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true,
          notNull: true,
          notEmpty: true,
          len: [5-30]
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
          notNull: true,
          notEmpty: true,
          len: [6-30]
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};