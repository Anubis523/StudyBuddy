'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
    Deck.belongsTo(models.User, { foreignKey: 'userId'})
    Deck.hasMany(models.FlashCard)
  };
  return Deck;
};