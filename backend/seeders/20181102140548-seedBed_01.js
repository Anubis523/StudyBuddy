'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('User', [
     {
       username: "Bobby123",
       email: "Bobby@test.com",
       password: "Test@123"
     },
     {
      username: "Jeff123",
      email: "Jeff@test.com",
      password: "Test@123"
     },
     {
      username: "Cathy123",
      email: "Cathy@test.com",
      password: "Test@123"
     }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('User', null, {} )
  }
};
