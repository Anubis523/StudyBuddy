'use strict';
module.exports = (sequelize, DataTypes) => {
  const FlashCard = sequelize.define('FlashCard', {
    question: DataTypes.STRING,
    answers: DataTypes.ARRAY(DataTypes.STRING),
    rightAnswer: DataTypes.INTEGER,
    type: DataTypes.STRING,
    timesCorrect: DataTypes.INTEGER,
    timesAttempted: DataTypes.INTEGER,
    DeckId: DataTypes.INTEGER
  }, {});
  FlashCard.associate = function(models) {
    // associations can be defined here
    FlashCard.belongsTo(models.Deck, { foreignKey: 'DeckId'})
  };
  FlashCard.prototype.test = function(){
    console.log(this.question);
  };
  FlashCard.prototype.checkAnswer = function(choiceNumber) {
    this.timesAttempted++
    choiceNumber === this.rightAnswer? this.timesCorrect++ : null
    this.save()
  };
  return FlashCard;
};