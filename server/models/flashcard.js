'use strict';
module.exports = (sequelize, DataTypes) => {
  const FlashCard = sequelize.define('FlashCard', {
    question: DataTypes.STRING,
    answers: DataTypes.ARRAY(DataTypes.STRING),
    rightAnswer: DataTypes.INTEGER,
    type: DataTypes.STRING,
    timesCorrect: DataTypes.INTEGER,
    timesAttempted: DataTypes.INTEGER
  }, {});
  FlashCard.associate = function(models) {
    // associations can be defined here
  };
  return FlashCard;
};