'use strict';
const Deck = require ('../models').Deck
const User = require ('../models').User
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {
       username: "Bobby123",
       email: "Bobby@test.com",
       password: "Test@123",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      username: "Jeff123",
      email: "Jeff@test.com",
      password: "Test@123",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      username: "Cathy123",
      email: "Cathy@test.com",
      password: "Test@123",
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ], {
      validate: true,
      individualHooks: true
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {} )
  }
};
