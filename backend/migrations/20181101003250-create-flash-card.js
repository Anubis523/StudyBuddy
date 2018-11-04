'use strict';
 /*
 *TODO: Probably will have to refactor use the link below as reference, hooks don't play well w/ cli generated models
 *SEE: http://docs.sequelizejs.com/manual/tutorial/associations.html#creating-with-associations 
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FlashCards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },
      answers: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      rightAnswer: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      timesCorrect: {
        type: Sequelize.INTEGER
      },
      timesAttempted: {
        type: Sequelize.INTEGER
      },
      DeckId: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('FlashCards');
  }
};